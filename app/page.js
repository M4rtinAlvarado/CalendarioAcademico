"use client"
import FullCalendar from "@fullcalendar/react"
import Link from 'next/link'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from "@fullcalendar/multimonth"
import dayGridPlugin from '@fullcalendar/daygrid'
import { eventos } from '@/app/api/eventos'
import { allCampus, typevents, events } from './api/eventos'
import { Stack, HStack, VStack } from '@chakra-ui/react'
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



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [eventTitle, setEventTitle,] = useState("")
  const [eventStartDate, setEventStartDate] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventClassName, setEventClassName] = useState("")
  const [eventEndDate, setEventEndDate] = useState("")
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
    else if (campus.length > 0 && type.length === 0) {
      for (let l = 0; l < campus.length; l++) {
        for (let p = 0; p < events.length; p++) {
          if (events[p].sede.includes(campus[l]) && !(items.includes(events[p]))) {
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




  return (
    <div className="main-home">
      <div className="contenedor-filtros">
        <h1 className="title-filtros">Filtros</h1>
        {typevents.map((category) => (
          <Button margin={4} onClick={() => handleFilterButtonClick(category)} className={category}>
            {category}
          </Button>
        ))}
        {allCampus.map((category) => (
          <Button margin={3} onClick={() => handleFilterButtonClick(category)}>
            {category}
          </Button>
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
            </div>
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