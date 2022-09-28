import { posts } from './mocks/posts'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post';

import styles from './App.module.css'

export const App = () => {
  const { app } = styles;

  return (
    <>
      <Header />

      <section className={app}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </section>
    </>
  )
}