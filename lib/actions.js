'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

// use only server side
export async function shareMeal(formData){

  function isInvalidText(text){
    return !text || text.trim() ===''
  }
    
    const meal = {
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
      creator:formData.get('name'),
      creator_email:formData.get('email'),
    }

    // require fix
    if(
      isInvalidText(meal.title)||
      isInvalidText(meal.summary)||
      isInvalidText(meal.instructions)||
      isInvalidText(meal.creator)||
      isInvalidText(meal.creator_email)||
      !meal.creator_email.includes('@')||
      !meal.image || meal.image.size === 0
  ){  
    throw new Error('invalid Error')
    }

    await saveMeal(meal);
    redirect('/meals');
  }