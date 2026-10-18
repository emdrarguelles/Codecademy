import React from 'react'
import { fetchCommentData } from '../../utils/utils'
import styles from './Comment.module.css'

export type StoredCommentsProps = {
  id: number
}

export default async function  StoredComments ({ id }: StoredCommentsProps) {
  const commentData = await fetchCommentData(id);

  return (
    <div>
      {commentData.map((comment) => (
        <div className={styles.comments} key={comment.id}>
          <p>{comment.body}</p>
          <p className={styles.comments_date}>
            {new Date(comment.timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' })}
          </p>
        </div>
      ))}
    </div>
  );
};







