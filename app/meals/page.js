import Link from 'next/link';
import classes from './page.module.css'
import MealsGrid from '../components/meals/meals-grid';

export default function MealsPage(){
    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created(' ')
                <span className={classes.hightlight}>by you</span>
            </h1>
            <p>Choose  your fabvorite recipe and cook it</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                Share your recipe
                </Link>
                </p>
        </header>
        <main className={classes.main}>
            <MealsGrid meals={[]}/>
        </main>
    </>
}