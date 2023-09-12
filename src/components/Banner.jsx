import BannerImg from '../assets/img/6DIO7QMK3VADFPADKWWOLB3YUM.webp'
import Button from './elements/Button'
const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between">
        <div className="banner-description w-full md:w-1/2 p-3">
            <h2 className="mb-6 text-3xl font-bold">
                Food Ordering Made Easy
            </h2>
            <p className="font-semibold text-lg text-red-500 py-2">
                Get Started Today!
            </p>
            <div className='btn-container pt-4'>
                <Button>Order Now</Button>
                <a href='/menu' className='ml-2'>See Menu</a>
            </div>
        </div>
        <div className="banner-image w-full md:w1/2 p-3">
            <img src={BannerImg} alt='banner'/>
        </div>
    </div>
  )
}

export default Banner