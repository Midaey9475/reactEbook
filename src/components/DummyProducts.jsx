import { useState , useEffect } from 'react'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import DummyProductCard from './DummyProductCard'

const DummyProducts = () => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('all')
    const [sort, setSort] = useState('default')
    const [loader, setLoader] = useState(true)

    useEffect(() => {
      const fetchProducts = async ()=>{
        try {
            const res = await axios.get('https://dummyjson.com/products')
            setProducts(res.data.products)
        } catch (error) {
            console.log(error)
        } finally{setLoader(false)}
      }
      fetchProducts()
    }, [])

    const filterCategory = (category === 'all') ? products :
    (products.filter((products)=> products.category === category))

    const sortedProducts = [...filterCategory]

    if(sort === 'low'){
        sortedProducts.sort((a,b)=> a.price - b.price)
    }
    if(sort === 'high'){
        sortedProducts.sort((a,b)=> b.price - a.price)
    }

    if(loader){
        return(
            <div className='flex justify-center items-center min-h-screen'>
                <BallTriangle
                height={100}
                width={100}
                color='#4fa94d'
                visible={true}
                />
            </div>
        )
    }

  return (
    <>  
        <header className='h-20 content-center text-center text-2xl font-black shadow-[0px_3px_10px_blue]'>Welcome to Dummy Products</header>
        <main className='p-6 flex flex-col'>
            <div className='flex gap-4 mb-4'>
                <select name="category" className='p-2 border-2 rounded-lg focus:outline-0' 
                onChange={(e)=> setCategory(e.target.value)} value={category}>
                    <option value="all">All Products</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="beauty">Beauty</option>
                    <option value="groceries">Groceries</option>
                    <option value="furniture">Furniture</option>
                </select>
                <select name="sort" className='p-2 border-2 rounded-lg focus:outline-0' 
                onChange={(e)=> setSort(e.target.value)} value={sort}>
                    <option value="default">Sort by Price</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>
            <div className='grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                {
                    sortedProducts.map((product)=>(
                        <DummyProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </main>
    </>
  )
}

export default DummyProducts



