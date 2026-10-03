import {} from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ products }) => {

  return (
    <>
        <div className='rounded-[0px_20px] shadow-[0px_0px_8px_#2585d8] flex flex-col justify-between gap-3.5 p-4 bg-white'>
            <img className='rounded-[0px_20px] h-50 w-full object-cover'
            src={products.thumbnail} alt={products.title}
            />
            <strong className='text-lg font-bold text-gray-700'>{products.title}</strong>
            <h2 className='text-2xl font-extrabold'>${products.price}</h2>
            <Link to={`/products/${products.id}`}
            className='bg-[#2585d8] hover:bg-blue-800 duration-500 ease-in text-white text-lg font-bold py-3 w-full rounded-[0px_20px] text-center'>
                Product Details
            </Link>
        </div>
    
    </>
  )
}

export default ProductCard