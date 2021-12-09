import React, { useState } from 'react'
import { Product, Variant } from '../types'

interface ProductCardPropsInterface {
  product: Product
}

export default function ProductCard({ product }: ProductCardPropsInterface) {
  const [itemVariant, setItemVariant] = useState<Variant>()

  return (
    <div className='mr-4 p-4 w-1/4'>
      <div className='flex justify-center'>
        <span className='font-bold text-lg'>{product.title}</span>
      </div>
      {product.images.length > 0 ? (
        <div className='h-48 flex justify-center'>
          <img src={product.images[0].src} alt='' className='object-contain' />
        </div>
      ) : (
        ''
      )}
      <div className='flex flex-col justify-center'>
        <p>{product.description}</p>
        <p>{product.variants[0].price}</p>
        {itemVariant?.sku}
        <select
          onChange={(event) => {
            const prodVariant = product.variants.find(
              (variant) => variant.id === event.target.value
            )
            if (prodVariant) {
              setItemVariant(prodVariant)
            }
          }}
        >
          {product.variants.map((variant) => {
            return (
              <option value={variant.id} key={variant.id}>
                {variant.title}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
