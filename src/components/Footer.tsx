import logo from '../assets/icons/CoDe.svg'
import instagramm from '../assets/icons/Group.svg'
import VK from '../assets/icons/Vector (1).svg'
import faceBook from '../assets/icons/Vector (2).svg'
import youTube from '../assets/icons/Vector (3).svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__inner">
                <div className="footer__content">
                    <div className="footer__main">
                        <div className="footer__main-logo">
                            <a href="#">
                                <img src={logo} alt="logo" loading='lazy' width={96} height={38} />
                            </a>
                            <div className="footer__main-logo-description">
                                Школа<br /> программирования
                            </div>
                        </div>
                        <ul className="footer__main-social-media">
                            <li className="footer__main-social-media-icon">
                                <a href="#">
                                    <img src={instagramm} alt="intagramm" loading="lazy" />
                                </a>
                            </li>
                            <li className="footer__main-social-media-icon">
                                <a href="#">
                                    <img src={VK} alt="intagramm" loading="lazy" />
                                </a>
                            </li>
                            <li className="footer__main-social-media-icon">
                                <a href="#">
                                    <img src={faceBook} alt="intagramm" loading="lazy" />
                                </a>
                            </li>
                            <li className="footer__main-social-media-icon">
                                <a href="#">
                                    <img src={youTube} alt="intagramm" loading="lazy" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className="footer__nav">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item"><a href="#">Чему вы научитесь</a></li>
                            <li className="footer__nav-item"><a href="#">Процесс обучения</a></li>
                            <li className="footer__nav-item"><a href="#">Стоимость</a></li>
                            <li className="footer__nav-item"><a href="#">Контакты</a></li>
                            <li className="footer__nav-item"><a href="#">Регистрация</a></li>
                        </ul>
                    </nav>
                    <div className="footer__connection">
                        <a href='tel: +7 999 999 99 99' className="footer__connection-phone">
                            +7 (999) 999 99 99
                        </a>
                        <a href="mailto: info@code.ru" className="footer__connection-email">
                            info@code.ru
                        </a>
                    </div>
                </div>
                <div className="footer__copywriter">
                    <div className="footer__copywriter-reserved">
                        © 2023 — Все права защищены
                    </div>
                    <div className="footer__copywriter-policy">
                        <div className="footer__copywriter-policy-agreement">
                            <a href="">Пользовательское соглашение</a>
                        </div>
                        <div className="footer__copywriter-policy-privacy">
                            <a href="">Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer