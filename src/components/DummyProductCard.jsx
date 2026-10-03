import { } from 'react'

const DummyProductCard = ({ product }) => {
  return (
    <>
        <div className='border-2 p-4 flex flex-col justify-between gap-2 rounded-xl'>
            <img src={product.thumbnail} alt={product.title} className='w-full h-50 object-cover' />
            <strong className='text-lg font-bold'>{product.title}</strong>
            <div className='flex justify-between items-center'>
                <b className='text-xl font-bold text-gray-800'>${product.price}</b>
                <b className='text-gray-500 capitalize'>{product.category}</b>
            </div>
            <button className='bg-blue-600 text-white text-sm font-bold p-2 rounded-lg'>Add to Cart</button>
        </div>
    </>
  )
}

export default DummyProductCard


