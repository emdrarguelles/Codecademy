import { ReactNode } from 'react'
import Button from '../../../../components/button/Button'

export default function TopicsLayout({ children }: { children: ReactNode; }) {
  return (
    <div>
      {children}
      <footer>
        <Button href="/questions" label="Back To All Questions"></Button>
      </footer>
    </div>
  )
}