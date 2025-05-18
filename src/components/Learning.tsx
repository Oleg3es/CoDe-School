import img1 from '../assets/images/Group.png'
import img2 from '../assets/images/svg-gobbler 3.png'
import img3 from '../assets/images/Group 1182.png'
import img4 from '../assets/images/Group 1176.png'
import img5 from '../assets/images/Group 1195.png'
import img6 from '../assets/images/svg-gobbler (5) 1.png'
import img7 from '../assets/images/svg-gobbler (6) 1.png'

const Learning = () => {

    return (
        <div className="learning-container">
            <div className="learning">
                <div className="learning__inner">
                    <h2 className="learning__title">
                        Обучение в CoDe – это<br /> удобно и результативно
                    </h2>
                    <ul className="learning__cards">
                        <li className="learning__card">
                            <img src={img1} alt="card" loading='lazy' width={58} height={58} />
                            <div className="learning__card-title">
                                Огромное количество практики
                            </div>
                            <div className="learning__card-description">
                                Более 500 самостоятельных заданий и 20 полноценных больших проектов
                            </div>
                        </li>
                        <li className="learning__card">
                            <img src={img2} alt="card" loading='lazy' width={59} height={59} />
                            <div className="learning__card-title">
                                Современные методики обучения
                            </div>
                            <div className="learning__card-description">
                                Спиральное обучение:
                                погружаемся в материал постепенно, виток за витком
                            </div>
                        </li>
                        <li className="learning__card">
                            <img src={img3} alt="card" loading='lazy' width={69} height={60} />
                            <div className="learning__card-title">
                                Простое и понятное изложение
                            </div>
                            <div className="learning__card-description">
                                Вместо заумных терминов – примеры из реального мира
                            </div>
                        </li>
                        <li className="learning__card">
                            <img src={img4} alt="card" loading='lazy' width={71} height={71} />
                            <div className="learning__card-title">
                                Гибкий график занятий
                            </div>
                            <div className="learning__card-description">
                                Учитесь в любое время в удобном
                                для вас темпе
                            </div>
                        </li>
                        <li className="learning__card">
                            <img src={img5} alt="card" loading='lazy' width={62} height={57} />
                            <div className="learning__card-title">
                                Прямая связь с опытными программистами
                            </div>
                            <div className="learning__card-description">
                                Задавайте вопросы
                                и отправляйте свой код на проверку
                            </div>
                        </li>
                        <li className="learning__card">
                            <img src={img6} alt="card" loading='lazy' width={59} height={59} />
                            <div className="learning__card-title">
                                Оплата небольшими частями
                            </div>
                            <div className="learning__card-description">
                                Платите только за тот материал, который сейчас изучаете,
                                а не за весь курс сразу
                            </div>
                        </li>
                        <li className="learning__card">
                            <img src={img7} alt="card" loading='lazy' width={60} height={60} />
                            <div className="learning__card-title">
                                Быстрый и легкий возврат
                            </div>
                            <div className="learning__card-description">
                                Если передумаете учиться –
                                вернем деньги за 3 рабочих дня
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Learning