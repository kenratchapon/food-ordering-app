
// eslint-disable-next-line react/prop-types
const Button = ({children}) => {
  return (
    <btn className="bg-green-600 px-6 py-4 text-white text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50">
        {children}
    </btn>
  )
}

export default Button