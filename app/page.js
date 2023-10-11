"use client"
import FullCalendar from "@fullcalendar/react"
import multiMonthPlugin from "@fullcalendar/multimonth"



export default function Home() {
  return (
    <FullCalendar
      plugins={[ multiMonthPlugin ]}
      initialView="multiMonthYear"
      firstDay={1}
      events = {[
        {title:"a", start: '2023-10-13', end: '2023-10-16'},
        {title:"b", start: '2023-10-13', end: '2023-10-17'},
      ]}
    />
  )
}
