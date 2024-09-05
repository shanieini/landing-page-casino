import React from 'react';
import './GameProfile.scss';
import ArrowIcon from "../../assets/keyboard_arrow_right.svg"

export default function GameProfile({ title, imageUrl, imageAlt, imagePosition, ButtonTitle }) {
    return (
        <div className={`game-profile ${imagePosition === 'right' ? 'image-right' : 'image-left'}`}>
            <div className='image-container'>
                <img src={imageUrl} alt={imageAlt} />
            </div>
            <div className='text-container'>
                <div className='title-container'>
                    <div className='divaider'></div>
                    <div className='title'>{title}</div>
                </div>
                <div className='description'>
                    ¡Bienvenido a la mejor casa de apuestas en línea de Argentina! Hace tiempo venimos disfrutando juntos de un mundo de entretenimientos y ahora te brindamos la posibilidad de que te diviertas de manera online.
                </div>
                <div className='button'>
                    <div className='button-title'>{ButtonTitle}</div>
                    <img src={ArrowIcon} alt="arrow" />
                </div>
            </div>
        </div>
    );
}
