import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link href='/'>
        <div className='logo'>
          <Image src='/logo.png' width={60} height={60} />
        </div>
      </Link>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  )
}

export default Navbar
