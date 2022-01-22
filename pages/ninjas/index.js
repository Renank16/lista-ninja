import Head from "next/head";
import styles from '../../styles/ninjas.module.css'
import Link from "next/link";
export const getStaticProps = async () =>{
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await res.json();

    return {
        props: {ninjas:data}
    }
}
const Ninjas = ({ ninjas }) => {
    return ( 
        <>
        <Head>
        <title>Lista Ninja | Ninjas</title>
        </Head>
        <div>
            <h1>Todos os Ninjas!</h1>
            {ninjas.map(ninja => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Ninjas;