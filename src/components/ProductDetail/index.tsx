import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoopingCartContext } from '../../context';
import './styles.css';

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, currentProduct } = useContext(ShoopingCartContext);

  return(
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={closeProductDetail}
        />
      </div>
      <figure className='px-6'>
        <img
          className="w-full h-full rounded-l"
          src={currentProduct.image}
          alt={currentProduct.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${currentProduct.price}</span>
        <span className='font-medium text-md mb-1'>{currentProduct.title}</span>
        <span className='font-light text-sm'>{currentProduct.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
