const Banner = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center relative pb-28 wrapper px-4">
        <span className="gradient-banner w-[22%] md:w-[30%]"></span>
            <p className="text-sm md:text-2xl text-purpleAsh mt-20">Experience Luxury Redefined</p>
            <h1 className="text-5xl md:text-9xl my-4 dm-font"><span className="font-extrabold text-purpleAsh ">Curated Luxury</span> <span className="text-stroke"> </span> </h1>
            <h1 className="text-5xl md:text-8xl text-stroke dm-font">from the</h1>
            <h1 className="text-5xl md:text-9xl font-extrabold text-purpleAsh my-4 dm-font">World's Best Brands</h1>
            <p className="text-sm md:text-2xl text-purpleAsh">Exclusive access to authenticated luxury goods, fully verified on the blockchain. </p>
        </div>
    );
};

export default Banner;