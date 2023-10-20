"use client"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from "@fullcalendar/multimonth"



export default function Home() {
  return (
    <div className="main">
      <h1>CALENDARIO UACH 2023</h1>
      <FullCalendar 
        eventBackgroundColor=""
        headerToolbar = "false"
        height={650}
        plugins={[ multiMonthPlugin ]}
        initialView="multiMonthYear"
        firstDay={1}
        locale = "esLocale"
        
        events = {[
          {title:"a", start: '2023-10-13', className: ["Valdivia","Financiero"]},
          {title:"b", start: '2023-10-15', end: '2023-10-17', backgroundColor: "blue"},
        ]}
      />
      </div>
  )
}
