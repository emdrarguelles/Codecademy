'use client'
import { useSelectedLayoutSegments } from 'next/navigation'

import Button from '../button/Button'

import styles from './Nav.module.css'

export default function Nav() {
  const segments = useSelectedLayoutSegments()
  const lastSegment = segments[segments.length - 1]
  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={styles.logo}>The Gallery</li>
        <li className={lastSegment ? '' : styles.selected}>
          <Button label="Featured" href="/" />
        </li>
        <li className={lastSegment == 'browse' ? styles.selected : ''}>
          <Button label="Browse" href="/browse" />
        </li>
      </ul>
    </nav>
  )
}
