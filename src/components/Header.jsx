import { Link } from 'react-router-dom'
import flavorIcon from '../assets/icons/flavor-express.png'
import { ShoppingCart } from 'lucide-react'
const Header = () => {
  return (
    <nav id="header" className="bg-red-600 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="logo-wrapper">
                <Link to="/" className='flex items-center'>
                    <img src={flavorIcon} alt="logo" className='w-16 h-16 rounded-full border-white border-4 m-2'/>
                    <p className='text-2xl font-semibold'>Flavor Express</p>
                </Link>

            </div>
            <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                <Link to="/" className='text-xl'>Home</Link>
                <Link to="#about" className='text-xl'>About</Link>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <Link to="/cart">
                    <ShoppingCart/>
                </Link>
                <Link to="/loin">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Header