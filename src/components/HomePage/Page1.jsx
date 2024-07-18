export const Page1 = () => {
    return (
      <header className="w-full h-[500px] border-[2px] flex">
  
          <div className="w-[50%] h-full border-[2px] flex flex-col justify-center gap-8 p-14">
              <h1 className="font-bold text-5xl">Elevate Your Style with Our Premiun Products</h1>
              <p className="font-medium text-[grey] text-xl">Discover the perfect blend of quality, desing, and innovation in our carefully cuarated collection</p>
  
              <div className="flex gap-1"> 
                  <button className="border-[2px] border-black bg-black text-white font-medium rounded-md px-4 py-2">Show Now</button>
                  <button className="border-[2px] border-black bg-white text-black font-medium rounded-md px-4 py-2"> Learn More</button>
              </div>
          </div>
          <div className="w-[50%] h-full border-[2px]">
              <figure className="h-full w-full">
                  <img src="https://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2018/10/portada-wp-modahombre.jpg" alt="" className="h-full object-cover"/>
              </figure>
          </div>
  
        
      </header>
    )
  }