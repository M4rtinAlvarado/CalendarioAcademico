"use client"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from "@fullcalendar/multimonth"



export default function Home() {
  return (
    <div className="main">
      <h1>CALENDARIO UACH 2023</h1>
      <div className="contenedor">
      
      <FullCalendar 
        eventBackgroundColor=""
        headerToolbar = "false"
        aspectRatio={1.5}
        height={635}
        multiMonthMinWidth={500}
        plugins={[ multiMonthPlugin ]}
        initialView="multiMonthYear"
        firstDay={1}
        locale = "esLocale"
        multiMonthMaxColumns = "1"
        events = {[
          {title:"a", start: '2023-10-13', className: ["Financiero","Valdivia"]},
          {title:"b", start: '2023-10-15', end: '2023-10-17', backgroundColor: "blue"},
        ]}
      />
      </div>
    </div>
  )
}
