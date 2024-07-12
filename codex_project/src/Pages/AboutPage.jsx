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
        <div className = " mt-3 items-center justify-center">
            <div className = "flex flex-col justify-center items-center">
                <Typography
                    variant = "lead"
                >
                    Stoop Sale Sneak Peak!
                </Typography>

                <Typography>
                    Here’s a taste of all the goodies that we will be selling in our up and coming stoop sale!
                </Typography>
            </div>

            <div className = "flex flex-wrap gap-[100px] items-center justify-center mt-5">
                <CardDefault
                    title = "Shoes"
                    image = "https://i.etsystatic.com/15554533/r/il/6804c5/3995406958/il_570xN.3995406958_7m9k.jpg"
                    description={"Perfect for adding flair and comfort to your wardrobe without breaking the bank. Find the perfect pair to step out in style!"}
                />
                <CardDefault
                    title = "Dresses"
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRj2mTcsTner1cj0GjhtNJHy8uzweR89YrFHqRS-UAyVoOOEjK-eWEiW-EuP9eQcmLQMJyqzwdxU-_DmxCEoOHTJK6vYdPewlA1ZzaTK3TRixTfofyrogkvTCF8_hb6hwjFNWrYI84&usqp=CAc"
                    description = {"This dress is a must-have! Whether it's for a special event or just to feel fabulous every day this dress is for you!"}
                />
                <CardDefault
                    title = "Gift Basket"
                    image = "https://m.media-amazon.com/images/I/91b10Q+dEIL._AC_UF894,1000_QL80_.jpg"
                    description = {"This gift basket is brimming with charming little goodies that are perfect for any occasion. Whether you’re looking for a sweet treat for yourself or a thoughtful gift for someone special."}
                />
                <CardDefault
                    title = "Birkenstocks"
                    image = "https://s7d2.scene7.com/is/image/aeo/7413_9360_256_f?$pdp-m-opt$"
                    description = {"Whether you're looking for a special gift or just want to treat yourself, this basket has something for everyone."}
                />
                <CardDefault
                    title = "Lamp"
                    image = "https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg"
                    description = {"Check out this charming lamp at our stoop sale! It adds the perfect touch of warmth and style to any room."}
                />
            </div>
            
        </div>
    )
}   

export default AboutPage