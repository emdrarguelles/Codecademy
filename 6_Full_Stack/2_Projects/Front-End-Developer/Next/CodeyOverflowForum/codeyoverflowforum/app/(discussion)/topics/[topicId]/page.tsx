'use client'
import React, { use, useEffect, useState } from 'react'
import Button from '../../../../components/button/Button'
import { capitalize, fetchPostByTopic, Post } from '../../../../lib/utils'


export default function TopicsPage({ params }: {params: Promise<{topicId: string }> }) {
  const { topicId } = use(params)
  const [topicPosts, setTopicPosts] = useState<Post[]>([])
  useEffect(() => {
    fetchPostByTopic(topicId)
      .then((fetchedPosts) => {
        console.log('RAW RESULT:', fetchedPosts)
        setTopicPosts(fetchedPosts)
      })
      .catch((err) => {
        console.log('FETCH ERROR:', err)
      })
  }, [topicId])
  return (
    <div>
      <h1>{capitalize(topicId)}</h1>
      <ul>
        {topicPosts.map((post) => (
          <li key={post.id}>
            <Button
              href={`/questions/${post.id}`}
              label={post.title}
            ></Button>
          </li>
        ))}
      </ul>
    </div>
  )
}