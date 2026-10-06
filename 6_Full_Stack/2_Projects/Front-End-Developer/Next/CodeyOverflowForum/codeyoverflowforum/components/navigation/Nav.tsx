'use client'
import Button from '../button/Button'
import styles from './Nav.module.css'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={pathname === '/' ? 'active' : ''}>
          <Button label="Home" href="/" />
        </li>
        <li className={pathname === '/about' ? 'active' : ''}>
          <Button label="About" href="/about" />
        </li>
        <li className={pathname === '/topics' ? 'active' : ''}>
          <Button label="Topics" href="/topics" />
        </li>
        <li className={pathname === '/questions' ? 'active' : ''}>
          <Button label="All Questions" href="/questions" />
        </li>
        <li className={pathname === '/users' ? 'active' : ''}>
          <Button label="All Users" href="/users" />
        </li>
      </ul>
    </nav>
  );
}
