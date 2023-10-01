"use client"
import FullCalendar from "@fullcalendar/react"
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import multiMonthPlugin from "@fullcalendar/multimonth"



export default function Home() {
  return (
    <FullCalendar
      plugins={[ multiMonthPlugin ]}
      initialView="multiMonthYear"
    />
  )
}
