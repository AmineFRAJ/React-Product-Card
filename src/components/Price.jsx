import React from 'react'
import product from '../product'
const Price = () => {
    console.log(product)
    console.log(product.price)
  return (
    <div>
        {product.price}
    </div>
  )
}

export default Price