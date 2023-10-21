"use client"
import FullCalendar from "@fullcalendar/react"
import Link from 'next/link'
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from "@fullcalendar/multimonth"
import dayGridPlugin from '@fullcalendar/daygrid'



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

          events = {[   {description:"Segundo período de matrícula Proceso de Admisión 2023 (Listas de espera, lista adicional de espera, BEA, PACE e ingresos especiales).", 
          title:"Matricula", className: "Financiero",sem: "Primer periodo",start: "2023-01-21", end: "2023-01-27" },
         {description:"Segundo período para que las y los profesores responsables actualicen las características y publiquen el programa de sus asignaturas del primer semestre 2023.",  
          title:"Asignatura", className: "Académico",sem: "Primer periodo",start: "2023-03-02" ,end: "2023-03-13"},
         {description:"Bienvenida e Inducción para estudiantes Ingreso 2023 provenientes de Programas PACE, Propedéutico y Ranking 1000.", 
          title:"Bienvenida", className: "Social",campus: ["Valdivia","Puerto Montt"],sem: "Primer periodo",start: "2023-03-03" ,end: "2023-03-07"},
         {description:"Talleres de inducción de la Unidad de Apoyo al Aprendizaje (UAAEP) para Ingresos 2023.", 
          title:"Talleres", className: "Otros",sem: "Primer semestre",start: "2023-03-08" ,end: "2023-03-30"},
         {description:"Publicación de resultados de asignación de Gratuidad, Becas y Créditospara postulantes FUAS www.becasycreditos.cl",
          title:"FUAS", className: "Financiero",sem: "Primer semestre",start: "2023-03-09" },
         {description:"Ceremonia de celebración de Aniversario de la Universidad en el Campus Patagonia.",
          title:"Ceremonia", className: "Social",campus: "Patagonia",sem: "Segundo periodo",start: "2023-09-11"},
         {description:"Semana de pausa estudiantil",
          title:"Receso", className: "Otros",sem: "Segundo periodo",start: "2023-09-14" ,end: "2023-09-22"},
         {description:"Cuarta publicación de resultados de Asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl",
          title:"Beneficios", className: "Financiero",sem: "Segundo periodo",start: "2023-10-03"}, 
         {description:"Último día para que estudiantes de carreras semestrales presentenlas solicitudes de anulación de semestre, a través de www.uach.cl/alumnos.",
          title:"Anulación", className: "Académico",sem: "Segundo periodo",start: "2023-10-26"},
         {description:"Último día de clases del segundo semestre.",
          title:"Término", className: "Académico",sem: "Segundo periodo",start: "2023-12-01" },
     ]}

        />
      </div>
    </div>
  )
}
