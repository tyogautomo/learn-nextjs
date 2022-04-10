import Head from 'next/head'

import axios from 'axios';
import styles from '../styles/Home.module.css';
import LandingPage from '../components/LandingPage';

export async function getStaticProps() {
  const { data } = await axios.get('http://localhost:3000/api/profile');
  return {
    props: { profile: data },
  }
}

export default function Home({ profile }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEXT JOURNEY</title>
        <meta name="description" content="Testing Next.js first app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LandingPage profile={profile} />
      </div>
    </div>
  )
}
