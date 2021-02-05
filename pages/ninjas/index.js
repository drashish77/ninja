import Navbar from '../../comps/Navbar'
import styles from '../../styles/Ninjas.module.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: { ninjas: data }, // will be passed to the page component as props
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninja listing</title>
      </Head>
      <div className='ninjas'>
        <h1>All ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Ninjas
