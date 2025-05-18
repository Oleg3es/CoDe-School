import Container from '../Сontainer';
import classes from './ModalBurgerMenu.module.scss'

interface ModalBurgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalBurgerMenu = ({ isOpen, onClose }: ModalBurgerMenuProps) => {

    const rootClasses = [classes.modalBurgerMenu]
    if (isOpen) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <Container>
                <div className={classes.modalBurgerMenuContainer}>
                    <div className={classes.modalBurgerMenuCloseButton} onClick={() => { onClose() }} />
                    <ul className={classes.modalBurgerMenuList}>
                        <li className={classes.modalBurgerMenuItem}><a href="#">Чему вы научитесь</a></li>
                        <li className={classes.modalBurgerMenuItem}><a href="#">Процесс обучения</a></li>
                        <li className={classes.modalBurgerMenuItem}><a href="#">Стоимость</a></li>
                        <li className={classes.modalBurgerMenuItem}><a href="#">Контакты</a></li>
                        <li className={classes.modalBurgerMenuItem}><a href="#">Регистрация</a></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default ModalBurgerMenu