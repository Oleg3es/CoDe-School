import Img1 from '../assets/images/Column.png';
import Img2 from '../assets/images/& AspectRatioBlock.png';
import Img3 from '../assets/images/& AspectRatioBlock (1).png';
import Img4 from '../assets/images/& AspectRatioBlock (2).png';
import Img5 from '../assets/images/& AspectRatioBlock (3).png';
import { useState } from 'react';
import ModalImages from './modal/ModalImages';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);

    const images = [
        { src: Img1, width: 571, height: 571 },
        { src: Img2, width: 275, height: 275 },
        { src: Img3, width: 275, height: 275 },
        { src: Img4, width: 275, height: 275 },
        { src: Img5, width: 275, height: 275 },
    ]

    const handleOpenImage = (imgSrc: string) => {
        setSelectedImage(imgSrc);
        setIsModal(true);
    }

    return (
        <>
            <div className="gallery">
                <div className="gallery__inner">
                    <ul className="gallery__list">
                        {images.map((img, index) => (
                            <li
                                key={index}
                                onClick={() => handleOpenImage(img.src)}
                                className="gallery__item"
                                >
                                <img
                                    src={img.src}
                                    alt="img"
                                    loading='lazy'
                                    width={img.width}
                                    height={img.height} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <ModalImages image={selectedImage} isModal={isModal} onClose={() => setIsModal(false)}/>
        </>
    )
}

export default Gallery