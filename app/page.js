"use client"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from "@fullcalendar/multimonth"


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
      </div>
  )
}