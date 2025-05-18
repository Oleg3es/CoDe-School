import Img1 from '../assets/images/Group 1186.png';
import Img2 from '../assets/images/Group 1243.png';

const AboutLearning = () => {
  return (
    <div className="about-learning">
      <div className="about-learning__inner">
        <div className="about-learning__help">
          <img src={Img1} alt="img" loading='lazy' width={397} height={313}/>
          <div className="about-learning__help-info">
            <h3 className="about-learning__help-info-title">
              Помощь и поддержка
            </h3>
            <div className="about-learning__help-info-description">
              <p>Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.</p>
              <p>Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. </p>
            </div>
          </div>
        </div>
        <div className="about-learning__method">
          <div className="about-learning__method-info">
            <h3 className="about-learning__method-info-title">
              Методика обучения
            </h3>
            <div className="about-learning__method-info-description">
              Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.
            </div>
          </div>
          <img src={Img2} alt="img" loading='lazy' width={397} height={290}/>
        </div>
      </div>
    </div>
  )
}

export default AboutLearning