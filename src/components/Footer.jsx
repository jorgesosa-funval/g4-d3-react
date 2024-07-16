

export const Footer = () => {
  return (
    <footer className='flex justify-around w-full  p-4 border-[2px] border-black'>

        <div className='w-[25%] p-10 flex flex-col justify-between gap-8'>

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

        <div className='w-[25%] p-10 flex flex-col justify-around gap-8'>

            <h3 className="font-bold text-xl">Quick Links</h3>
            <ul className="flex flex-col gap-4 font-medium">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>


        </div>

        <div className='w-[25%] p-10 flex flex-col justify-around gap-8'>

            <h3 className="font-bold text-xl">Customer Support</h3>
            <ul className="flex flex-col gap-4 font-medium">
                <li>FAQ</li>
                <li>Shipping & amp;Returns</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>

            </ul>
        </div>

        <div className='w-[25%]  p-10 flex flex-col justify-around gap-8'>
            <h3 className="font-bold text-xl">Newsletter</h3>
            <span className="text-[grey]">
                Subcribe to our newsletter to stay up-to-date with our latest products and offter
            </span>
            <div className="flex gap-2">
                <input type="email" placeholder="Enter your Email" className="border-[2px] border-black rounded-lg ps-2"/>
                <button className="border-[2px] px-4 py-2 rounded-lg text-white bg-black hover:border-[2px] hover:border-black hover:bg-white hover:text-black">Subscribe</button>
            </div>
        </div>
      
    </footer>
  )
}


