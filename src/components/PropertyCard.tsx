
import {Propertieslist} from "./Features"
import Image from "next/image";

type PropertyCard = (typeof Propertieslist)[0] ;


export function PropertyCard({baths,beds,id,image,price,rating}: PropertyCard){
    return(
        
            <div className="border rounded-md overflow-hidden">
                <div>
                    <Image src={image} alt="picture of House" width={400} height={420} className="w-full transition-transform
                    group-hover:scale-105"/>
                </div>
            </div>
        
    )
}