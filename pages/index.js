import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lover is the seventh studio album by American singer-songwriter Taylor
          Swift, released on August 23, 2019, through Republic Records. It is
          her first album after parting ways with her former label Big Machine
          Records. As the executive producer, Swift enlisted producers Jack
          Antonoff, Louis Bell, Frank Dukes, and Joel Little for the project.
        </p>
        <p className={styles.text}>
          Described by Swift as "a love letter to love itself", Lover also
          incorporates political themes such as feminism, disillusionment and
          LGBT rights, aside guest features from the Dixie Chicks and Panic! at
          the Disco. The album is primarily a retro-styled pop record that
          combines synth-pop, electropop and pop rock with country, punk, funk,
          and folk elements. It was supported by four singles: "Me!", "You Need
          to Calm Down", "Lover", and "The Man", the first three of which
          reached the top 10 on the Billboard Hot 100. All of its 18 tracks
          charted on the Hot 100, breaking the all-time record for the most
          simultaneous entries. Lover topped the charts in Canada, Australia,
          Ireland, New Zealand, Portugal, Spain, the United Kingdom, the United
          States and many others. It was Swift's sixth number-one album on the
          Billboard 200, and was certified double platinum. Selling 3.2 million
          copies in 2019, Lover was the world's best-selling studio album of the
          year.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing!</a>
        </Link>
      </div>
    </>
  )
}
