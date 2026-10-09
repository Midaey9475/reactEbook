import { useState , useEffect } from 'react'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'
import ProductCard from './ProductCard'

const Products = () => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('all')
    const [sort, setSort] = useState('default')
    const [loader, setLoader] = useState(true)

    useEffect(() => {
      const getProducts = async ()=>{
        try {
            const res = axios.get('https://dummyjson.com/products')
            setProducts((await res).data.products)
        } catch (error) {
            console.log(error)
        } finally{setLoader(false)}
      }
      getProducts()
    }, [])

    if(loader){ return(
        <div className='h-dvh w-full absolute top-0 left-0 bg-white z-20 border-2 flex items-center justify-center'>
            <Bars color='#2585d8'/>
        </div>)
    }
    const filteredProducts = (category === 'all')? products : (
        products.filter((product)=> product.category === category)
    )
    const sortedProducts = [...filteredProducts]
    if(sort === 'low'){
        sortedProducts.sort((proA,proB)=> proA.price - proB.price)
    }
    if(sort === 'high'){
        sortedProducts.sort((proA,proB)=> proB.price - proA.price)
    }
    
  return (
    <>
    <section
    className='h-fit px-4 py-6 bg-[linear-gradient(45deg,#3992df,#a6a2a2be,#2585d8)] flex flex-col items-center justify-center text-center text-4xl font-black'>
        NOT A PROJECT, BUT A DEMO FOR THE BUILDING WITH REACT eBOOK
        <span className='text-lg font-normal mt-2'><a href="https://github.com/Midaey9475/reactEbook">Visit the GitHub repository to learn more!</a></span>
    </section>

    <div className='flex flex-col gap-3 sm:flex-row m-4 md:mx-8 rounded-xl border-2 px-4 py-8'>
        <select className='w-full p-2 border-3 border-[#3992df] rounded-xl text-lg font-bold focus:outline-0 '
        value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="all">All Products</option>
            <option value="fragrances">Fragrances</option>
            <option value="beauty">Beauty</option>
            <option value="groceries">Groceries</option>
            <option value="furniture">Furniture</option>
        </select>

        <select className='w-full p-2 border-3 border-[#3992df] rounded-xl text-lg font-bold focus:outline-0 '
        value={sort} onChange={(e)=> setSort(e.target.value)}>
            <option value="default">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
        </select>
    </div>

    <main className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 p-4'>
        {
            sortedProducts.map((product)=>(
                <ProductCard products={product} key={product.id}/>
            ))
        }

    </main>
    
    </>
  )
}

export default Products