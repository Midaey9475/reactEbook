import { useEffect, useState } from 'react'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'

const UseEffectModule = () => {
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
      const fetchPosts = async ()=>{
        try {
            const res = await axios.get('https://dummyjson.com/posts')
            setPosts(res.data.posts)
        } catch (error) {
            console.log(error)
        }
        finally{setLoader(false)}
      }
      fetchPosts()
    }, [])  

  return (
    <>
        {
            (loader) ? (
                <div className='flex justify-center items-center min-h-screen'>
                    <BallTriangle
                    height={100}
                    width={100}
                    color='#4fa94d'
                    visible={true}
                    />
                </div>) : (
                <div className='grid gap-3 grid-cols-3 p-2'>
                    {posts.map((post)=>{
                        return(
                        <div key={post.id} className='flex flex-col gap-2 border p-2'>
                            <h1 className='font-bold'>{post.title}</h1>
                            <p>{post.body}</p>
                            </div>
                            )
                        })
                        }
                </div>)
        }
       
    </>
  );
}
export default UseEffectModule
        