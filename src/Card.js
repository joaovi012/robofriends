import React from 'react';

const Card = () => {
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow'>
            <img alt = 'robot' src = 'https://robohash.org/test?200x200'></img>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@email.com</p>
            </div>
        </div>
    );
}

export default Card;