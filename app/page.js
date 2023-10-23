"use client"
import FullCalendar from "@fullcalendar/react"
import {  useEffect, useState } from 'react';
import multiMonthPlugin from "@fullcalendar/multimonth"
import dayGridPlugin from '@fullcalendar/daygrid'
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { allCampus, typevents, events} from './api/eventos';

function buildToolbar() {
  return {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridMonth multiMonthYear'
  }
}

function buildValidRange() {
  return {
    start:'2023-01-01',
    end: '2024-01-01'
  }
}

export default function Home() {

	const [selectedFilters, setSelectedFilters] = useState([])
	const [eventos, setEventos] = useState(events);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((a) => a !== selectedCategory)
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
        const items = []
        for(let j = 0; j < events.length; j++){
          if(selectedFilters.includes(events[j].className)){
            items.push(events[j])
        }
      
    }
    console.log(selectedFilters)
    console.log(items)
    setEventos(items)
  } else {
      setEventos(events)
    }}
  
  return (
    <div className="main-home">
    <div className="contenedor-filtros">
      <h1 className="title-filtros">Filtros</h1>
      <Stack spacing={2} align='center'>
        {typevents.map((category) => (
          <Button onClick={() => handleFilterButtonClick(category)} className={category}>
            {category}
          </Button>
        ))}
        {allCampus.map((category) => (
          <Button onClick={() => handleFilterButtonClick(category)}>
            {category}
          </Button>
        ))}
      </Stack>
    </div>
    <div className="contenedor-calendario">
      <FullCalendar
        headerToolbar = {buildToolbar()}
        validRange={buildValidRange()}
        aspectRatio={1.3}
        height={660}
        plugins={[ multiMonthPlugin, dayGridPlugin ]}
        initialView="multiMonthYear"
        firstDay={1}
        handleWindowResize='true'
        locale = "esLocale"
        events = {eventos}
      />
    </div>
  </div>
)
}
