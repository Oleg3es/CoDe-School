import InputForm from '../UI/InputForm';
import classes from './ModalForm.module.scss'

interface ModalFormProps {
    isForm: boolean;
    onClose: () => void;
}

const ModalForm = ({ isForm, onClose }: ModalFormProps) => {
    const rootClasses = [classes.modalForm]
    if (isForm) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => onClose()}>
            <div className={classes.modalFormContent} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <div className={classes.modalFormContainer}>
                    <h2 className={classes.modalFormTitle}>
                        Заказать звонок
                    </h2>
                    <form action="POST" className={classes.modalFormInputs}>
                        <InputForm label={'Имя'} type="text" id="name" name="name" placeholder='ваше имя' />
                        <InputForm label={'Телефон'} type="text" id="phone" name="phone" placeholder='+7 ХХХ - ХХХ - ХХ -ХХ' />
                        <InputForm label={'Имя'} type="email" id="email" name="email" placeholder='mail@site.com' />
                        <div className={classes.modalFormInputsMessage}>
                            <label>Сообщение</label>
                            <textarea name="message" id="message" placeholder='Ваше сообщение ...'></textarea>
                        </div>
                        <div className={classes.modalFormInputsPolicy}>
                            Нажимая кнопку “Отправить”,  соглашаюсь с<br/>
                            <a href="#">политикой конфидениальности</a>
                        </div>
                        <button className={classes.modalFormInputsButton} type='submit' onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}>
                            Отправить
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M1.00188 13.5151C0.611353 13.9056 0.611353 14.5388 1.00188 14.9293C1.3924 15.3198 2.02557 15.3198 2.41609 14.9293L1.00188 13.5151ZM15.709 1.2222C15.709 0.669913 15.2613 0.222198 14.709 0.222198L5.70898 0.222198C5.1567 0.222198 4.70898 0.669914 4.70898 1.2222C4.70899 1.77448 5.1567 2.2222 5.70898 2.2222L13.709 2.2222L13.709 10.2222C13.709 10.7745 14.1567 11.2222 14.709 11.2222C15.2613 11.2222 15.709 10.7745 15.709 10.2222L15.709 1.2222ZM2.41609 14.9293L15.4161 1.9293L14.0019 0.515091L1.00188 13.5151L2.41609 14.9293Z" fill="white" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalForm