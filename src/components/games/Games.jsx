import React from 'react';
import './Games.scss';
import GameOne from '../../assets/PTPharaohsDaughter_Square.jpg';
import GameTwo from '../../assets/PTLiveQuantumRoulette_Square.jpg';
import GameThree from '../../assets/PRPAviator_Square.jpg';
import GameFour from '../../assets/PTPremiumBlackjack_Square.jpg';

export default function Games({ isMobile }) {
    return (
        <div className='games'>
            <div className='games-container-title'>
                {isMobile ? 'TOP RATED GAMES' : 'MEJOR JUEGOS DE CASINO'}
            </div>
            {isMobile && <div className='dots'>......</div>}
            <div className='games-list'>
                <div>
                    <img src={GameOne} alt="Pharaoh's Daughter" className='game-image' />
                </div>
                <div>
                    <img src={GameTwo} alt="Live Quantum Roulette" className='game-image' />
                </div>
                <div>
                    <img src={GameThree} alt="Aviator" className='game-image' />
                </div>
                <div>
                    <img src={GameFour} alt="Premium Blackjack" className='game-image' />
                </div>
            </div>
        </div>
    );
}
