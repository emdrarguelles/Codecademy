import React, { Suspense } from 'react'  
import ArtGallery from '../components/gallery/ArtGallery'
import LoadingGallery from '../components/featured/LoadingGallery'

import styles from './page.module.css'

export default function Home() {  
  return (  
    <main className={styles.main}>  
      <Suspense fallback={<LoadingGallery />}>  
        <ArtGallery />  
      </Suspense>  
    </main>  
  );  
}  
