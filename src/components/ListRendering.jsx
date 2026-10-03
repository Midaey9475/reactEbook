const ListRendering = ({ image, name , category, price }) => {
  return (
    <>
    <div className="border-2 p-4 rounded-lg">
        <img src={image} alt="productImg" className="h-40 w-40" />
        <h2 className="font-black">{name}</h2>
        <p className="italic">{category}</p>
        <strong>#{price}</strong>
    </div>
    </>
  )
}
export default ListRendering