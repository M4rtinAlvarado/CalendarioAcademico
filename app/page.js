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
  const [eventID, setEventID] = useState()
  const [eventSedes, setEventSedes] = useState([])
  const [selectedFilters, setSelectedFilters] = useState(typeEvents)
  const [estado, setEstado] = useState(buildEstados(typeEvents.concat(allCampus)))
  const [eventsArray, setEventsArray] = useState(events)

  function limpiarTodos(){
    setSelectedFilters([])
    for(let i = 0; i < estado.length; i++){
      estado[i][1] = true
    }
    setEstado(estado)

  }

  function mostrarTodos(){
    setSelectedFilters(typeEvents)
    setEstado(buildEstados(typeEvents.concat(allCampus)))
  }
  
  
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
        setEventsArray(items)
  
      } else if (type.length > 0 && campus.length === 0) {
        for (let i = 0; i < type.length; i++) {
          for (let j = 0; j < events.length; j++) {
            if (type[i] === events[j].className) {
              items.push(events[j])
            }
          }
        }
        setEventsArray(items)
      }

      else{
        setEventsArray([])
      }
    }

  return (
    <div className="main">
    <header>
          <div className="title">
            <a href="">CALENDARIO UACH</a>
          </div>
          
          <SearchBar placeholder={"Buscar"} data = {events}/>
        </header>
    <div className="main-home">
      <div className="contenedor-filtros">
        <div className="div-filtros">
          <h1 className="title-filtros">Filtros</h1>
          <div className="mostrar-button"><u onClick={() => {mostrarTodos()}}>Mostrar Todos</u></div>
        </div>
        {typeEvents.map((category, index) => (
          <Boton clase ={category} state = {estado[estadosIndex(category, estado)][1]} click = {() => filterClickFunction(category)} key = {index}/>
          ))}
        {allCampus.map((category, index) => (
          <Boton clase ={category} state = {estado[estadosIndex(category, estado)][1]} click = {() => filterClickFunction(category)} key = {index}/>
          ))}
        <div className="limpiar-button"><u onClick={() => {limpiarTodos()}}>Limpiar filtros</u></div>
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
            setEventID(info.event.id)
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
          eventComentarios = {[]}
          eventID = {eventID}
        />) : null
        }
      </div>

    </div>
    </div>
  )
}