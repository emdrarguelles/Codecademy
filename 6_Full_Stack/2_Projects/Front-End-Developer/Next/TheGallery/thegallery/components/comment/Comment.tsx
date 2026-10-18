'use client'
import React, { useState } from 'react'
import NewCommentForm from './NewCommentForm'
import { Comment } from '../../utils/utils'
import styles from './Comment.module.css'

export type CommentProps = {
  id: number
}

export default function Comment({ id } : CommentProps) {
  const [newComments, setNewComments] = useState<Comment[]>([]);  

  const addComment = (newCommentBody: string) => {
    const newComment: Comment = {
      id: newComments.length + 1,
      body: newCommentBody,
      timestamp: Date.now(),
    };
    setNewComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className={styles.comments_section}>
      <div>
        {newComments.map((comment) => (
          <div className={styles.comments} key={comment.id}>
            <p>{comment.body}</p>
            <p className={styles.comments_date}>
              {new Date(comment.timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' })}
            </p>
          </div>
        ))}
      </div>
      <NewCommentForm addComment={addComment} />
    </div>
  );
}
