import React, { useState } from 'react';
import Modal from './Modal';
import './Card.css';

function Card({country, image, accomodations}) {
    
    const [modalOpen, setModalOpen ] = useState(false);

    const onClick = () => {
        setModalOpen((openState)=> !openState);
    }

    const clickOutside = () => {
        setModalOpen((openState)=> !openState);
    }

    return (
        <div className="card">
            <div className="card__container">
                <img src={image} alt="destination"/>
                <div className="card__description">
                    <h1>{country}</h1>
                    <p>{accomodations} accomodations</p>
                    <div className="card__button" onClick={onClick}>
                        <h1> Book now </h1>
                    </div>
                </div>
            </div>
            {modalOpen &&  <Modal clickOutside={clickOutside}/>}
        </div>
        
    )
}

export default Card
