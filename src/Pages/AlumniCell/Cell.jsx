import React, { useEffect, useState } from 'react'
// import './cell.css'

// import testimonialData from './testimonial.json'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import CardData from './CardData'
const Cell = () => {

    const [ourData, setOurData] = useState([])
    const [tabIndex, setTabIndex] = useState(0)
    const [yearIndex, setYearIndex] = useState(0)
    const [alluniqueyear, setAllUniqueYear] = useState([])
    const [OriginalData, setOriginalData] = useState([])
    const [tabs, setTabs] = useState([])
    useEffect(() => {
        // setOurData(testimonialData)
    }, [])

    // useEffect(() => {
    //     // const allCourses = testimonialData.map((x) => x.departments).filter((year) => year !== null && year !== undefined);
    //     // const allUniqueCourses = [...new Set(allCourses)];
    //     allUniqueCourses.unshift('All')
    //     if (!allUniqueCourses.includes("PHARMACY")) {
    //         allUniqueCourses.push("PHARMACY")
    //     }
    //     setTabs(allUniqueCourses)
    // }
    //     , [])
    // const tabs = [
    //     { course: "ALl", key: "All" },
    //     { course: "B. TECH (MECHANICAL ENGINEERING)", key: "B.TECH(ME)" },
    //     { course: "B. TECH (COMPUTER SCIENCE & ENGINEERING)", key: "B.TECH(CSE)" },
    //     { course: "MCA", key: "MCA" },
    // ]


    const selected = (selected, index) => {
        setTabIndex(index)
        if (index === 0) {
            // const allYears = testimonialData.map((x) => x.Passout).filter((year) => year !== null && year !== undefined);
            // const uniqueYears = [...new Set(allYears)];
            // const result = uniqueYears.length ? uniqueYears : [];
            // if (result.length) result.unshift('All')
            // setOriginalData(testimonialData)
            // setOurData(testimonialData)
            // setAllUniqueYear(result)
            // return
        }


        // const filterData = testimonialData.filter((user) =>
        //     user.departments.trim().toLowerCase() === selected.trim().toLowerCase()
        // );
        // setOriginalData(filterData)
        // const allYears = filterData.map((x) => x.Passout).filter((year) => year !== null && year !== undefined);
        // const uniqueYears = [...new Set(allYears)];
        // const result = uniqueYears.length ? uniqueYears : [];
        // if (result.length) result.unshift('All')
        // setAllUniqueYear(result)



        // setOurData(filterData);


    }

    const filterWithYear = (year, index) => {
        console.log(year);
        setYearIndex(index)
        if (year === "All") {
            setOurData(OriginalData)
            return
        }

        const filteredData = OriginalData.filter((user) =>
            user.Passout === year
        );
        console.log(filteredData);
        setOurData(filteredData)
    }

    return (
        <section className='alumnicell'>
            <section className='mainContent'>
                <div className="contenpart">
                    <h5> Alumni Cell</h5>



                    <p>The Naraina Group of Institutions (NGI) has an active Alumni Cell that fosters lifelong connections with its former students. The cell is dedicated to nurturing the relationships between NGI and its alumni, who are a diverse group of engineers, technologists, scientists, managers, and entrepreneurs. The cell is committed to providing a platform for alumni to interact, share their experiences, and support each other in their professional and personal endeavors.</p>
                    <p>The Alumni Cell at NGI organizes various activities and events to engage with its alumni, including regular interactions, reunions, and podcasts. These interactions provide an opportunity for alumni to share their success stories, offer guidance to current students, and stay updated about the latest developments within the institution.</p>
                    <p>The cell also recognizes the significant contributions made by its alumni and acknowledges their achievements. This not only motivates current students but also reinforces the institution's commitment to its alumni community.</p>
                    <p>Overall, the Alumni Cell at Naraina Group of Institutions plays a vital role in fostering a sense of community and shared identity among its alumni, ensuring that the bonds formed during their time at NGI continue to grow and flourish over the years.</p>
                </div>

            </section>


            <h5 className='titletestimonial'>Testimonial</h5>

            <Tabs align='center' index={tabIndex} variant='soft-rounded' colorScheme='green' paddingBottom={'10px'} >
                <TabList>
                    {
                        tabs.map((tab, index) => (
                            <Tab
                                _selected={{ color: 'white', bg: '#b1040e' }}
                                onClick={() => selected(tab, index)} key={tab}>{tab}</Tab>
                        ))
                    }

                </TabList>

            </Tabs>

            <Tabs align='center' index={yearIndex} variant='soft-rounded' colorScheme='green' paddingBottom={'10px'}>
                <TabList

                >

                    {alluniqueyear.length ? alluniqueyear.map((year, index) => <Tab
                        className='yearTab'
                        _selected={{ color: 'white', bg: '#b1040e' }}
                        onClick={() => filterWithYear(year, index)}>{year}</Tab>) : null}

                </TabList>
            </Tabs>
            <CardData ourData={ourData} />

            {/* 
            {
    testimonialData.map((x)=><img src={x.image} alt="data" />)   
} */}


        </section>
    )
}

export default Cell







