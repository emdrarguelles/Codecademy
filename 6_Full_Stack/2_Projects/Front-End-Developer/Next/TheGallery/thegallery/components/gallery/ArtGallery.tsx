import React from 'react'
import Featured from '../featured/Featured'  
import { fetchArtData } from '../../utils/utils'
import styles from './ArtGallery.module.css'
  
export default async function ArtGallery() {  
  const artData = await fetchArtData();  
  
  return (  
    <div className={styles.gallery}>  
      {artData.map((artwork) => (  
        <Featured key={artwork.objectID} {...artwork} />  
      ))}  
    </div>  
  );  
}  
