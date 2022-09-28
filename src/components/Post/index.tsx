import { FormEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'

import { User } from '../../components/User'
import { Comment } from '../Comment';

import styles from './Post.module.css'

interface PostProps {
  author: {
    avatarUrl: string
    name: string
    occupation: string
  }
  content: {
    type: string
    content: string
    url?: string
    alt?: string
  }[]
  publishedAt: Date
}

interface Comment {
  id: number
  content: string
  publishedAt: Date
}

export const Post = ({ author, content, publishedAt }: PostProps) => {
  const {
    post, p__header, p__content, p__footer,
    ph__time, pf__form, pf__comments,
    pff__comment, pff__publish
  } = styles;

  const formattedTitleDateTime = format(publishedAt, "MMMM d',' u '@' H'h'mm")
  const formattedPublishedDateToNow = formatDistanceToNow(publishedAt, { addSuffix: true })

  const [comments, setComments] = useState<Comment[]>([])
  const [newCommentText, setNewCommentText] = useState<string>('')

  const handleNewComment = (ev: FormEvent): void => {
    ev.preventDefault();

    setComments([
      { id: comments.length + 1, content: newCommentText, publishedAt: new Date() },
      ...comments
    ])

    setNewCommentText('')
  }

  const deleteComment = (commentId: number): void => {
    setComments(comments.filter(comment => comment.id !== commentId))
  }

  return (
    <article className={post}>
      <header className={p__header}>
        <User
          userImage={author.avatarUrl}
          userName={author.name}
          userOccupation={author.occupation}
          userInfoAxis='horizontal'
        />

        <time
          className={ph__time}
          title={formattedTitleDateTime}
          dateTime={publishedAt.toISOString()}
        >
            { formattedPublishedDateToNow }
          </time>
      </header>

      <section className={p__content}>
        {content.map((line) => {
          if (line.type === 'paragraph')
            return <p key={line.content}>{line.content}</p>

          if (line.type === 'anchor')
            return (
              <p key={line.content}>
                <a href={line.url} title={line.alt || ''}>{line.content}</a>
              </p>
            )
        })}
      </section>
      
      <footer className={p__footer}>
        <strong>Leave your message</strong>

        <form onSubmit={ev => handleNewComment(ev)} className={pf__form}>
          <textarea
            required
            value={newCommentText}
            className={pff__comment}
            placeholder='Write a message...'
            onChange={ev => setNewCommentText(ev.target.value)}
          />

          <button
            type="submit"
            className={pff__publish}
            disabled={newCommentText === ''}
          >
            Publish
          </button>
        </form>

        <section className={pf__comments}>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              commentData={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </section>
      </footer>
    </article>
  )
}