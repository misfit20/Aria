import Image from "next/image";
import { Button } from "./ui/button";


const OurInfo = ()=> {
    return(
        <div className="container pt-20 pb-36 grid lg:grid-cols-2 gap-10">

            <div>
                <div className="relative h-fit w-fit  gradient-overlay">
                    <Image src = "/banner.jpg" alt="picture of key"  width={250} height={250} 
                    className="object-cover ml-4 image-with-gradient"/>
                    

                    
                    <Image src = "/image-3.jpg" alt="picture of man standing on a doormat infront of a door"  
                    width={250} height={250} 
                    className="object-cover ml-4 absolute top-1/2 left-1/2 border-4 hidden lg:block"/>
                </div>
            </div>

            <div className="sm:ml-4">
                <Button>Our Story</Button>
                <p className="text-3xl mb-2">Efficient Property Valuation</p>
                <p className="text-muted-foreground mb-4">Aria Land and Property Consultants provides property valuations trough thorough market research and analysis. Aria Land and Property Consultants is founded and managed by Ms. Samantha Ivankin whom is a professional Valuer and real estate professional with over 10 years experience.</p>
                
                <div><Button variant={"secondary"}>You Can Find Us On</Button>
                <div className="flex gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
                </div>
                </div>

            </div>
        </div>
    );
};

export default OurInfo;