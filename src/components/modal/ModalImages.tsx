import classes from './ModalImage.module.scss'

interface ModalImagesProps {
    image: string;
    isModal: boolean;
    onClose: () => void;
}

const ModalImages = ({ image, isModal, onClose }: ModalImagesProps) => {

    const rootClasses = [classes.modalImage]
    if (isModal) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => onClose()}>
            <div className={classes.modalImageContainer} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <img src={image} alt="img" loading='lazy'/>
            </div>
        </div>
    )
}

export default ModalImages