import { useState } from 'react'
import logoImg from '../assets/icons/CoDe.svg'
import ModalBurgerMenu from './modal/ModalBurgerMenu'

const Header = () => {
    const [isModal, setIsModal] = useState<boolean>(false)

    return (
        <header className="header">
            <div className="header__inner">
                <a href='#' className="header__logo">
                    <img
                        src={logoImg}
                        alt="logo"
                        loading='lazy'
                        width={64}
                        height={25} />
                </a>
                <nav className="header__nav hidden-mobile">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Чему вы научитесь</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Процесс обучения</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Стоимость</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__contact">
                    <a href="tel: +7 499 348 93 96" className="header__contact-phone">
                        +7 (499) 348 93 96
                    </a>
                </div>
                <div className="header__burger-menu visible-mobile" onClick={() => setIsModal(true)}>
                    <div/>
                </div>
            </div>
            <ModalBurgerMenu
                isOpen={isModal}
                onClose={() => setIsModal(false)}
            />
        </header>
    )
}

export default Header