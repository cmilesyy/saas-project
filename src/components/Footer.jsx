import logoWhite from '../assets/images/logo-white.svg'

function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className='pt-20 px-5 pb-5'>
                <img src={logoWhite} alt="" />
            </div>
            <div className='px-5'>
                <h2 className='font-bold text-lg pt-5 pb-3'>Products</h2>
                <ul className='font-thin'>
                    <li className='pb-2'>What is Launch?</li>
                    <li className='pb-2'>Pricing</li>
                    <li className='pb-2'>FAQ</li>
                    <li className='pb-2'>Contact</li>
                </ul>
            </div>
            <div className='p-5'>
            <h2 className='font-bold text-lg pt-5 pb-3'>Resources</h2>
                <ul className='font-thin'> 
                    <li className='pb-2'>Updates</li>
                    <li className='pb-2'>Community</li>
                    <li className='pb-2'>Terms and Conditions</li>
                    <li className='pb-2'>Privacy Policy</li>
                </ul>
            </div>

            <div className='flex flex-col px-5 '>
                    <label htmlFor="" className='pb-2 text-xl font-semibold'> Subscribe to our newsletter</label>
                    <input type="email" placeholder="Email Address" required className='rounded-md py-3 px-5'/>  {/*required for email validation*/}
                    <button className=' bg-[#6DD1ED] rounded-md mt-4 py-3 px-5'>Send</button>
            </div>

            <div className='py-3 mt-3 px-5'>
                <p className='border-t pt-3 text-sm'>© 2023 Launch</p>
            </div>
        </footer>
    )
}

export default Footer
