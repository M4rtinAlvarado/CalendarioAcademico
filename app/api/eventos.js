import { NextResponse } from "next/server";

export const events = 
    [   {description:"Segundo período de matrícula Proceso de Admisión 2023 (Listas de espera, lista adicional de espera, BEA, PACE e ingresos especiales).", 
         title:"Matricula", type: "Financiero",sem: "Primer periodo",date: "2023-01-21", endDate: "2023-01-27" },
        {description:"Segundo período para que las y los profesores responsables actualicen las características y publiquen el programa de sus asignaturas del primer semestre 2023.",  
         title:"Asignatura", type: "Académico",sem: "Primer periodo",date: "2023-03-02" ,endDate: "2023-03-13"},
        {description:"Bienvenida e Inducción para estudiantes Ingreso 2023 provenientes de Programas PACE, Propedéutico y Ranking 1000.", 
         title:"Bienvenida", type: "Social",campus: ["Valdivia","Puerto Montt"],sem: "Primer periodo",date: "2023-03-03" ,endDate: "2023-03-07"},
        {description:"Talleres de inducción de la Unidad de Apoyo al Aprendizaje (UAAEP) para Ingresos 2023.", 
         title:"Talleres", type: "Otros",sem: "Primer semestre",date: "2023-03-08" ,endDate: "2023-03-30"},
        {description:"Publicación de resultados de asignación de Gratuidad, Becas y Créditospara postulantes FUAS www.becasycreditos.cl",
         title:"FUAS", type: "Financiero",sem: "Primer semestre",date: "2023-03-09" },
        {description:"Ceremonia de celebración de Aniversario de la Universidad en el Campus Patagonia.",
         title:"Ceremonia", type: "Social",campus: "Patagonia",sem: "Segundo periodo",date: "2023-09-11"},
        {description:"Semana de pausa estudiantil",
         title:"Receso", type: "Otros",sem: "Segundo periodo",date: "2023-09-14" ,endDate: "2023-09-22"},
        {description:"Cuarta publicación de resultados de Asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl",
         title:"Beneficios", type: "Financiero",sem: "Segundo periodo",date: "2023-10-03"}, 
        {description:"Último día para que estudiantes de carreras semestrales presentenlas solicitudes de anulación de semestre, a través de www.uach.cl/alumnos.",
         title:"Anulación", type: "Académico",sem: "Segundo periodo",date: "2023-10-26"},
        {description:"Último día de clases del segundo semestre.",
         title:"Término", type: "Académico",sem: "Segundo periodo",date: "2023-12-01" },
    ]

export async function GET() {
  return new NextResponse.json(events);
}
