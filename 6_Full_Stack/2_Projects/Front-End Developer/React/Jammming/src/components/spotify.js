const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = 'http://127.0.0.1:5173';

let accessToken;

// Generate Random code for PKCE requirement by Spotify
function generateCodeVerifier() {
    const array = new Uint8Array(64);
    window.crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array))
        .split('+').join('-')
        .split('/').join('_')
        .split('=').join('');
}

async function generateCodeChallenge(verifier) {
    const data = new TextEncoder().encode(verifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .split('+').join('-')
        .split('/').join('_')
        .split('=').join('');
}

const Spotify = {
    async getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const urlParam = new URLSearchParams(window.location.search);
        const code = urlParam.get('code');

        if (code) {
            const verifier = localStorage.getItem('pkce_verifier');

            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    client_id: clientId,
                    grant_type: 'authorization_code',
                    code,
                    redirect_uri: redirectUri,
                    code_verifier: verifier
                })
            });

            const data = await response.json();
            accessToken = data.access_token;
            window.history.pushState('', null, '/');
            localStorage.removeItem('pkce_verifier');
            return accessToken;
        }

        const verifier = generateCodeVerifier();
        const challenge = await generateCodeChallenge(verifier);
        localStorage.setItem('pkce_verifier', verifier);

        const scope = 'playlist-modify-public playlist-modify-private';
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&code_challenge_method=S256&code_challenge=${challenge}`;
        window.location = authUrl;
    },

    async search(query) {
        const token = await this.getAccessToken()
        const urlToFetch = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`
        
        try {
            const response = await fetch(urlToFetch, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (response.ok) {
              const jsonResponse = await response.json();
              const tracks = jsonResponse.tracks.items.map((track => (
                { id: track.id, name: track.name, artist: track.artists[0].name, album: track.album.name, uri: track.uri }
              )))
              return tracks;
            }
          } catch (error) {
            console.log(error);
          }
    },

    async getUserId() {
        const token = await this.getAccessToken()
        const urlToFetch = 'https://api.spotify.com/v1/me'
        
        try {
            const response = await fetch(urlToFetch, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (response.ok) {
              const jsonResponse = await response.json();
              const userId = jsonResponse.id
              return userId;
            }
          } catch (error) {
            console.log(error);
          }
    },

    async createPlaylist(userId, name) {
        const token = await this.getAccessToken()
        
        try {
            const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    public: false
                })
            });
            const data = await response.json();
            return data.id;
            
        } catch (error) {
            console.log(error);
        }

    },

    async savePlaylist(name, uris) {
        const userId = await this.getUserId();
        const playlistId = await this.createPlaylist(userId, name);

        const token = await this.getAccessToken()
        
        try {
            await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/items`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uris })
            });
        } catch (error) {
            console.log(error);
        }
    },
}

export default Spotify;