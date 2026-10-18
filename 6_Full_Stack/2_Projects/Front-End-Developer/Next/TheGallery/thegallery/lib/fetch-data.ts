// Imports
import 'server-only'
import { cache } from 'react'

const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1";
const searchUrl = "https://collectionapi.metmuseum.org/public/collection/v1.1";

// Using Met Museum of Art API: https://metmuseum.github.io/
// Create `fetchObjectIDs()`
export const fetchObjectIDs = cache(async (term: string) => {
  const response = await fetch(`${searchUrl}/search?hasImages=true&q=${term}`,
  {
    next: {revalidate: 10}
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`)
  }

  return response.json()
}) 

// Create `fetchObject()`
export const fetchObject = cache(async (objectID: number) => {
  try {
    const response = await fetch(`${baseUrl}/objects/${objectID}`,
    {
      next: {revalidate: 10}
    })

    if (!response.ok) {
      return { data: null, error: 'Failed to fetch object.'}
    }

    const data = await response.json()
    return { data, error: null }
  } catch {
    return {data: null, error: 'Failed to fetch object.'}
  }
})
