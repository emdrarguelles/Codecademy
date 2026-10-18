import React, {Suspense} from 'react'
import Image from 'next/image'
import Comment from '../comment/Comment'
import StoredComments from '../comment/StoredComments'
import LoadingComments from '../comment/LoadingComments'
import { Artwork } from '../../utils/utils'
import styles from './Featured.module.css'
  
export default function Featured({  
  objectID,  
  primaryImage,  
  title,  
  objectDate,  
  artistDisplayName,  
}: Artwork) {  
  return (  
    <div className={styles.featured}>  
      <Image
        unoptimized
        loading="eager"
        className={styles.featuredImage}  
        src={primaryImage === '' ? '/blank.jpg' : primaryImage}  
        alt={title}  
        width={500}  
        height={500}
      /> 
      <div className={styles.caption}>
        <p className={styles.title}>{title}</p>  
        <p>{artistDisplayName}</p>  
        <p>{objectDate}</p>
      </div>
      <div className={styles.comments_section}>
        <Suspense fallback={<LoadingComments />}>
          <StoredComments id={objectID} />
        </Suspense>
      </div>
      <Comment id={objectID} />
    </div>  
  );  
}  
