import { useState } from 'react';

import { Trash, Heart } from 'phosphor-react'
import { format, formatDistanceToNow } from 'date-fns';

import { User } from '../User';

import styles from './Comment.module.css'

interface CommentProps {
  onDeleteComment: (id: number) => void
  commentData: {
    id: number
    content: string
    publishedAt: Date
  }
}

export const Comment = ({ commentData, onDeleteComment }: CommentProps) => {
  const {
    comment, c__wrapper,
    cw__content, cw__footer,
    cwc__header, cwc__text, cwf__love,
    cwch__author, cwch__delete, cwfl__detail, cwfl__icon,
    cwcha__name, cwcha__time,
    cwchan__detail
  } = styles;

  const formattedTitleDateTime = format(commentData.publishedAt, "MMMM d',' u '@' H'h'mm")
  const formattedPublishedDateToNow = formatDistanceToNow(commentData.publishedAt, { addSuffix: true })

  const [likeCount, setLikeCount] = useState<number>(0)

  const handleDeleteComment = () => {
    onDeleteComment(commentData.id)
  }

  const handleLikeCounter = () => {
    setLikeCount(prevState => {
      return prevState + 1
    })
  }

  return (
    <section className={comment}>
      <User
        userImage='https://pbs.twimg.com/profile_images/1573152293997920256/-QIPv12E_400x400.jpg'
        imageBorderless
        imageOnly
      />

      <section className={c__wrapper}>
        <div className={cw__content}>
          <header className={cwc__header}>
            <div className={cwch__author}>
              <a
                className={cwcha__name}
                href="/"
                title="Brenda Krügner"
              >
                Brenda Krügner <span className={cwchan__detail}>(You)</span>
              </a>

              <time
                className={cwcha__time}
                title={formattedTitleDateTime}
                dateTime="2022-09-27 08:11"
              >
                {formattedPublishedDateToNow}
              </time>
            </div>

            <button
              className={cwch__delete}
              title="Delete this message"
              type="button"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p className={cwc__text}>
            {commentData.content}
          </p>
        </div>

        <footer className={cw__footer}>
          <button
            type="button"
            className={cwf__love}
            title="Love this message"
            onClick={handleLikeCounter}
          >
            <Heart className={cwfl__icon} size={24} />
            Love
            <span className={cwfl__detail}>{likeCount}</span>
          </button>
        </footer>
      </section>
    </section>
  )
}