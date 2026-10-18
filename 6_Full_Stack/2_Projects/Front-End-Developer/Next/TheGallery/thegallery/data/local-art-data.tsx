export const artData: Artwork[] = [
    {
      objectID: 364093,
      primaryImage:
        'https://images.metmuseum.org/CRDImages/dp/original/DP170782.jpg',
      title: 'Bathers (recto); Landscape (verso)',
      artistDisplayName: 'Paul Cézanne',
      objectDate: 'ca. 1888 (recto); n.d. (verso)',
    },
    {
      objectID: 436946,
      primaryImage:
        'https://images.metmuseum.org/CRDImages/ep/original/DP-13655-001.jpg',
      title: 'The Brioche',
      artistDisplayName: 'Edouard Manet',
      objectDate: '1870',
    },
    {
      objectID: 436948,
      primaryImage:
        'https://images.metmuseum.org/CRDImages/ep/original/DP-14936-027.jpg',
      title: 'Boy with a Sword',
      artistDisplayName: 'Edouard Manet',
      objectDate: '1861',
    },
    {
      objectID: 459966,
      primaryImage:
        'https://images.metmuseum.org/CRDImages/rl/original/DT3302.jpg',
      title: 'Beach Scene',
      artistDisplayName: 'Auguste Renoir',
      objectDate: '1883',
    },
    {
      objectID: 438014,
      primaryImage:
        'https://images.metmuseum.org/CRDImages/ep/original/DT1879.jpg',
      title:
        'The Daughters of Catulle Mendès, Huguette (1871–1964), Claudine (1876–1937), and Helyonne (1879–1955)',
      artistDisplayName: 'Auguste Renoir',
      objectDate: '1888',
    },
    {
      objectID: 285444,
      primaryImage:
        'https://images.metmuseum.org/CRDImages/ph/original/DP117520.jpg',
      title: '[Self-Portrait with Christine and Yvonne Lerolle]',
      artistDisplayName: 'Edgar Degas',
      objectDate: 'probably 1895–96',
    },
  ]
  
  export type Artwork = {
    objectID: number
    primaryImage: string
    title: string
    artistDisplayName: string
    objectDate: string
  }
  