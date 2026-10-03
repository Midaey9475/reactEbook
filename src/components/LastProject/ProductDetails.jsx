import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'

const ProductDetails = () => {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
      const productDetails = async ()=>{
        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            setProductDetail(res.data)
        } catch (error) {
            console.log(error)   
        }
        finally{setLoader(false)}
      }
      productDetails()
    }, [id])
    if(loader){
        return(
            <div className='h-dvh w-full absolute top-0 left-0 bg-white z-20 border-2 flex items-center justify-center'>
                <Bars color='#2585d8'/>
            </div>
        )
    }

  return (
    <>
        {productDetail && (
            <div className='flex flex-col gap-4 p-4 w-full md:w-1/2 mt-4 rounded-xl shadow-[0px_0px_8px_#2585d8]'>
                <strong className='font-bold text-3xl'>{productDetail.title}</strong>
                <p className='text-lg'>{productDetail.description}</p>
                <img src={productDetail.thumbnail} alt={productDetail.title} className='w-100 h-auto' />
            </div>
        )}
    </>
  )
}
export default ProductDetails