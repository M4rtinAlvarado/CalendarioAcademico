"use client"
import FullCalendar from "@fullcalendar/react"
import Link from 'next/link'
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from "@fullcalendar/multimonth"
import dayGridPlugin from '@fullcalendar/daygrid'
import {eventos} from '@/app/api/eventos' 
import { Button, ButtonGroup } from '@chakra-ui/react'



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
  return (
    <div className="main-home">
      <div className="contenedor-filtros">
          <h1 className="title-filtros">Filtros</h1>
          <Button variant="outline" margin={5} backgroundColor={"white"}>Filtro1</Button>
          <Button variant="outline" margin={5} backgroundColor={"white"}>Filtro2</Button>
          <Button variant="outline" margin={5} backgroundColor={"white"}>Filtro3</Button>
          <Button variant="outline" margin={5} backgroundColor={"white"}>Filtro4</Button>
          <Button variant="outline" margin={5} backgroundColor={"white"}>Filtro5</Button>
          <Button variant="outline" margin={5} backgroundColor={"white"}>Filtro6</Button>
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