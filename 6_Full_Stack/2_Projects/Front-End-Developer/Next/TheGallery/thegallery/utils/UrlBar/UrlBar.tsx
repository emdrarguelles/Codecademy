'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { navigate } from './actions'

import { useState, useEffect } from 'react'

import styles from './UrlBar.module.css'

export default function UrlBar({ baseURL }: { baseURL: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const [inputURL, setInputURL] = useState(baseURL)

  useEffect(() => {
    const search = searchParams.toString()
    setInputURL(`${baseURL}${pathname}${search? "?" + search : ""}`)
  }, [pathname, searchParams])

  return (
    <form action={navigate}>
      <input
        className={styles.urlInput}
        name="url"
        value={inputURL}
        onChange={(event) => setInputURL(event.target.value)}
      />
    </form>
  )
}
