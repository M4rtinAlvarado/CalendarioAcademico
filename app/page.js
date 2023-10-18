"use client"
import { useState } from 'react';
import FullCalendar from "@fullcalendar/react"
import multiMonthPlugin from "@fullcalendar/multimonth";
import eventos, { events } from './api/eventos';




export default function Home() {
  const allCategories = [
		'All',
		...new Set(events.map(evento => evento.type)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(eventos);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}
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
      <div>
        {categories}
      </div>
    </div>
  )
}
