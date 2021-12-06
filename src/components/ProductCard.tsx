import React from 'react'

export default function ProductCard({ product }: any) {
  return <div>{product && JSON.stringify(product)}</div>
}
