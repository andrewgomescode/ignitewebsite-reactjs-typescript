import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andrewgomescode.png',
      name: 'Andrew Gomes',
      role: 'Web Developer',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio.' },
      { type: 'paragraph', content: 'É um projeto que fiz no React (Meu primeiro projeto em React). O nome do projeto é Ignite 🔥' },
      { type: 'paragraph', content: 'Veja mais informações no meu LinkedIn' },
      { type: 'link', content: 'linkedin.com/in/andrewgomess' },
    ],

    publishedAt: new Date('2024-02-05 08:42:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/iSyvz.png',
      name: 'Igor Gondim',
      role: 'Top 1 LeeSin China',
    },

    content: [
      { type: 'paragraph', content: 'Acabei de me autodeclarar o melhor LeeSin do mundo.' },
      {
        type: 'paragraph',
        content: 'Sou Igor Gondim (AKA Syvlum), e após anos de luta consegui finalmente subir do prata jogando de LeeSin.',
      },
      { type: 'paragraph', content: 'Consegui subir com apenas 1433 partidas. Meu novo recorde.' },
      { type: 'link', content: '#AgoraSouGold' },
    ],
    publishedAt: new Date('2024-02-05 08:02:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
