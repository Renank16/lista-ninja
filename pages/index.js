import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lista Ninja | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente repellendus rem. Quod quisquam sed accusamus tenetur earum, iste consequuntur.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente repellendus rem. Quod quisquam sed accusamus tenetur earum, iste consequuntur.</p>
        <Link href="/ninjas"><a className={styles.btn}>Ver Listagem de Ninjas</a></Link>
      </div>
    </>
  )
}
 