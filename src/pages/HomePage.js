import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun',
        author: 'Jan kowalski',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam a consequatur perspiciatis ex, voluptates nam error odit consequuntur officiis excepturi dicta enim accusantium. Nemo veniam beatae expedita error facilis dolor!',
    },
    {
        id: 2,
        title: 'Czym jest teoria babci',
        author: 'Jan kolar',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam a consequatur perspiciatis ex, voluptates nam error odit consequuntur officiis excepturi dicta enim accusantium. Nemo veniam beatae expedita error facilis dolor!',
    },
    {
        id: 3,
        title: 'Czym jest teoria dziadka',
        author: 'Jan brze',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam a consequatur perspiciatis ex, voluptates nam error odit consequuntur officiis excepturi dicta enim accusantium. Nemo veniam beatae expedita error facilis dolor!',
    },
]

const HomePage = () => {
const atList = articles.map(article => <Article key={article.id} article={article}/>)

    return ( 
        <div className='home'>
                {atList}
        </div>
     );
}
 
export default HomePage;