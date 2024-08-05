import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Image, Text } from '@chakra-ui/react';
import ImageLoader from '../HOC/ImageShow';

const PlacementEvents = ({ sliderImages }) => {
    const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;
  const groupByTitle = (dataset) => {
    return dataset.reduce((acc, item) => {
      if (!acc[item.title]) {
        acc[item.title] = [];
      }
      acc[item.title].push(item);
      return acc;
    }, {});
  };

  const groupedData = groupByTitle(sliderImages);
  const titles = Object.keys(groupedData);

  return (
    <Accordion >
      {titles.map(title => (
        <AccordionItem key={title}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <h5>{title}</h5>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <div className="row">
              {groupedData[title].map(x => (
                <Box key={x._id} className="col-lg-4" p={4}>
                  <Box borderWidth="1px" borderRadius="lg" overflow="hidden"  className='placementEvent'>
                   <ImageLoader  src={`${homeURL}${x.imageUrl}`}/>
                    {/* <Image  alt={x.title} /> */}
                  
                  </Box>
                </Box>
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PlacementEvents;
