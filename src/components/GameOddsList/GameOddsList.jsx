import './GameOddsList.scss';
import GameOddsPreview from '../GameOddsPreview/GameOddsPreview.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function GameOddsList({ games }) {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      mousewheel={true}
      freeMode={true}
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{ 769: { slidesPerView: 4 } }}
    >
      {games.map((game, index) => (
        <SwiperSlide key={index}>
          <div className="game-odds-preview-container">
            <GameOddsPreview key={index} game={game} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
