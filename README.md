# Feedev

<p align="center">
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-to-do">To-do</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#%EF%B8%8F-techs">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-extras">Extras</a>
</p>

![cover](https://user-images.githubusercontent.com/14249327/192898842-f69ee9a8-81a1-4d6a-8d93-cc1223602388.png)

## 🤔 About

To be really honest, you can call this project an ideia. It's a simple Frontend development of something that could be turned into a real feed, beign it social, news, a journal or anything you would like a timeline style.

You can see more and interact with the project by <a href="https://feedev.vercel.app" title="Access Feedev project website">clicking here</a>.

## ✅ To-do

There are still some things that I should implement as soon as I am avaiable, like:

- [ ] Modal to confirm user comment deletion on any post;
- [ ] Empty states (posts and comments, for example);
- [ ] Proper responsive styles on smaller screens;
- [ ] Dark & Light mode themes switch;

## ⚙️ Techs

- <a target="_blank" href="https://vitejs.dev" title="Vite">Vite</a>
- <a target="_blank" href="https://reactjs.org" title="React">React</a>
- <a target="_blank" href="https://typescriptlang.org" title="TypeScript">TypeScript</a>
- <a target="_blank" href="https://github.com/css-modules/css-modules" title="CSS Modules">CSS Modules</a>

## 🚀 Getting started

Right, umm... so, to get started you probably need to clone the project, right? If you are using SSH, try this command:

```bash
git clone git@github.com:hurick/feedev.git
```

If you are using HTTPS, then try this one. It should work, I think:

```bash
git clone https://github.com/hurick/feedev.git
```

Okay, so, now that you got the project on your machine, go to its root folder and run:

```bash
npm install
```

After the packages were installed, you just need to run:

```bash
npm run dev
```

Now that you have your Vite server up and running, I should add some infos that you might find useful.

### Vite server port

If you need to change the default port where Vite is running its server, open the `vite.config.ts`. Below the `plugins` object key, you should add a new one called `server`, regarding the port you want to run it:

```ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

### Posts

If you want to add new posts (or delete the existing ones), first of all go to `src / mocks / posts.ts`. Since you can already imagine how to delete posts, to add a new one, just follow the scruture below:

```ts
[
  {
    id: 1,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1505720111751217156/bcegFpuj_400x400.jpg',
      name: 'Hurick Krügner',
      occupation: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: "Hello, everyone! 👋" },
      { type: 'anchor', url: "/", content: "hurick.dev/feedev", alt: 'My project website' },
    ],
    publishedAt: new Date('2022-09-25 15:00:00')
  }
]
```

## 📃 License

This project is under MIT license.  
Read more about it <a target="_blank" href="https://github.com/hurick/feedev/blob/main/LICENSE" title="MIT License file">here</a>.

## ✨ Extras

Like most of the things I do in life, I developed this project with ❤️... and some tea, because I can't drink coffee, not gonna lie.

But yeah... thanks for passing by and taking a look on it.  
Hope I could give you at least some ideas.

Hopefully I see you on the next one 👋🏻
