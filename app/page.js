"use client"
import { useState } from 'react';
import FullCalendar from "@fullcalendar/react"
import multiMonthPlugin from "@fullcalendar/multimonth";
import eventos, { events } from './api/eventos';



function selectButton(selectedFilters, selectedCategory,events){
  if (selectedFilters.includes(selectedCategory)){
    arreglo.splice(arreglo.indexOf(selectedCategory), 1);  
  }else{
    arreglo.push(selectedCategory);
  }
  EventsAct(selectedFilters,events)
  return ;
}

function EventsAct(selectedFilters,events ) {
  for (i=0;i<events.length ; i++){
    if (!selectedFilters.includes(evenst[i].type)){
      events[i].display = "none";
    }else{
      events[i].display = "auto";
    }
  }
  return ; }

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
      <div className="contenedor">
      
      <FullCalendar 
        eventBackgroundColor=""
        headerToolbar = "false"
        height={630}
        navLinks =  "true"
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
      <div>
        {categories}
      </div>
      </div>
  )
}