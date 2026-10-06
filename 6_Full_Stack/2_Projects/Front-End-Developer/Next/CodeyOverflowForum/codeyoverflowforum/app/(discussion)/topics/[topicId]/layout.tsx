import { ReactNode } from 'react'
import Button from '../../../../components/button/Button'

export default function TopicsLayout({ children }: { children: ReactNode; }) {
  return (
    <div>
      {children}
      <footer>
        <Button href="/topics" label="Back To All Topics"></Button>
      </footer>
    </div>
  )
}