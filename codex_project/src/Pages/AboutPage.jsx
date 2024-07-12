import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

import CardDefault from '../Components/ItemCard.jsx'

function AboutPage() {
    return(
        <div className = " border-2 mt-3">
            <Typography
                variant = "lead"
            >
                Stoop Sale Sneak Peak!
            </Typography>

            <Typography>
                Here’s a taste of all the goodies that we will be selling in our up and coming stoop sale!
            </Typography>

            <div className = "flex flex-wrap gap-[100px] items-center justify-center mt-5">
                <CardDefault
                    title = "My Shoes"
                    image = "https://i.etsystatic.com/15554533/r/il/6804c5/3995406958/il_570xN.3995406958_7m9k.jpg"
                    description={"These shoes have been the best shoes ever please buy them, I beg of you I will do anything"}
                />
                <CardDefault
                    title = "My Dress"
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRj2mTcsTner1cj0GjhtNJHy8uzweR89YrFHqRS-UAyVoOOEjK-eWEiW-EuP9eQcmLQMJyqzwdxU-_DmxCEoOHTJK6vYdPewlA1ZzaTK3TRixTfofyrogkvTCF8_hb6hwjFNWrYI84&usqp=CAc"
                    description = {"This dress has bagged me a lot in my life. Definitely worth it. 10/10"}
                />
                <CardDefault
                    title = "Gift Basket"
                    image = "https://m.media-amazon.com/images/I/91b10Q+dEIL._AC_UF894,1000_QL80_.jpg"
                    description = {"Helped me win an argument once, very effective"}
                />
                <CardDefault
                    title = "Birkenstocks"
                    image = "https://s7d2.scene7.com/is/image/aeo/7413_9360_256_f?$pdp-m-opt$"
                    description = {"Most comfortable sandals in my life"}
                />
                <CardDefault
                    title = "Lamp"
                    image = "https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg"
                    description = {"Where else can you find a lamp that looks as good as this"}
                />
            </div>
            
        </div>
    )
}   

export default AboutPage