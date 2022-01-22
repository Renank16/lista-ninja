import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src="/logo.png" width={128} height={77}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/sobre"><a>Sobre</a></Link>
            <Link href="/ninjas"><a>Listando Ninjas</a></Link>
        </nav>
     );
}
 
export default Navbar;