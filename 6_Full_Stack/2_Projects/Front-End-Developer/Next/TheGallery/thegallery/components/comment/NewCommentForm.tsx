'use client'
import styles from './Comment.module.css'

export type NewCommentFormProps = {
  addComment: (body: string) => void
}

export default function NewCommentForm({ addComment }: NewCommentFormProps) {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      body: {
        value: string
      }
    }
    const commentBody = target.body.value.trim();
    if (commentBody) { 
      addComment(commentBody);  
    }  
    target.body.value = '' 
  }

  return (
    <div>
      <form className={styles.comment_form} onSubmit={handleSubmit}>
        <textarea
          className={styles.comment_form_text}
          name="body"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              e.currentTarget.form?.requestSubmit()
            }
          }}
        />
        <button className={styles.post_button} type="submit">Post</button>
      </form>
    </div>
  )
}
