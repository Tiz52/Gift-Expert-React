import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['Dragon Ball']);


    return (
        <>
        <h2>GiftExpertApp</h2>
        
        <AddCategory setCategories={ setCategories } />

        <hr />

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                    key = { category }
                    category ={ category } />)) 
            }
        </ol>

        </>
    )

}

export default GifExpertApp;
