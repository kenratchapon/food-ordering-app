import aboutImg from '../assets/img/aboutImg.jpg'
const About = () => {
  return (
    <div className="bg-lime-400">
        <div className="p-24 grid grid-cols-2">
            <div className="">
                <h2 className='text-2xl font-medium'>
                    About Us
                </h2>
                <p className='text-lg pt-4'>
                    Our Food Ordering App is a culinary paradise designed to delight your taste buds. We are passionate about connecting food lovers with a diverse range of delectable dining options, all at your fingertips. Whether you crave gourmet cuisine, comforting classics, or exotic flavors, our platform has you covered. We strive to make your dining experience seamless and enjoyable, with user-friendly features and a secure ordering process. Our team is dedicated to supporting local restaurants and ensuring you savor every bite. Join us in exploring a world of flavors, one order at a time, as we redefine convenience in the world of food delivery.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <img src={aboutImg} alt="about img" className='w-[400px] h-[350px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About