"use client"
import {  useEffect, useState } from 'react';
import FullCalendar from "@fullcalendar/react"
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import multiMonthPlugin from "@fullcalendar/multimonth";
import { allCampus, typevents, events} from './api/eventos';





export default function Home() {

	const [selectedFilters, setSelectedFilters] = useState([]);
	const [eventos, setEvents] = useState(events);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((a) => a !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      for(let i = 0; i<selectedFilters.length; i++ ){
        for(let j = 0; j<eventos.length; j++){
          if(selectedFilters[i] === eventos[j].type){
          ;}
        }
      }
      setEvents(items);
    } else {
      setEvents(events);
    }
    console.log(selectedFilters)
  };
  return (
    <div className="main">
      <h1>CALENDARIO UACH 2023</h1>
      <div className="contenedor">
      <Stack spacing={2} align='center'>
        {typevents.map((category) => (
          <Button onClick={() => handleFilterButtonClick(category)}>
            {category}
          </Button>
        ))}
      </Stack>
      <Stack spacing={2} align='center'>
        {allCampus.map((campus) => (
          <Button>
            {campus}
          </Button>
        ))}
      </Stack>
      <FullCalendar 
        eventBackgroundColor=""
        headerToolbar = "false"
        aspectRatio={1.5}
        height={635}
        multiMonthMinWidth={500}
        plugins={[ multiMonthPlugin ]}
        initialView="multiMonthYear"
        firstDay={1}
        locale = "esLocale"
        multiMonthMaxColumns = "1"
        events = {eventos}
      />
      </div>
      
      </div>
  )
}
