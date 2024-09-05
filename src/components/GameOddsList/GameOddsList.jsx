import './GameOddsList.scss';
import GameOddsPreview from '../GameOddsPreview/GameOddsPreview.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import {   Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function GameOddsList({ games }) {
  const itemsPerSlide = 4;

  return (
    <Swiper
    modules={[Autoplay,EffectFade]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3250, disableOnInteraction: false }} 
    effect="fade"
    fadeEffect={{ crossFade: true }}
    >
      {Array.from({ length: Math.ceil(games.length / itemsPerSlide) }).map((_, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="game-odds-preview-container">
            {games.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((game, index) => (
              <GameOddsPreview key={index} game={game} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
