import { PencilSimpleLine } from 'phosphor-react'

import { User } from '../User';

import styles from './Sidebar.module.css'

export const Sidebar = () => {
  const {
    sidebar,
    s__cover, s__profile, s__footer,
    sf__edit
  } = styles;

  return (
    <aside className={sidebar}>
      <img
        className={s__cover}
        src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt="User defined cover picture"
      />

      <div className={s__profile}>
        <User
          userImage="https://pbs.twimg.com/profile_images/1573152293997920256/-QIPv12E_400x400.jpg"
          userName="Brenda Krügner"
          userOccupation="Writer"
        />
      </div>

      <footer className={s__footer}>
        <a
          className={sf__edit}
          href="/"
          title='Edit your profile'
          >
            <PencilSimpleLine size={20} weight="bold" />
            Edit your profile
          </a>
      </footer>
    </aside>
  )
}