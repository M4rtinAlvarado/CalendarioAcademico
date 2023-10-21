"use client"
import FullCalendar from "@fullcalendar/react"
import Link from 'next/link'
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from "@fullcalendar/multimonth"



export default function Home() {
  return (
    <div className="main-home">
      <h1 className="home-titulo">CALENDARIO UACH 2023</h1>
      
      <div className="contenedor-calendario">
      <FullCalendar 
        eventBackgroundColor=""
        headerToolbar = "false"
        aspectRatio={1.49}
        height={635}
        multiMonthMinWidth={500}
        plugins={[ multiMonthPlugin ]}
        initialView="multiMonthYear"
        firstDay={1}
        locale = "esLocale"
        multiMonthMaxColumns = "1"
        events = {[
          {title:"a", start: '2023-10-13', className: "a"},
          {title:"b", start: '2023-10-15', end: '2023-10-17', backgroundColor: "blue"},
        ]}
      />
      </div>
    </div>
  )
}