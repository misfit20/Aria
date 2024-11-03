"use client";

import { Button} from "./button";

const Hero = () => {
  return (
    <div className=" w-full h-screen items-center bg-gray-100 dark:bg-gray-900 hero top-3">
      {/* Left Side: Text Content */}
      <div className="py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl xl:text-6xl dark:text-white top-20">
          Know Your Property&apos;s True Worth!
        </h1>
        <p className="py-5 text-2xl leading-relaxed text-gray-500 lg:text-2xl dark:text-gray-300 ">
          Get reliable valuations to make confident real estate decisions with
          Aria Land & Property Consultants Today.
        </p>
        <div className="mt-4">
          {/* Button examples */}
          
          
          <div className=" flex gap-6 py-6 items-center justify-center">
                <Button variant={"secondary"}>Learn More</Button>
                <Button>About Us</Button>
                
            </div>
        </div>
      </div>

      {/* Right Side: Optional Image or Background */}
      <div className="hidden lg:flex w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('/path-to-image.jpg')" }}>
        {/* Optional content here */}
      </div>
    </div>
  );
};

export default Hero;