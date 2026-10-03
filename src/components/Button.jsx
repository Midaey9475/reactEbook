const Button = (props) => {
  return (
    <>
      <button
        className="rounded-2xl bg-blue-500 px-4 py-2 text-white">
        {props.txt}
      </button>
    </>
  )
}

export default Button