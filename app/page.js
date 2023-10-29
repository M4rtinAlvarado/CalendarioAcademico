"use client"
import FullCalendar from "@fullcalendar/react"
import Link from 'next/link'
import multiMonthPlugin from "@fullcalendar/multimonth"
import dayGridPlugin from '@fullcalendar/daygrid'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {eventos} from './api/eventos'
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
    start:'2023-01-01',
    end: '2024-01-01'
  }
}

function miModal(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )


}



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [info2,setInfo2] = useState("")

  useEffect( ()=>{
    console.log(info2)
    {<miModal onOpen>
       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </miModal>}
  
  
  },[info2])
  return (
    
    <div className="main-home">
      <div className="contenedor-calendario">
        <FullCalendar 
          headerToolbar = {buildToolbar()}
          validRange={buildValidRange()}
          aspectRatio={.9}
          
          plugins={[ multiMonthPlugin, dayGridPlugin ]}
          initialView="multiMonthYear"
          firstDay={1}
          handleWindowResize='true'
          locale = "esLocale"

          events = {eventos}

        eventClick={function(info){
          setInfo2(info)
          
          
        }}

        />
      </div>
    </div>
  )
}