'use client'
import { ReactNode } from 'react'
import Button from '../../../../components/button/Button'

export default function UserTemplate({ children }: { children: ReactNode; }) {
  const requestTime = new Date()
  return (
    <div>
      {children}
      <footer>
        Last Checked: {requestTime.toLocaleTimeString()}
        <br/><br/>
        <Button href="/users" label="Back To All Users" />
      </footer>
    </div>
  )
}