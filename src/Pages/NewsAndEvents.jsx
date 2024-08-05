import React, { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Link, Text } from '@chakra-ui/react';
import axios from 'axios';
import NewsSlider from './NewsSlider';
import { useNavigate } from 'react-router-dom';

const news = [
    { name: 'News 1' },
    { name: 'News 2' },
    { name: 'News 3' },
    { name: 'News 4' },
    { name: 'News 5' },
];

const events = [
    { name: 'Event 1' },
    { name: 'Event 2' },
    { name: 'Event 3' },
    { name: 'Event 4' },
    { name: 'Event 5' },
];

const MovingList = ({ items }) => (
    <Box className="moving-list-container">
        <Box as="ul" className="moving-list">
            {items.map((item, index) => (
                <Text as="li" key={index} color={'blue'} _hover={{ color: "#316EC5 " }}>
                    <Link to='/events-galary/66571a4e71dac212a14ad988'>{item?.name || item?.heading}</Link>
                </Text>
            ))}
        </Box>
    </Box>
);

const NewsEvents = () => {
    const [ourEvents, setEvents] = useState([])

    const getData = async () => {
        try {
            const data = await axios('https://backend.uditnarain.com/admin/servicesSubservicesListById/66508dfa8a1070a6c61d1ae6')
            console.log(data.data.data)
            setEvents(data.data.data)
        } catch (error) {

        }
    }

    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            
 
        <Box className="newevents" mt={{ sm: '5px', md: '40px' }} w={'100vw'} m={'0 auto'}>

            <div className='Home_news_event'>
                <div className='news_event_card_homepage'>
                    <div className='d-flex justify-content-between View_all_button'>
                        <h2>
                            News and Events
                        </h2>
                        <button class="animated-button" onClick={()=>navigate(`/news-events/News & Events`, {state:{
                            to: '66508dfa8a1070a6c61d1ae6'
                        }})}>
                       
                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span class="text">View All</span>
                            <span class="circle"></span>
                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </button>
                    </div>


                    <div className='row mx-5 gap-5'>
                    <NewsSlider ourEvents={ourEvents}/>
                     

                    </div>
                </div>
            </div>
        </Box>
        </>
    );
};

export default NewsEvents;
