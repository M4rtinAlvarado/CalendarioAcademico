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

    const campus =[]
    const type = []
    const items = []
    for(let i = 0; i < selectedFilters.length; i++){
      if (allCampus.includes(selectedFilters[i])){
        campus.push(selectedFilters[i])
      }else{
        type.push(selectedFilters[i])
      }
    }

    if (campus.length > 0 && type.length > 0) {
        for(let j = 0; j < events.length; j++){
          for(let i = 0; i < type.length; i++){
              if(type[i] === events[j].className){
                items.push(events[j])
              }
          }
        }
        for (let k = 0; k < items.length; k++){
          for (let m = 0; m<campus.length ; m++){
            if (items[k].sede.includes(campus[m])){
            }
            else{
              items.splice(k,1)
            }
          }
        }
    setEventos(items)

} else if (type.length > 0 && campus.length === 0){
  for(let i = 0; i < type.length; i++){
  for(let j = 0; j < events.length; j++){
        if(type[i] === events[j].className){
          items.push(events[j])
        }
    }
  }
  setEventos(items)
}
else if (campus.length > 0 && type.length === 0){
  for(let l = 0; l < campus.length; l++){
    for(let p = 0; p < events.length; p++){
      if(events[p].sede.includes(campus[l]) && !(items.includes(events[p]))){
          items.push(events[p])
        }
    }
  }
  setEventos(items)
}
else {
    setEventos(events)
  }
}
console.log(eventos)
console.log(selectedFilters)
  
  return (
    <div className="main-home">
    <div className="contenedor-filtros">
      <h2 className="title-filtros">Filtros</h2>
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
