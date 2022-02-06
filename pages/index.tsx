import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senior Software Engineer</title>
        <meta name="google-site-verification" content="I73zKMn10P7oQhnOm5oqUqsGVgDU9yyhxEFe4XIsF34" />
        <meta name="description" content="Hey! I'm Hrayr Petrosyan. I'm a Senior Software Engineer (JS/TS/React/Node). I am here to enjoy my time by helping you and your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/images/coding.jpg" alt="Coding" height={512} width={512} />
        <h2 className={styles.title}>
          Shhhhh... I&apos;m working on my personal website!
        </h2>

        <h1 className={styles.description}>
          Hey! I&apos;m Hrayr Petrosyan. I&apos;m a Senior Full Stack Software Engineer.
        </h1>
        <p className={styles.description}>
          Contact me: <a href="mailto: hrayr.petrosyan.web@gmail.com">hrayr.petrosyan.web@gmail.com</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="http://www.freepik.com">Designed by catalyststuff / Freepik</a>
      </footer>
    </div>
  )
}

export default Home
