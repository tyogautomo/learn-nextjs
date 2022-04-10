// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Mouse Jelek',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 2,
      title: 'Monitor Aneh',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 3,
      title: 'Keyboard Keren',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 4,
      title: 'Laptop Jadoel',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 5,
      title: 'PC Mahal',
      photo: './assets/profpic.jpeg',
    },
  ])
}
