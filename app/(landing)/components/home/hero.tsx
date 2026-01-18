import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="hero-section" className="container mx-auto h-screen flex pb-20">
            <div className="relative self-center">
                <Image
                src="images/img-basketball.svg"
                width={432}
                height={423}
                alt="image basketball"
                className="absolute grayscale left-0 -top-10"

                />
                <div className="relative ml-40 w-full">
                    <div className="text-primary italic">
                        Friday Sale, 50% Off
                    </div>
                    <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
                        WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
                    </h1>
                    <p className="w-2/5 mt-10 leading-loose">
                        Engineered for endurance and designed for speed.
                        Experience gear that moves as fast as you do. 
                        Premium fabrics. Unmatched comfort. Limitless motion.
                    </p>
                    <div className="flex gap-5 mt-8">
                        <Button> 
                            Explore More <FiFastForward/>
                        </Button>                  
                        <Button variant="ghost"> 
                            Watch Video {""}
                            <Image 
                            src="images/watch-video.svg" 
                            alt="icon playvideo" 
                            width={29} 
                            height={29}
                            />
                        </Button>                  
                    </div>
                </div>

                <Image 
                src="/images/img-badminton.svg" 
                width={700} 
                height={950} 
                alt="image badminton hero"
                className="absolute -right-22 top-1/2 -translate-y-1/2"
                />
            </div>
            <Image 
                src="/images/img-ornament.svg"
                width={420}
                height={420}
                alt="image sporton"
                className="absolute -right-[250px] top-1/2 -translate-y-1/2"
                />
        </section>
    );
};

export default HeroSection;