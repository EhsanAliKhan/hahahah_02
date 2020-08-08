import React from 'react';
import './hello.css';

function Mediacard({title, paragraph,image}){
    return(
        <div div className="App">
            <div>The title of the component is {title}.</div>
            <br></br>
            <div> {paragraph}.</div>
            <br></br>
            <div>The url of the image is <img src={image}/>.</div>
            <br></br>
        </div>
    );
}

export default Mediacard;