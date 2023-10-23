"use client"
import {  useEffect, useState } from 'react';
import FullCalendar from "@fullcalendar/react"
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import multiMonthPlugin from "@fullcalendar/multimonth";
import { allCampus, typevents, events} from './api/eventos';

/*const filterItems = () => {
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
};*/

/*function eventsAct(selectedFilters,events ) {
  for (i=0;i<events.length ; i++){
    if (!selectedFilters.includes(evenst[i].type)){
      events[i].display = "none";
    }else{
      events[i].display = "auto";
    }
  }
  return ; }*/

/*function selectButton(selectedFilters, selectedCategory,events){
  if (selectedFilters.includes(selectedCategory)){
    arreglo.splice(arreglo.indexOf(selectedCategory), 1);  
  }else{
    arreglo.push(selectedCategory);
  }
  EventsAct(selectedFilters,events)
  return ;
}*/

/*function eventsAct(selectedFilters,events ) {
  for (i=0;i<events.length ; i++){
    if (!selectedFilters.includes(evenst[i].type)){
      events[i].display = "none";
    }else{
      events[i].display = "auto";
    }
  }
  return ; }*/
  
  /*const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((a) => a !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };*/


export default function Home() {

	const [selectedFilters, setSelectedFilters] = useState([]);
	const [eventos,setEventos] = useState(events);


  const selectButton = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)){
      selectedFilters.splice(selectedFilters.indexOf(selectedCategory), 1);  
    }else{
      selectedFilters.push(selectedCategory);
    }
    console.log(eventos);
    setSelectedFilters(selectedFilters)
    console.log(selectedFilters);
    console.log(events)
    eventsAct();
  };
  
  
  useEffect(() => {
    eventsAct();
  }, [selectedFilters]);
  
  
  const eventsAct = () => {
    for (let i=0;i<eventos.length ; i++){
      if (selectedFilters ==[]){
        eventos[i].display = "auto";
      }else{
        if (!selectedFilters.includes(eventos[i].type)){
          eventos[i].display = "none";
        }else{
          eventos[i].display = "auto";
        }
      }
    }
    setEventos(eventos);
  }; 
  
  return (
    <div className="main">
      <div className="contenedor">
      <Stack spacing={2} align='center'>
        {typevents.map((category) => (
          <Button onClick={() => selectButton(category)}>
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
        height={630}
        navLinks =  "true"
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