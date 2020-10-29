import React from 'react';

const Article = (props) => {

    const styles = {
        marginTop: '40px',

    }

    return ( 
       <article style={styles}>
         <h3 style={{
             marginBottom: '10px',
             textTransform: 'uppercase',
         }}>{props.article.title}</h3>
        <h5 style={{
            marginBottom: '10px',
        }}>{props.article.author}</h5>
        <p style={{
            fontSize: '15px',
        }}>{props.article.text}</p>  
       </article>
     );
}
 
export default Article;