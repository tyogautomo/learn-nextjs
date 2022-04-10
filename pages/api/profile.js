// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'Tony Stark',
      job: 'Iron Man',
      greeting: 'Halo bray',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 2,
      name: 'Clark',
      job: 'Superman',
      greeting: 'Halo cuk',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 3,
      name: 'Brandon',
      job: 'Kusir',
      greeting: 'Halo men',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 3,
      name: 'Tommy',
      job: 'Tukang Mabok',
      greeting: 'Halo boy',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 3,
      name: 'Dodol',
      job: 'Pengangguran',
      greeting: 'Halo men',
      photo: './assets/profpic.jpeg',
    },
    {
      id: 3,
      name: 'Garut',
      job: 'Supir Angkot',
      greeting: 'Halo men',
      photo: './assets/profpic.jpeg',
    },
  ])
}
