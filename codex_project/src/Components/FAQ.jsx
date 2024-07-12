import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function FAQ() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <div className="FAQ-container bg-gray-800 p-4 rounded-md">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className="text-white hover:text-blue-500">
            What exactly is a Brooklyn Stoop Sale?
          </AccordionHeader>
          <AccordionBody className="text-white">
            A Brooklyn Stoop Sale is like a neighborhood block party meets a flea market, 
            where residents set up shop on their stoops to sell all sorts of treasures, 
            from vintage finds to handmade crafts!
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className="text-white hover:text-blue-500">
            Is there parking available nearby?
          </AccordionHeader>
          <AccordionBody className="text-white">
            Street parking is available in the neighborhood. We encourage visitors to use public 
            transportation or bike/walk if possible to enjoy the event atmosphere.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-white hover:text-blue-500">
            Will there be food and drinks available?
          </AccordionHeader>
          <AccordionBody className="text-white">
            Yes! Local vendors will be selling delicious treats and refreshing beverages throughout 
            the day. Come hungry and ready to discover some tasty delights!
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)} className="text-white hover:text-blue-500">
            Can I bring my furry friend?
          </AccordionHeader>
          <AccordionBody className="text-white">
            Of course! Friendly pets on leashes are welcome to join in the fun. Just be mindful 
            of other attendees and clean up after your pet.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}

export default FAQ;