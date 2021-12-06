import 'react-image-lightbox/style.css';
import { ImagesInterface } from './types';
interface ImageGalleryPropsInterface {
    images: ImagesInterface[];
}
export default function ImageGallery({ images }: ImageGalleryPropsInterface): JSX.Element;
export {};
