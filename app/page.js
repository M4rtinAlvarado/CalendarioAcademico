"use client"
import FullCalendar from "@fullcalendar/react"
import multiMonthPlugin from "@fullcalendar/multimonth"
import dayGridPlugin from '@fullcalendar/daygrid'
import { allCampus, typevents, events } from '@/app/api/eventos'
import {
  Input,
  Button,
  ButtonGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import Boton from "@/app/components/Boton";



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
    end: '2024-01-01'
  }
}

function buildEstados(typevents){
  let estados = [];
  for(let i = 0; i < typevents.length; i++){
    estados.push([typevents[i], false]);
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
  const [eventSedes, setEventSedes] = useState([])
  const [eventEndDate, setEventEndDate] = useState("")
  const [selectedFilters, setSelectedFilters] = useState(typevents.concat(allCampus))
  const [eventos, setEventos] = useState(events)
  const [estado, setEstado] = useState(buildEstados(typevents.concat(allCampus)))

  
  const handleFilterButtonClick = (selectedCategory) => {


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
          let aux = false
          for (let m = 0; m < campus.length; m++) {
            if (items[k].sede.includes(campus[m])) { 
              aux = true 
            }
          }
          if(!aux){
            items.splice(k, 1)
          }
        }
        setEventos(items)
  
      } else if (type.length > 0 && campus.length === 0) {
        for (let i = 0; i < type.length; i++) {
          for (let j = 0; j < events.length; j++) {
            if (type[i] === events[j].className) {
              items.push(events[j])
            }
          }
        }
        setEventos(items)
      }

      else{
        setEventos([])
      }


    }





  return (
    <div className="main-home">
      <div className="contenedor-filtros">
        <h1 className="title-filtros">Filtros</h1>
        {typevents.map((category) => (
          <Boton clase ={category} state = {estado[estadosIndex(category, estado)][1]} click = {() => handleFilterButtonClick(category)} />
        ))}
        {allCampus.map((category) => (
          <Boton clase ={category} state = {estado[estadosIndex(category, estado)][1]} click = {() => handleFilterButtonClick(category)} />
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

          events={eventos}
        />
        <>
          <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} motionPreset="scale">
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>{eventTitle}</ModalHeader>
            <ModalCloseButton color={"white"} size={"lg"}/>
            <ModalBody>
            <div className="div-default">
                <div className="fecha">
                    <b><h3>Fecha: {eventStartDate} - {eventEndDate}</h3></b>
                </div>
            </div>
            <b><h3>Categoría:</h3></b>
            <div className="div-default">
            <div className={eventClassName}>{eventClassName}</div>
            {eventSedes.map((category) => (
              <div className={category}>{category}</div>
            ))}
            </div>
            <b><h3>Descripción:</h3></b>
            <div className="div-default">
                <p>{eventDescription}</p>
            </div>
            <b><h3>Comentarios:</h3></b>
            <div className="div-comentarios">
                <div className="comentario">Comentario1</div>
                <div className="form">
                    <Input placeholder='Nuevo Comentario'  width= '90%' borderColor={'black'} marginRight={'2%'} />
                    <Button variant='outline' borderColor={'black'} backgroundColor={'gray.300'}>Enviar</Button>
                </div>
            </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
      </div>

    </div>
  )
}