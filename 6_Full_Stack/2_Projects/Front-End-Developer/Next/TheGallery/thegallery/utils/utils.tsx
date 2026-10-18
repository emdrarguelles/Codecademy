import { Artwork, artData } from '../data/local-art-data'
import { Comment, CommentData, commentData } from '../data/local-comment-data'

//In a production app, data would be fetched from a server-side database or an API endpoint.

export const fetchArtData = async (): Promise<Artwork[]> => {
  // There is an artificial timer here to simulate latency.
  await new Promise((resolve) => setTimeout(resolve, 500))
  return artData
}
 
export const fetchCommentData = async (id: number): Promise<Comment[]> => {  
  // There is an artificial timer here to simulate latency.  
  await new Promise((resolve) => setTimeout(resolve, 500));  
  return commentData[id] || [];  
};  

export type { Artwork, Comment, CommentData };  