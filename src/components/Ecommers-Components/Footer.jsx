import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="p-4 font-PrincipalFont overflow-hidden" >
            <footer className='flex justify-around w-full h-[250px] ' >

                <div className='w-[25%] p-6 pr-10 flex flex-col justify-between gap-8 '>

                    <h1 className="font-bold text-xl">Acme Inc</h1>
                    <span className="text-[grey]">
                        Acme Inc is a leading e-comerce platform offering a wide range of high-quality products.
                    </span>
                    <figure className='flex gap-4 w-[34px] cursor-pointer'>

                        <img src="/facebook.svg" alt="icon face" />
                        <img src="/twitter.svg" alt="icon twitter" />
                        <img src="/instagram.svg" alt="icon insta" />

                    </figure>

                </div>

                <div className="w-[25%] p-6 flex flex-col justify-around gap-8">
                    <h3 className="font-bold text-xl">Quick Links</h3>
                    <ul className="flex flex-col gap-4 font-medium">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        {/* <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li> */}
                    </ul>
                </div>

                <div className='w-[20%] p-6 flex flex-col justify-around gap-8'>

                    <h3 className="font-bold text-xl">Customer Support</h3>
                    <ul className="flex flex-col gap-4 font-medium">
                        <li>FAQ</li>
                        <li>Shipping & amp;Returns</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>

                </div>

                <div className='w-[25%] p-6 pr-10 flex flex-col justify-around gap-8'>

                    <h3 className="font-bold text-xl">Newsletter</h3>
                    <span className="text-[grey]">
                        Subcribe to our newsletter to stay up-to-date with our latest products and offter
                    </span>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Enter your Email" className="border-[2px] border-black rounded-lg ps-2" />
                        <button className="border-[2px] px-4 py-2 rounded-lg text-white bg-black hover:border-[2px] hover:border-black hover:bg-white hover:text-black">Subscribe</button>
                    </div>
                </div>
            </footer>
            <div className="overflow-hidden p-4">
                <div className="flex justify-between py-4 px-10 font-PrincipalFont ">
                    <h2> © 2024 Acme Inc. All rights reserved.</h2>
                    <h2>Privacy Policy</h2>
                </div>
            </div >
        </div>

    )
}