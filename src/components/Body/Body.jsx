import './Body.scss';
import BannerOne from '../../assets/main-banner.png';
import BannerTwo from '../../assets/CO-SegmentedInicio-XSELL-Desktop.jpg';
import BannerThree from '../../assets/CO-SegmentedInicio-Casino-Desktop.jpg';
import GameOdds from '../GameOdds/GameOdds.jsx';
import GamesProfilesList from '../GamesProfilesList/GamesProfilesList.jsx';
import Games from '../games/Games.jsx';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

export default function Body() {
  return (
    <div className='body'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3250, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide>
          <img className='football-img' src={BannerOne} alt="football" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='football-img' src={BannerTwo} alt="football" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='football-img' src={BannerThree} alt="casino" />
        </SwiperSlide>
      </Swiper>
      <div className='main-container'>
        <GameOdds />
        <Games />
        <GamesProfilesList />
      </div>
    </div>
  );
}
