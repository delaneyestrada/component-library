import { Product } from '../types';
interface ProductCardPropsInterface {
    product: Product;
}
export default function ProductCard({ product }: ProductCardPropsInterface): JSX.Element;
export {};
