const ProductCard = ({ image , title , description , price }) => {
  return (
    <>
    <div className="flex flex-col p-4 gap-3 rounded-lg shadow-md w-fit border border-gray-400">
        <img src={image} alt="productImage" className="h-40 w-40" />
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>#{price}</strong>
    </div>
    </>
  )
}
export default ProductCard