import React from 'react';
import './GameProfile.scss';
import ArrowIcon from "../../assets/keyboard_arrow_right.svg";
import IconFootball from '../../assets/icon-futbol.png';
import IconBasketball from '../../assets/icon-baloncesto.png';
import IconTenis from '../../assets/icon-tenis.png';
import IconBoxeo from '../../assets/icon-boxeo.png';

const icons = [
    { src: IconFootball, alt: 'Football', name: 'Fútbol' },
    { src: IconBasketball, alt: 'Basketball', name: 'Baloncesto' },
    { src: IconTenis, alt: 'Tennis', name: 'Tenis' },
    { src: IconBoxeo, alt: 'Boxing', name: 'Boxeo' },
];

export default function GameProfile({ title, imageUrl, imageAlt, imagePosition, ButtonTitle, isMobile, isLastProfile }) {
    return (
        <div className={`game-profile ${imagePosition === 'right' ? 'image-right' : 'image-left'}`}>
            <div className='image-container'>
                <img src={imageUrl} alt={imageAlt} />
            </div>
            <div className='text-container'>
                <div className='title-container'>
                    {!isMobile && <div className='divider'></div>}
                    <div className='title'>{title}</div>
                    {isMobile && <div className='dots'>......</div>}
                </div>
                {!isMobile || !isLastProfile ? (
                    <div className='description'>
                        ¡Bienvenido a la mejor casa de apuestas en línea de Argentina! Hace tiempo venimos disfrutando juntos de un mundo de entretenimientos y ahora te brindamos la posibilidad de que te diviertas de manera online.
                    </div>
                ) : (
                    <div className='icons-container'>
                        {icons.map((icon, index) => (
                            <div key={index} className='icon-item'>
                                <img src={icon.src} alt={icon.alt} />
                                <div className='icon-name'>{icon.name}</div>
                            </div>
                        ))}
                    </div>
                )}

                <div className='button'>
                    <div className='button-title'>{ButtonTitle}</div>
                    {!isMobile && <img src={ArrowIcon} alt="arrow" />}
                </div>
            </div>
        </div>
    );
}
