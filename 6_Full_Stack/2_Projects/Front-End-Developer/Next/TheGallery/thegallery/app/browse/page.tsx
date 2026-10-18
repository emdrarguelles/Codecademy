import { fetchObjectIDs } from "../../lib/fetch-data";
import { selectRandomIDs } from "../../lib/utils";
import styles from "./page.module.css";
// Imports
import Post from '../../components/post/Post'
import Loading from '../../components/post/LoadingPost'
import { Suspense } from 'react'
import SearchBar from '../../components/search/Search'

// Access search params
export default async function Browse({ searchParams }: { searchParams: Promise<{ query: string }>}) {
  const { query: searchTerm } = await searchParams
  const query = searchTerm || 'flowers'

  return (
    <main className={styles.main}>
      <SearchBar placeholder="Search artwork..." />
      <p className={styles.search_result}>Search results for {query}:</p>
      <Suspense fallback={<p>Loading items...</p>}>
        <SearchResults query={query}/>
      </Suspense>
    </main>
  )

}

async function SearchResults({ query }: { query: string}) {
  const entries = await fetchObjectIDs(query)
  const randomObjectIDs = selectRandomIDs(
    entries.objectIDs,
    entries.total > 10 ? 10 : entries.total,
  )
  return (
    <>
      {randomObjectIDs.map((objectID) => (
        <Suspense key={objectID} fallback={<Loading />}>
          <Post id={objectID}/>
        </Suspense>
      ))}
    </>
  )
}