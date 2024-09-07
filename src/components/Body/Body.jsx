import './Body.scss';
import BannerOneDesktop from '../../assets/main-banner.png';
import BannerTwoDesktop from '../../assets/CO-SegmentedInicio-XSELL-Desktop.jpg';
import BannerThreeDesktop from '../../assets/CO-SegmentedInicio-Casino-Desktop.jpg';
import BannerOneMobile from '../../assets/HappyMondays-Mobile.png';
import BannerTwoMobile from '../../assets/CO-SegmentedInicio-Casino-Mobile.jpg';
import BannerThreeMobile from '../../assets/CO-SegmentedInicio-XSELL-Mobile.jpg';
import GameOdds from '../GameOdds/GameOdds.jsx';
import GamesProfilesList from '../GamesProfilesList/GamesProfilesList.jsx';
import Games from '../games/Games.jsx';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

export default function Body({ isMobile }) {

  const desktopBanners = [
    BannerOneDesktop,
    BannerTwoDesktop,
    BannerThreeDesktop,
  ];

  const mobileBanners = [
    BannerOneMobile,
    BannerTwoMobile,
    BannerThreeMobile,
  ];

  return (
    <div className='body'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3250, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {(isMobile ? mobileBanners : desktopBanners).map((banner, index) => (
          <SwiperSlide key={index}>
            <img className='banner' src={banner} alt={`banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='main-container'>
        <GameOdds isMobile={isMobile} />
        <Games isMobile={isMobile} />
        <GamesProfilesList isMobile={isMobile} />
      </div>
    </div>
  );
}
