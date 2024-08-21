import { getMeal } from '@/lib/meals'
import classes from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}){
    const meal = getMeal(params.slugp)

    
    if(!meal){
        // close error page
        notFound();
    }
    return {
        title: meal.title,
        description: meal.summary
    }
}

export default function BlogPage({params}){
    const meal = getMeal(params.slugp)



    if(!meal){
        // close error page
        notFound();
    }

    // 줄바꿈 \n -> <br/>
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>');
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                    by <a href={`mail to : ${meal.creator_mail}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}> {meal.summary} </p>
                </div>
                </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}}></p>
            </main>
        </>
    )
}