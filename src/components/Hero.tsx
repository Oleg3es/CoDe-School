import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import PCImg from '../assets/images/Code.png';
import humanImg from '../assets/images/Group 1175.png'
import teamImg from '../assets/images/Group 1231.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

interface HeroProps {
    onOpen: () => void;
}

const Hero = ({ onOpen }: HeroProps) => {
    // const isMobile = useMediaQuery({ maxWidth: 767.98 });

    const isMobile = window.innerWidth < 767.98;

    if (isMobile) {
        return (
            <div className="hero">
                <div className="hero__inner">
                    <div className="hero__slide">
                        <div className="hero__slide-info">
                            <h1 className="hero__slide-info-title">
                                Школа <span className="hero__slide-info-title-programming"><span style={{ color: 'rgba(241, 85, 37, 1)' }}>{'{'}</span>программирования<span style={{ color: 'rgba(241, 85, 37, 1)' }}>{'}'}</span></span> <br className="visible-mobile"/>для тех, кому нужны реальные навыки,<br />
                                а не просто сертификат
                            </h1>
                            <div className="hero__slide-info-line" />
                            <div className="hero__slide-info-call">
                                Закажите звонок, и наш специалист свяжется с вами в ближайшее время
                            </div>
                            <button className="hero__slide-info-call-btn" style={{ marginTop: '16px' }} onClick={() => onOpen()}>
                                Закакзать звонок
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1.00188 13.5151C0.611353 13.9056 0.611353 14.5388 1.00188 14.9293C1.3924 15.3198 2.02557 15.3198 2.41609 14.9293L1.00188 13.5151ZM15.709 1.2222C15.709 0.669913 15.2613 0.222198 14.709 0.222198L5.70898 0.222198C5.1567 0.222198 4.70898 0.669914 4.70898 1.2222C4.70899 1.77448 5.1567 2.2222 5.70898 2.2222L13.709 2.2222L13.709 10.2222C13.709 10.7745 14.1567 11.2222 14.709 11.2222C15.2613 11.2222 15.709 10.7745 15.709 10.2222L15.709 1.2222ZM2.41609 14.9293L15.4161 1.9293L14.0019 0.515091L1.00188 13.5151L2.41609 14.9293Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                        <div className="hero__slide-img img-slide-1">
                            <img src={PCImg} alt="PC" loading="lazy" width={306} height={320} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="hero">
            <div className="hero__inner">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={false}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <div className="hero__slide">
                            <div className="hero__slide-info">
                                <h1 className="hero__slide-info-title">
                                    Школа <span className="hero__slide-info-title-programming"><span style={{ color: 'rgba(241, 85, 37, 1)' }}>{'{'}</span>программирования<span style={{ color: 'rgba(241, 85, 37, 1)' }}>{'}'}</span></span> для тех, кому нужны реальные навыки,<br />
                                    а не просто сертификат
                                </h1>
                                <div className="hero__slide-info-line" />
                                <div className="hero__slide-info-call">
                                    Закажите звонок, и наш специалист свяжется с вами в ближайшее время
                                </div>
                                <button className="hero__slide-info-call-btn" style={{ marginTop: '16px' }} onClick={() => onOpen()}>
                                    Закакзать звонок
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M1.00188 13.5151C0.611353 13.9056 0.611353 14.5388 1.00188 14.9293C1.3924 15.3198 2.02557 15.3198 2.41609 14.9293L1.00188 13.5151ZM15.709 1.2222C15.709 0.669913 15.2613 0.222198 14.709 0.222198L5.70898 0.222198C5.1567 0.222198 4.70898 0.669914 4.70898 1.2222C4.70899 1.77448 5.1567 2.2222 5.70898 2.2222L13.709 2.2222L13.709 10.2222C13.709 10.7745 14.1567 11.2222 14.709 11.2222C15.2613 11.2222 15.709 10.7745 15.709 10.2222L15.709 1.2222ZM2.41609 14.9293L15.4161 1.9293L14.0019 0.515091L1.00188 13.5151L2.41609 14.9293Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hero__slide-img img-slide-1">
                                <img src={PCImg} alt="PC" loading="lazy" width={306} height={320} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__slide">
                            <div className="hero__slide-info" style={{ paddingTop: '60px' }}>
                                <h1 className="hero__slide-info-title" style={{ width: '400px' }}>
                                    Обучение
                                    через практику
                                </h1>
                                <div className="hero__slide-info-line" />
                                <div className="hero__slide-info-call">
                                    Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.
                                </div>
                                <button className="hero__slide-info-call-btn" style={{ marginTop: '36px' }} onClick={() => onOpen()}>
                                    Закакзать звонок
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M1.00188 13.5151C0.611353 13.9056 0.611353 14.5388 1.00188 14.9293C1.3924 15.3198 2.02557 15.3198 2.41609 14.9293L1.00188 13.5151ZM15.709 1.2222C15.709 0.669913 15.2613 0.222198 14.709 0.222198L5.70898 0.222198C5.1567 0.222198 4.70898 0.669914 4.70898 1.2222C4.70899 1.77448 5.1567 2.2222 5.70898 2.2222L13.709 2.2222L13.709 10.2222C13.709 10.7745 14.1567 11.2222 14.709 11.2222C15.2613 11.2222 15.709 10.7745 15.709 10.2222L15.709 1.2222ZM2.41609 14.9293L15.4161 1.9293L14.0019 0.515091L1.00188 13.5151L2.41609 14.9293Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hero__slide-img img-slide-2">
                                <img src={humanImg} alt="programmer" loading="lazy" width={369} height={320} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__slide">
                            <div className="hero__slide-info" style={{ paddingTop: '60px' }}>
                                <h1 className="hero__slide-info-title">
                                    Весь материал разбит на<br /> небольшие уроки
                                </h1>
                                <div className="hero__slide-info-line" />
                                <div className="hero__slide-info-call">
                                    Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.
                                </div>
                                <button className="hero__slide-info-call-btn" style={{ marginTop: '36px' }} onClick={() => onOpen()}>
                                    Закакзать звонок
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M1.00188 13.5151C0.611353 13.9056 0.611353 14.5388 1.00188 14.9293C1.3924 15.3198 2.02557 15.3198 2.41609 14.9293L1.00188 13.5151ZM15.709 1.2222C15.709 0.669913 15.2613 0.222198 14.709 0.222198L5.70898 0.222198C5.1567 0.222198 4.70898 0.669914 4.70898 1.2222C4.70899 1.77448 5.1567 2.2222 5.70898 2.2222L13.709 2.2222L13.709 10.2222C13.709 10.7745 14.1567 11.2222 14.709 11.2222C15.2613 11.2222 15.709 10.7745 15.709 10.2222L15.709 1.2222ZM2.41609 14.9293L15.4161 1.9293L14.0019 0.515091L1.00188 13.5151L2.41609 14.9293Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hero__slide-img img-slide-3">
                                <img src={teamImg} alt="PC" loading="lazy" width={376} height={320} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero