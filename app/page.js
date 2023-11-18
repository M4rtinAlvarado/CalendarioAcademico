"use client"
import FullCalendar from "@fullcalendar/react"
import multiMonthPlugin from "@fullcalendar/multimonth"
import dayGridPlugin from '@fullcalendar/daygrid'
import { allCampus, typeEvents, events } from '@/app/api/eventos'
import {useDisclosure} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import Boton from "@/app/components/Boton";
import EventModal from "@/app/components/EventModal";
import SearchBar from "@/app/components/SearchBar";



function buildToolbar() {
  return {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridMonth multiMonthYear'
  }
}

function buildValidRange() {
  return {
    start: '2023-01-01',
    end: '2025-01-01'
  }
}

function buildEstados(typeEvents){
  let estados = [];
  for(let i = 0; i < typeEvents.length; i++){
    estados.push([typeEvents[i], false]);
  }
  return estados;
}

function estadosIndex(category, estados){
  for(let i = 0; i < estados.length; i++){
    if(estados[i][0] === category){
      return i;
    }
  }
}

function changeState(category, estados){
  let aux = estados;
  aux[estadosIndex(category, estados)][1] = !(aux[estadosIndex(category, estados)][1]);
  return aux;
}



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [eventTitle, setEventTitle,] = useState("")
  const [eventStartDate, setEventStartDate] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventClassName, setEventClassName] = useState("")
  const [eventEndDate, setEventEndDate] = useState("")
  const [eventSedes, setEventSedes] = useState([])
  const [selectedFilters, setSelectedFilters] = useState(typeEvents)
  const [estado, setEstado] = useState(buildEstados(typeEvents.concat(allCampus)))
  const [eventsArray, seteventsArray] = useState(events)

  
  const filterClickFunction = (selectedCategory) => {

    if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((a) => a !== selectedCategory)
        setSelectedFilters(filters)
        setEstado(changeState(selectedCategory, estado))
    } 
    else {
        setSelectedFilters([...selectedFilters, selectedCategory])
        setEstado(changeState(selectedCategory, estado))
    }
  };
  
    useEffect(() => {
      filterItems();
    }, [selectedFilters]);
  
    const filterItems = () => {
  
      const campus = []
      const type = []
      const items = []
      for (let i = 0; i < selectedFilters.length; i++) {
        if (allCampus.includes(selectedFilters[i])) {
          campus.push(selectedFilters[i])
        } else {
          type.push(selectedFilters[i])
        }
      }
  
      if (campus.length > 0 && type.length > 0) {
        for (let j = 0; j < events.length; j++) {
          for (let i = 0; i < type.length; i++) {
            if (type[i] === events[j].className) {
              items.push(events[j])
            }
          }
        }
        for (let k = 0; k < items.length; k++) {
          for (let m = 0; m < campus.length; m++) {
            if (items[k].sede.includes(campus[m])) {
            }
            else {
              items.splice(k, 1)
            }
          }
        }
        seteventsArray(items)
  
      } else if (type.length > 0 && campus.length === 0) {
        for (let i = 0; i < type.length; i++) {
          for (let j = 0; j < events.length; j++) {
            if (type[i] === events[j].className) {
              items.push(events[j])
            }
          }
        }
        seteventsArray(items)
      }
      else if (campus.length > 0 && type.length === 0) {
        for (let l = 0; l < campus.length; l++) {
          for (let p = 0; p < events.length; p++) {
            if (events[p].sede.includes(campus[l]) && !(items.includes(events[p]))) {
              items.push(events[p])
            }
          }
        }
        seteventsArray(items)
      }
      else{
        seteventsArray([])
      }
    }

  return (
    <>
    <header>
          <div className="title">
            <a href="" ><h1 >CALENDARIO UACH</h1></a>
          </div>
          
          <SearchBar placeholder={"Buscar"} data = {events}/>
        </header>
    <div className="main-home">
      <div className="contenedor-filtros">
        <h1 className="title-filtros">Filtros</h1>
        {typeEvents.map((category, index) => (
          <Boton clase ={category} state = {estado[estadosIndex(category, estado)][1]} click = {() => filterClickFunction(category)} key = {index} />
          ))}
        {allCampus.map((category, index) => (
          <Boton clase ={category} state = {estado[estadosIndex(category, estado)][1]} click = {() => filterClickFunction(category)} key = {index}/>
          ))}
        
      </div>
      <div className="contenedor-calendario">
      
        <FullCalendar
          selectable={true}
          eventClick={function (info) {
            setEventTitle(info.event.title) 
            setEventStartDate(info.event.start.toLocaleDateString())
            if(info.event.end == null) setEventEndDate(info.event.start.toLocaleDateString())
            else{ 
              setEventEndDate(info.event.end.toLocaleDateString());
            }
            setEventClassName(info.event.classNames[0])
            setEventDescription(info.event.extendedProps.description)
            setEventSedes(info.event.extendedProps.sede)
            onOpen()
          }}
          headerToolbar={buildToolbar()}
          validRange={buildValidRange()}
          aspectRatio={1}
          height={660}
          expandRows={'true'}
          plugins={[multiMonthPlugin, dayGridPlugin]}
          initialView="multiMonthYear"
          firstDay={1}
          handleWindowResize='true'
          locale="esLocale"

          events={eventsArray}
        />
        {
        isOpen ? (
        <EventModal 
          isOpen = {isOpen}
          onClose = {onClose}
          eventTitle = {eventTitle}
          eventStartDate = {eventStartDate}
          eventDescription = {eventDescription}
          eventClassName = {eventClassName}
          eventEndDate = {eventEndDate}
          eventSedes = {eventSedes}
          eventComentarios = {[{usuario: "andres", comentario: "buen evento", enRespuestaA: ""},
                              {usuario: "martin", comentario: "deja de mentir andres", enRespuestaA: "123"},
                              {usuario: "osvaldo", comentario: "muy buen evento", enRespuestaA: ""},
                              {usuario: "isaias", comentario: "mal evento", enRespuestaA: ""},
                              {usuario: "mardones", comentario: "no tan buen evento", enRespuestaA: ""}]}
        />) : null
        }
      </div>

    </div>
    </>
  )
}