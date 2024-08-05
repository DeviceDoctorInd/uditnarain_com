import React, { useContext, useEffect } from 'react';
// import ourColleges from './ourCollegeData.json';
import { Box, Flex, Heading, List, ListIcon, ListItem, Text, SimpleGrid } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { StoreContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

function OurColleges() {
    //     const navigate = useNavigate()
//     const { setOurServices, ourServices } = useContext(StoreContext)

//     console.log(ourServices);

//     const navtoData = (name) => {
//         const filteredCourse = ourServices.filter((x) => x._id === "66508de48a1070a6c61d1ae0")[0]

//         const filterWithName = (course) => {
//             console.log(filteredCourse);
//             const data = filteredCourse.subservices.filter((x) => x.heading === course)?.[0]
//             console.log(data);
//             const returndata = {
//                 name: data.title,
//                 to: data._id
//             }
//             return returndata;

//         }
//         console.log(name);
//         switch (name) {
//             case "ENGINEERING" || "":
//                 navigate(`/page/${filterWithName("Engineering").name}.`, { state: { to: filterWithName("Engineering").to } })
//                 break;

//             case "DIPLOMA IN ENGINEERING":
//                 navigate(`/page/${filterWithName("Engineering").name}.`, { state: { to: filterWithName("Engineering").to, name: 'DIPLOMA IN ENGINEERING' } })
//                 break;

//             case "PHARMACY":
//                 navigate(`/page/${filterWithName("Pharmacy").name}.`, { state: { to: filterWithName("Pharmacy").to } })
//                 break;

//             case "DIPLOMA IN PHARMACY":
//                 navigate(`/page/${filterWithName("Pharmacy").name}.`, { state: { to: filterWithName("Pharmacy").to, name: 'DIPLOMA IN PHARMACY' } })
//                 // navigate(`/page/${courseName}`,{ state: {to:courseId} })
//                 break;

//             case "MANAGEMENT":
//                 navigate(`/page/${filterWithName("Management").name}.`, { state: { to: filterWithName("Management").to } })

//                 break;
//             case "NURSING":
//                 navigate(`/page/${filterWithName("Nursing").name}.`, { state: { to: filterWithName("Nursing").to } })

//                 break;
//             case "EDUCATION":
//                 navigate(`/page/${filterWithName("Education").name}.`, { state: { to: filterWithName("Education").to } })
//                 break;
//             case "MEDICAL":
//                 navigate(`/page/${filterWithName("Paramedical").name}.`, { state: { to: filterWithName("Paramedical").to } })
//                 break;

//         }

//     }
//     return (
//         <Box className="ourColleges" p={5}>
//             <Heading className="mb-3" textAlign="center" color="#b1040e">OUR INSTITUTIONS</Heading>
//             <Text textAlign={'center'} fontWeight={'semibold'} color={'#b1040e'} mb={5}>
//                 The Institutes running under Naraina Group of Institutions are:
//             </Text>
//             <SimpleGrid class="page-content row gap-5" columns={{ sm: 1, md: 3 }} spacing={8}>
//                 {Object.keys(ourColleges).map((category) => (

//                     <div className="dd_card col-lg-12 mt-2 col-md-4 col-sm-6 col-xs-12">
//                         <div className="card__side card__side--back">
//                             <div className="card__cover">
//                                 <h4 className="card__heading">
//                                     <span className="card__heading-span">{category}</span>
//                                 </h4>
//                             </div>
//                             <div className="card__details">
//                                 {ourColleges[category].map((item, index) => (

//                                     <p className="card__subject">{item.name} {item.Code ? `(${item.Code})` : ""}</p>
//                                 ))}
//                             </div>
//                             <div>
//                                 <button onClick={() => navtoData(category)} className='expolre_me'>
//                                     Click me
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="card__side card__side--front">
//                             <div className="card__theme">
//                                 <div className="card__theme-box">
//                                     <p className="card__subject_2">{category}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     // <Box key={category} p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ boxShadow: "lg" }}>
//                     //     <Heading onClick={() => navtoData(category)} _hover={{ cursor: "pointer", color: " rgb(2, 2, 102)" }} as="h6" size={'sm'} textAlign={'left'} mb={3} color={'#345899'}>
//                     //         {category}
//                     //     </Heading>
//                     //     <List spacing={3} ml={3}>
//                     //         {ourColleges[category].map((item, index) => (
//                     //             <ListItem fontSize={'sm'} key={index} textAlign={'left'}>
//                     //                 <ListIcon as={MdCheckCircle} color='green.500' />
//                     //                 {item.name} {item.Code ? `(${item.Code})` : ""}
//                     //             </ListItem>
//                     //         ))}
//                     //     </List>
//                     // </Box>
//                 ))}
//             </SimpleGrid>


//         </Box>
//     );
// }

}



export default OurColleges;
