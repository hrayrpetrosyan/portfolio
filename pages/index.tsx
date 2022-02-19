import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hrayr Petrosyan - Senior Software Engineer</title>
        <meta name="google-site-verification" content="I73zKMn10P7oQhnOm5oqUqsGVgDU9yyhxEFe4XIsF34" />
        <meta name="description" content="Hey! I'm Hrayr Petrosyan. I'm a Senior Software Engineer. I am here to enjoy my time by helping you and your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <Image src="/images/coding.jpg" alt="Coding" height={512} width={512} />
          <p className={styles.title}>
            Shhhhh... I&apos;m working on my personal website!
          </p>
        </section>

        <section>
          <h1 className={styles.description}>
            Hey! I&apos;m Hrayr Petrosyan. I&apos;m a Senior Full Stack Software Engineer.
            <br />
            React.js | Node.js
          </h1>
        </section>

        <section>
          <div>
            <a className={styles.link} href="mailto: hrayr@petrosyan.dev">hrayr@petrosyan.dev</a>
          </div>
          <br />
          <div>
            <a className={styles.link} href="https://www.linkedin.com/in/hrayr-petrosyan-dev/">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="http://www.freepik.com">Designed by catalyststuff / Freepik</a>
      </footer>
    </div>
  )
}

export default Home
