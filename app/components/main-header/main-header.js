
import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import { MainHeaderBackground } from './main-header-background';
import NavLink from './nav-link';



export default function MainHeader() {
    

    return (

    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
    <Link className={classes.logo} href="/">
    <Image src={logoImg} alt='home' priority></Image>
    NextLevel Food
    </Link>

    <nav className={classes.nav}>
        <ul>
            <li>
                {/* <Link href="/meals" className={path.startsWith('./meals') ? classes.active : undefined}>Browse Meals</Link> */}
                <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
                {/* <Link href="/community" className={path === '/community' ? classes.active : undefined}>Community</Link> */}
                <NavLink href={"/community"}>Community</NavLink>
            </li>
        </ul>
    </nav>
</header>
    </>
    )
}