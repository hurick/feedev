export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1505720111751217156/bcegFpuj_400x400.jpg',
      name: 'Hurick Krügner',
      occupation: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: "Hello, everyone! 👋" },
      { type: 'paragraph', content: "I just want to tell you guys that I uploaded a new project on my personal portifolio. It's about something I created on NLW Return (which is an Rocketseat event). The project name is DoctorCare 🚀" },
      { type: 'anchor', url: "/", content: "hurick.design/doctorcare", alt: 'My project website' },
      { type: 'anchor', url: "/", content: "#newproject", alt: "New project" }
    ],
    publishedAt: new Date('2022-09-25 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1573152293997920256/-QIPv12E_400x400.jpg',
      name: 'Brenda Krügner',
      occupation: 'Writer'
    },
    content: [
      { type: 'paragraph', content: "Hi!" },
      { type: 'paragraph', content: "My name is Brenda and I just want to say that I am really #grateful for releasing my new book on Amazon!" },
      { type: 'paragraph', content: "If you are interested, don't forget to click on the link and pre-order it right now! Oh, and don't forget about the feedbacks. I really love reading them!" },
      { type: 'anchor', content: "amazon.com/my-new-book/preorder", url: '/', alt: 'Pre order my book now!' },
      { type: 'anchor', content: "#bookrelease", url: '/', alt: "New book release" }
    ],
    publishedAt: new Date('2022-09-27 15:00:00')
  },
]