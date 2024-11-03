import { PropertyCard } from "./PropertyCard"

export const Propertieslist = [
    {id:1,
    name: "Drayton Str, Lae City, Morobe Prov, PNG",
    price: "1,500,000.00",
    rating: 4,
    beds:3,
    baths: 1,
    image: "/image-4.jpg",

    },

    {id:2,
        name: "Milford Haven Dr, Lae City, Morobe Prov, PNG",
        price: "1,500,000.00",
        rating: 4,
        beds:3,
        baths: 1,
        image: "/drayton_2.jpg",
    
        },
]


export function Features () {


    return (
        <div className="container pb-20">

            <h3 className="text-4xl text-center mb-2">Featured Properties</h3>
            <p className="text-center text-muted-foreground"> Explore our featured properties.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {Propertieslist.map((property) =>(
            <PropertyCard key={property.id} {...property}/>
            ))}
        </div>
        </div>
    )
}