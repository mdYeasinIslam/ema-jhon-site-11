import React from 'react';
import './BannerItem.css'

const BannerItem = ({slider}) => {
    const {image,id,prev,next} = slider
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
        <div className="carousel2">
          <img src={image} alt='' className=" w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-between   transform -translate-y-1/2 left-0 right-0 ,md:left-5 md:right-5 top-[40%] md:top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle btn-sm md:btn-md lg:btn-lg hover:bg-black">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle btn-sm md:btn-md lg:btn-lg hover:bg-black">
            ❯
          </a> 
        </div>
        <div className="absolute  md:w-3/4 left-7 right-5 md:left-20 top-1/4  text-white  ">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold md:font-bold  ">
            Affordable <br className='hidden lg:block'/>
            Price For Car <br />
            Servicing
          </h1>
          <p className="relative md:top-6 lg:top-10   md:w-1/2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus error necessitati.......
          </p>
          <div className="  md:top-16 lg:top-24 relative">
            <button className="btn btn-sm md:btn-md btn-success">Success</button>
            <button className="btn btn-sm md:btn-md btn-warning">Warning</button>
          </div>
        </div>
      </div>
    );
};

export default BannerItem;