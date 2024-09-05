import React from 'react';
import './GamesProfilesList.scss';
import GameProfile from '../GameProfile/GameProfile';
import ImageOne from '../../assets/RiverSponsorshipImage.png';
import ImageTwo from '../../assets/LiveDealerImage.png';
import ImageThree from '../../assets/MultisportImage.png';

export default function GamesProfilesList() {
    const gameProfiles = [
        { title: 'CASA DE APUESTAS OFICIAL', imageUrl: ImageOne, imageAlt: 'River Sponsorship', imagePosition: 'right', ButtonTitle: 'APOSTA EN VIVO' },
        { title: 'CASINO EN VIVO', imageUrl: ImageTwo, imageAlt: 'Live Dealer', imagePosition: 'left', ButtonTitle: 'VER MAS' },
        { title: 'TODOS LOS DEPORTES', imageUrl: ImageThree, imageAlt: 'Multisport', imagePosition: 'right', ButtonTitle: 'VER MAS' },
    ];

    return (
        <div className='games-profiles-list'>
            {gameProfiles.map((profile, index) => (
                <GameProfile
                    key={index}
                    title={profile.title}
                    imageUrl={profile.imageUrl}
                    imageAlt={profile.imageAlt} // Passing the alt text
                    imagePosition={profile.imagePosition}
                    ButtonTitle={profile.ButtonTitle}
                />
            ))}
        </div>
    );
}
