import { NextResponse } from "next/server";


//131 eventos en 2023
// Financiero  26
// Academico   68
// Social       5
// Docencia    16
// Admision     7
// Otros        9

//125 Patagonia
//121 Valdivia
//120 PuertoMontt

//67 eventos sin plazo
//64 eventos plazo
export const events = 
    [  //PAG1
      {
        description: "Período de matrícula para estudiantes de cursos superiores a través del portal www.uach.cl/alumnos.",
        title: "Matrícula de Cursos Superiores",
        className: "Admisión",
        sem: "1er Semestre",
        start: "2023-01-04",
        end: "2023-03-12",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"0"

      },
      {
        description: "Primer período para que las y los profesores responsables actualicen las características y publiquen el programa de sus asignaturas del primer semestre 2023, en el Sistema academico.",
        title: "Actualización de Programas academicos",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-01-16",
        end: "2023-01-23",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"1"
      },
      {
        description: "Publicación de resultados de preselección de Gratuidad, Becas y Créditos para postulantes FUAS y potenciales renovantes, a través de www.beneficiosestudiantiles.cl/.",
        title: "Publicación de Resultados FUAS",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-01-16",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"2"
      },
      {
        description: "Segundo período de postulaciones FUAS para beneficios 2023, a través de www.fuas.cl.",
        title: "Postulaciones FUAS",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-01-16",
        end: "2023-03-16",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"3"
      },
      {
        description: "Curso de Formación en Docencia Universitaria para Habilitación Pedagógica, a cargo del Departamento de Aseguramiento de la Calidad e Innovación Curricular (DACIC), disponible para docentes de las Sedes Valdivia, Puerto Montt y Campus Patagonia.",
        title: "Curso de Formación en Docencia Universitaria",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-01-17",
        end: "2023-01-19",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"]
        ,id:"4"
      },
      {
        description: "Último día para que las y los estudiantes ingresen solicitudes de reconsideración, a través de www.uach.cl/alumnos.",
        title: "Solicitudes de Reconsideración",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-01-18",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"5"
      },
      {
        description: "Primer período de matrícula Proceso de Admisión 2023 (Seleccionados, BEA, PACE e ingresos especiales).",
        title: "Matrícula Proceso de Admisión",
        className: "Admisión",
        sem: "1er Semestre",
        start: "2023-01-18",
        end: "2023-01-20",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"6"
      },
      {
        description: "Primer período de Acreditación Socioeconómica para las y los estudiantes informados por el MINEDUC que deban presentar documentos de respaldo del FUAS, en página www.becasycreditos.cl.",
        title: "Acreditación Socioeconómica",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-01-18",
        end: "2023-01-26",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"7"
      },
      {
        description: "Último día para la renovación de las Becas de Mantención JUNAEB (Presidente de la República, Indígena y de Residencia Indígena, Integración Territorial, Patagonia, Aysén) para primer semestre del año 2023 a través de la página portalbecas.junaeb.cl/sinabweb/.",
        title: "Renovación de Becas JUNAEB",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-01-20",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"8"
      },
      {
        description: "Segundo período de matrícula Proceso de Admisión 2023 (Listas de espera, lista adicional de espera, BEA, PACE e ingresos especiales).",
        title: "Matrícula Proceso de Admisión",
        className: "Admisión",
        sem: "1er Semestre",
        start: "2023-01-21",
        end: "2023-01-27",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"9"
      },
      //PAG2
      {
        description: "Último día para que Directores y Directoras de Escuela resuelvan las solicitudes de reconsideración presentadas por los estudiantes.",
        title: "Resolución de Solicitudes de Reconsideración",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-01-23",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"10"
      },
      {
        description: "Último día para que la Dirección de Estudios de Pregrado confirme las solicitudes de reconsideración resueltas por los Directores y Directoras de Escuela, para el período inmediatamente siguiente.",
        title: "Confirmación de Solicitudes de Reconsideración",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-01-26",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"11"
      },
      {
        description: "Periodo de receso del personal de la Universidad.",
        title: "Receso del Personal",
        className: "Otros",
        sem: "1er Semestre",
        start: "2023-01-30",
        end: "2023-02-28",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"12"
      },
      {
        description: "Período de postulación y renovación de la Beca de Alimentación, a través de www.uach.cl/alumnos.",
        title: "Beca de Alimentación",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-01",
        end: "2023-03-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"13"
      },
      {
        description: "Período de postulación a la Beca de Estímulo Universitario (Laborancias) a través de www.uach.cl/alumnos.",
        title: "Beca de Estímulo Universitario",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-01",
        end: "2023-03-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"14"
      },
      {
        description: "Periodo en que las Unidades solicitan estudiantes laborantes al Departamento de Bienestar Estudiantil, a través de www.uach.cl/funcionarios.",
        title: "Solicitud de Estudiantes Laborantes",
        className: "Otros",
        sem: "1er Semestre",
        start: "2023-03-01",
        end: "2023-03-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"15"
      },
      {
        description: "Período de postulación a Beca Hijo de Funcionario en el Departamento de Bienestar de Personal.",
        title: "Beca Hijo de Funcionario",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-01",
        end: "2023-03-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"16"
      },
      {
        description: "Segundo período para que las y los profesores responsables actualicen las características y publiquen el programa de sus asignaturas del primer semestre 2023.",
        title: "Actualización de Programas academicos",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-03-02",
        end: "2023-03-13",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"17"
      },
      {
        description: "Bienvenida e Inducción para estudiantes Ingreso 2023 provenientes de Programas PACE, Propedéutico y Ranking 1000.",
        title: "Bienvenida e Inducción",
        className: "Otros",
        sem: "1er Semestre",
        start: "2023-03-03",
        end: "2023-03-07",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"18"
      },
      {
        description: "Inicio de clases para estudiantes de cursos superiores de la Escuela de Derecho (Valdivia y Puerto Montt).",
        title: "Inicio de Clases",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-06",
        sede: ["Valdivia", "PuertoMontt"]
        ,id:"19"
      },
      {
        description: "Periodo de inducción para estudiantes de intercambio del primer semestre.",
        title: "Inducción para Estudiantes de Intercambio",
        className: "Otros",
        sem: "1er Semestre",
        start: "2023-03-06",
        end: "2023-03-10",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"20"
      },
      {
        description: "Periodo de nivelación académica inicial, estudiantes Ingreso 2023 provenientes de Programas PACE, Propedéutico y Ranking 1000.",
        title: "Nivelación Académica",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-06",
        end: "2023-03-10",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"21"
      },
      {
        description: "Bienvenida Institucional y jornadas de inducción por parte de las Escuelas para estudiantes Ingreso 2023.",
        title: "Bienvenida Institucional",
        className: "Otros",
        sem: "1er Semestre",
        start: "2023-03-08",
        end: "2023-03-10",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"22"
      },
      {
        description: "Período de inscripción, modificación de asignaturas y envío a las Escuelas de solicitudes de inscripción extraordinaria, correspondiente al primer semestre 2023, a través de www.uach.cl/alumnos.",
        title: "Inscripción y Modificación de Asignaturas",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-06",
        end: "2023-03-20",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"23"
      },
      {
        description: "Período de solicitud de arancel ajustado por decil socioeconómico, presentando la cartola del Registro Social de Hogares para estudiante que no cuenten con el beneficio de Gratuidad o Beca Vocación de Profesor.",
        title: "Solicitud de Arancel Ajustado",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-06",
        end: "2023-03-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"24"
      },
      {
        description: "Talleres de inducción de la Unidad de Apoyo al Aprendizaje (UAAEP) para Ingresos 2023.",
        title: "Talleres de Inducción",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-08",
        end: "2023-03-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"25"
      },
      {
        description: "Publicación de resultados de asignación de Gratuidad, Becas y Créditos para postulantes FUAS en www.becasycreditos.cl.",
        title: "Resultados de Beneficios FUAS",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-09",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"]
        ,id:"26"
      },
      {
        description: "Primer Período de apelación para estudiantes que completaron el FUAS en el sitio www.becasycreditos.cl.",
        title: "Período de Apelación FUAS",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-09",
        end: "2023-03-24",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"27"
      },
      {
        description: "Inicio de clases para estudiantes de cursos superiores, excepto Escuela de Derecho (Valdivia y Puerto Montt).",
        title: "Inicio de Clases",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-13",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"28"
      },
      {
        description: "Último día para que las y los estudiantes presenten solicitud de reconocimientos y convalidaciones de asignaturas en sus respectivas Escuelas.",
        title: "Solicitud de Reconocimientos y Convalidaciones",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-20",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"29"
      },
      {
        description: "Adjudicación de Proyectos de Innovación a la Docencia Universitaria Concurso 2023, de la Dirección de Estudios de Pregrado - DACIC.",
        title: "Adjudicación de Proyectos de Innovación",
        className: "Otros",
        sem: "1er Semestre",
        start: "2023-03-20",
        end: "2023-03-24",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"30"
      },
      {
        description: "Período de solicitud de monto crédito con garantía estatal para estudiantes preseleccionados FUAS del periodo de postulación octubre-noviembre de 2022.",
        title: "Solicitud de Crédito con Garantía Estatal",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-20",
        end: "2023-04-09",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"31"
      },
      //PAG3
      {
        description: "Último día para enviar solicitudes de estudiantes ayudantes al Departamento de Registro academico Estudiantil.",
        title: "Solicitudes de Estudiantes Ayudantes",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-23",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"32"
      },
      {
        description: "Último día para que Directores y Directoras de Escuelas resuelvan las peticiones de inscripción de asignaturas, de acuerdo con las solicitudes efectuadas por las y los estudiantes.",
        title: "Resolución de Peticiones de Inscripción",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-03-27",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"33"
      },
      {
        description: "Período para que las Unidades Académicas presenten nuevas asignaturas optativas o actualizaciones de asignaturas para el segundo semestre 2023 a DACIC, incluyendo retroalimentación del equipo microcurricular, para su posterior oficialización ante la Dirección de Estudios de Pregrado y el Departamento de Registro academico Estudiantil.",
        title: "Presentación de Asignaturas Optativas",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-27",
        end: "2023-05-05",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"34"
      },
      {
        description: "Último día para que estudiantes con ingreso 2023 renuncien a la carrera a través de Infoalumnos.",
        title: "Renuncia a la Carrera",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"35"
      },
      {
        description: "Último día para que las y los estudiantes de carreras semestrales y anuales ingresen solicitudes de suspensión de semestres y de año, a través de www.uach.cl/alumnos.",
        title: "Solicitud de Suspensión de Semestres",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"36"
      },
      {
        description: "Período para que las Direcciones de Escuela (sedes Valdivia y PuertoMontt) y Jefaturas de Carrera (Campus Patagonia) presenten al Departamento de Aseguramiento de la Calidad e Innovación Curricular (DACIC) las modificaciones curriculares menores que involucren cambios en el Sistema Curricular, para ser implementados desde el primer semestre 2024.",
        title: "Modificaciones Curriculares",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-27",
        end: "2023-05-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"37"
      },
      {
        description: "Último día para que Directores y Directoras de Escuela envíen los reconocimientos y convalidaciones de asignaturas al Departamento de Registro academico Estudiantil.",
        title: "Envío de Reconocimientos y Convalidaciones",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-03-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"38"
      },
      {
        description: "Último día para que Directores y Directoras de Escuela informen sobre notas de Tesis, Seminarios o Trabajo de Titulación inscritos en el segundo semestre 2022.",
        title: "Informe de Notas de Tesis",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-03-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"39"
      },
      {
        description: "Último día para que las y los estudiantes de carreras semestrales con asignatura terminal inscrita en el segundo semestre 2022, ingresen su solicitud de ampliación de plazo de titulación, RAE 2008, en www.uach.cl/alumnos.",
        title: "Solicitud de Ampliación de Plazo de Titulación",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-03-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"40"
      },
      {
        description: "Publicación de la asignación inicial de las becas internas Beca Rector Eduardo Morales Miranda y Beca Irma Herrera 2023.",
        title: "Asignación Inicial de Becas Internas",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-03-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"41"
      },
      {
        description: "Periodo de Acompañamiento academico y psicoeducativo de la Unidad de Apoyo al Aprendizaje (UAAEP).",
        title: "Acompañamiento academico y Psicoeducativo",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-01",
        end: "2023-12-29",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"42"
      },
      {
        description: "Inauguración del Año academico en Valdivia.",
        title: "Inauguración del Año academico",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-14",
        sede: ["Valdivia"],
        id:"43"
      },
      {
        description: "Publicación de asignación de Becas de Alimentación UACh para el primer semestre 2023.",
        title: "Asignación de Becas de Alimentación",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-04-15",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"44"
      },
      {
        description: "Último día para que las y los estudiantes antiguos postulen a intercambios estudiantiles para el segundo semestre de 2023 a universidades extranjeras y nacionales a través de la Oficina de Movilidad Estudiantil.",
        title: "Postulación a Intercambio Estudiantil (Estudiantes antiguos)",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-15",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"45"
      },
      {
        description: "Último día para que las y los estudiantes extranjeros y nacionales envíen sus postulaciones de intercambio para el segundo semestre de 2023 a la Oficina de Movilidad Estudiantil.",
        title: "Postulación a Intercambio para Estudiantes Extranjeros y Nacionales",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-15",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"46"
      },
      {
        description: "Período para que DACIC efectúe la retroalimentación de las asignaturas optativas recepcionadas, a implementar el segundo semestre 2023, y gestione su codificación con Registro academico Estudiantil y la Dirección de Estudios de Pregrado.",
        title: "Retroalimentación de Asignaturas Optativas",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-15",
        end: "2023-05-15",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"47"
      },
      {
        description: "Inauguración del Año academico en Coyhaique.",
        title: "Inauguración del Año academico",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-17",
        sede: ["Patagonia"],
        id:"48"
      },
      {
        description: "Inauguración del Año academico en Puerto Montt.",
        title: "Inauguración del Año academico",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-18",
        sede: ["PuertoMontt"],
        id:"49"
      },
      {
        description: "Publicación de resultados de cambios de Instituciones de Educación Superior (Becas y Fondo Solidario de Crédito Universitario).",
        title: "Publicación de Resultados de Cambios de Instituciones de Educación Superior",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-21",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"50"
      },
      //PAG4
      {
        description: "Último día de solicitud de monto CAE para estudiantes renovantes de Crédito con Garantía Estatal",
        title: "Solicitud de monto CAE",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-04-26",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"51"
      },
      {
        description: "Solicitud renovación monto CAE a través de la página https://portal.ingresa.cl/como-renovar/requisitos-para-renovar/",
        title: "Solicitud renovación monto CAE",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-04-27",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"52"
      },
      {
        description: "Semana de pausa estudiantil",
        title: "Semana de Pausa Estudiantil",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-04-28",
        end: "2023-05-05",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"53"
      },
      {
        description: "Periodo de firma de pagaré del Fondo Solidario Crédito Universitario (FSCU) para estudiantes a los cuales se aplica el artículo 108 de la Ley 21.091.",
        title: "Firma de Pagaré FSCU",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-04-30",
        end: "2023-05-31",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"54"
      },
      {
        description: "Último día para que estudiantes de carreras semestrales anulen una asignatura o módulo",
        title: "Anulación de Asignaturas o Módulo",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-05-24",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"55"
      },
      {
        description: "Último día para que las y los estudiantes ingresen las solicitudes de anulación de semestre para carreras semestrales",
        title: "Solicitud de Anulación de Semestre",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-05-24",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"56"
      },
      {
        description: "Inauguración de Año Cultural en Valdivia.",
        title: "Inauguración de Año Cultural",
        className: "Social",
        sem: "1er Semestre",
        start: "2023-05-25",
        sede: ["Valdivia"],
        id:"57"
      },
      {
        description: "Segunda publicación de resultados de asignación de Gratuidad, Becas y Créditos para postulantes FUAS",
        title: "Segunda Publicación de Resultados de Asignación",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-05-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"58"
      },
      {
        description: "Último día para que las Macrounidades presenten a la Dirección de Estudios de Pregrado las solicitudes de modificaciones curriculares mayores de carreras de Pregrado, para el análisis de pertinencia curricular, factibilidad administrativa y financiera.",
        title: "Solicitudes de Modificaciones Curriculares Mayores",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-05-30",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"59"
      },
      {
        description: "Segundo período de apelación para estudiantes que completaron el FUAS en sitio www.becasycreditos.cl.",
        title: "Segundo Período de Apelación FUAS",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-05-30",
        end: "2023-06-14",
        sede: ["PuertoMontt", "Valdivia", "Patagonia"],
        id:"60"
      },
      {
        description: "Período para que las Escuelas formulen las solicitudes de asignaturas para el segundo semestre 2023 a las Unidades Académicas.",
        title: "Formulación de Solicitudes de Asignaturas",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-06-05",
        end: "2023-06-13",
        sede: ["Valdivia", "Patagonia", "PuertoMontt"],
        id:"61"
      },
      {
        description: "Último día para que Directores y Directoras de Escuela resuelvan las solicitudes de anulación de asignaturas realizadas por los estudiantes.",
        title: "Resolución de Anulación de Asignaturas",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-06-07",
        sede: ["Valdivia", "Patagonia", "PuertoMontt"],
        id:"62"
      },
      {
        description: "Período para que las y los estudiantes presenten a través de www.uach.cl/alumnos las solicitudes de postergación de evaluaciones.",
        title: "Solicitudes de Postergación de Evaluaciones",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-07-07",
        end: "2023-08-07",
        sede: ["Valdivia", "Patagonia", "PuertoMontt"],
        id:"63"
      },
      {
        description: "Período para que las Unidades Académicas definan la oferta de asignaturas para el segundo semestre 2023.",
        title: "Definición de Oferta de Asignaturas",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-06-19",
        end: "2023-06-27",
        sede: ["Valdivia", "Patagonia", "PuertoMontt"],
        id:"64"
      },
      {
        description: "Período de firma del pagaré del Fondo Solidario de Crédito Universitario para estudiantes que el MINEDUC le asigne este beneficio de arancel en el Departamento de Bienestar Estudiantil de cada Campus y Sedes.",
        title: "Firma de Pagaré del Fondo Solidario de Crédito Universitario",
        className: "Financiero",
        sem: "1er Semestre",
        start: "2023-06-30",
        end: "2023-07-30",
        sede: ["Valdivia", "Patagonia", "PuertoMontt"],
        id:"65"
      },
      {
        description: "Último día para que las Facultades y Sedes presenten proyectos de innovación curricular de carreras a la Vicerrectoría Académica, para evaluar factibilidad de implementación desde el primer semestre 2024.",
        title: "Presentación de Proyectos de Innovación Curricular",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-06-30",
        sede: ["Valdivia", "Patagonia", "PuertoMontt"],
        id:"66"
      },
      {
        description: "Curso de Formación en Docencia Universitaria para Habilitación Pedagógica, a cargo del Departamento de Aseguramiento de la Calidad e Innovación Curricular (DACIC), disponible para docentes de las Sedes Valdivia, Puerto Montt y Campus Patagonia.",
        title: "Curso de Formación en Docencia Universitaria",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-07-03",
        end: "2023-08-04",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"67"
      },
      {
        description: "Último día de clases del primer semestre.",
        title: "Último Día de Clases del Primer Semestre",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-07-07",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"68"
      },
      {
        description: "Período de exámenes finales.",
        title: "Exámenes Finales",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-07-10",
        end: "2023-07-21",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"69"
      },
      {
        description: "Primer período para que las y los profesores responsables actualicen las características de sus asignaturas del segundo semestre 2023.",
        title: "Actualización de Características de Asignaturas",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-07-10",
        end: "2023-07-21",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"70"
      },
      //PAG5
      {
        description: "Período de recepción de solicitudes de Ingreso Especial en la Dirección de Estudios de Pregrado. Se exceptúan de lo anterior los ingresos especiales que, por Reglamento academico Estudiantil, sólo pueden realizarse en el mes de marzo.",
        title: "Recepción de Solicitudes de Ingreso Especial",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-07-17",
        end: "2023-07-21",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"71"
      },
      {
        description: "Período de receso de las actividades del personal de la Universidad.",
        title: "Receso de Actividades del Personal",
        className: "Otros",
        sem: "1er Semestre",
        start: "2023-07-24",
        end: "2023-07-28",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"72"
      },
      {
        description: "Período de vacaciones para las y los estudiantes.",
        title: "Vacaciones de Estudiantes",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-07-24",
        end: "2023-08-04",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"73"
      },
      {
        description: "Segundo período para que las y los profesores responsables actualicen las características y publiquen los programas de sus asignaturas del segundo semestre 2023.",
        title: "Actualización y Publicación de Programas de Asignaturas",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-07-31",
        end: "2023-08-07",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"74"
      },
      {
        description: "Último día para que los Directores y Directoras de Escuela informen las notas de las tesis, seminarios, prácticas o trabajos de titulación inscritos el primer semestre 2023.",
        title: "Informe de Notas de Trabajos de Titulación",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2023-07-31",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"75"
      },
      {
        description: "Último día para que las y los estudiantes de carreras semestrales con asignatura terminal inscrita en el primer semestre 2023, ingresen su solicitud de ampliación de plazo de titulación, RAE 2008, en www.uach.cl/alumnos.",
        title: "Solicitud de Ampliación de Plazo de Titulación",
        className: "Académico",
        sem: "1er Semestre",
        start: "2023-07-31",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"76"
      },
      {
        description: "Inicio del proceso de renovación de las Becas de Mantención JUNAEB (Beca Presidente de la República, Beca Indígena y Beca de Residencia Indígena, Beca Integración Territorial, Beca Patagonia, Beca Aysén) para el segundo semestre del año 2023, a través de la página portalbecas.junaeb.cl/sinabweb.",
        title: "Renovación de Becas de Mantención JUNAEB (Agosto)",
        className: "Académico",
        sem: "2do Semestre",
        start: "",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"77"
      },
      {
        description: "Último día para el ingreso de calificaciones.",
        title: "Ingreso de Calificaciones",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-01",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"78"
      },
      {
        description: "Último día para que las y los estudiantes ingresen solicitudes de reconsideración, a través de www.uach.cl/alumnos.",
        title: "Solicitudes de Reconsideración",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-01",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"79"
      },
      {
        description: "Período de matrícula segundo semestre para estudiantes en situaciones especiales.",
        title: "Matrícula para Estudiantes en Situaciones Especiales",
        className: "Admisión",
        sem: "2do Semestre",
        start: "2023-08-01",
        end: "2023-08-03",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"80"
      },
      {
        description: "Período de inducción para estudiantes de intercambio, segundo semestre 2023.",
        title: "Inducción para Estudiantes de Intercambio",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-01",
        end: "2023-08-04",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"81"
      },
      {
        description: "Período de postulación y renovación de la Beca de Alimentación, a través de www.uach.cl/alumnos.",
        title: "Postulación y Renovación de Beca de Alimentación",
        className: "Financiero",
        sem: "2do Semestre",
        start: "2023-08-01",
        end: "2023-08-31",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"82"
      },
      {
        description: "Período de postulación a la Beca de Estímulo Universitario (Laborancias) a través de www.uach.cl/alumnos.",
        title: "Postulación a Beca de Estímulo Universitario",
        className: "Financiero",
        sem: "2do Semestre",
        start: "2023-08-01",
        end: "2023-08-31",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"83"
      },
      {
        description: "Periodo para que las Unidades soliciten estudiantes laborantes al Departamento de Bienestar Estudiantil, a través de www.uach.cl/funcionarios.",
        title: "Solicitud de Estudiantes Laborantes",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-01",
        end: "2023-08-31",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"84"
      },
      {
        description: "Tercera publicación de resultados de Asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl.",
        title: "Publicación de Resultados de Asignación de Beneficios",
        className: "Financiero",
        sem: "2do Semestre",
        start: "2023-08-03",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"85"
      },
      {
        description: "Período de inscripción de asignaturas para estudiantes de cursos superiores.",
        title: "Inscripción de Asignaturas para Estudiantes de Cursos Superiores",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-03",
        end: "2023-08-11",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"86"
      },
      {
        description: "Tercer período de apelación a resultados de asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl.",
        title: "Apelación a Resultados de Asignación de Beneficios",
        className: "Financiero",
        sem: "2do Semestre",
        start: "2023-08-03",
        end: "2023-08-18",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"87"
      },
      {
        description: "Último día para que Directores y Directoras de Escuela resuelvan las solicitudes de reconsideración presentadas por las y los estudiantes.",
        title: "Resolución de Solicitudes de Reconsideración",
        className: "Docencia",
        sem: "2do Semestre",
        start: "2023-08-04",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"88"
      },
      {
        description: "Inicio de clases segundo semestre.",
        title: "Inicio de Clases Segundo Semestre",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-07",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"89"
      },
      {
        description: "Período para que las Unidades Académicas presenten nuevas asignaturas optativas o actualizaciones de asignaturas para el primer semestre 2024 a DACIC.",
        title: "Presentación de Nuevas Asignaturas Optativas",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-07",
        end: "2023-09-08",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"90"
      },
      {
        description: "Último día para que la Dirección de Estudios de Pregrado confirme las solicitudes de reconsideración resueltas por los Directores y Directoras de Escuela, para el período inmediatamente siguiente.",
        title: "Confirmación de Solicitudes de Reconsideración",
        className: "Docencia",
        sem: "2do Semestre",
        start: "2023-08-09",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"91"
      },
      //PAG6
      {
        description: "Último día para que las y los estudiantes presenten reconocimientos y convalidaciones de asignaturas en sus respectivas Escuelas.",
        title: "Presentación de Reconocimientos y Convalidaciones de Asignaturas",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-11",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"92"
      },
      {
        description: "Período de modificación a la inscripción de asignaturas y envío a las Escuelas de solicitudes de inscripción extraordinaria correspondiente al segundo semestre 2023, a través de www.uach.cl/alumnos.",
        title: "Modificación e Inscripción Extraordinaria de Asignaturas",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-11",
        end: "2023-08-18",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"93"
      },
      {
        description: "Feriado estudiantil y día no laborable.",
        title: "Feriado Estudiantil",
        className: "Otros",
        sem: "2do Semestre",
        start: "2023-08-14",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"94"
      },
      {
        description: "Último día para enviar las solicitudes de estudiantes ayudantes al Departamento de Registro academico Estudiantil.",
        title: "Envío de Solicitudes de Estudiantes Ayudantes",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-18",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"95"
      },
      {
        description: "Último día para que las Escuelas envíen al Departamento de Registro academico Estudiantil los reconocimientos y convalidaciones de asignaturas.",
        title: "Envío de Reconocimientos y Convalidaciones de Asignaturas",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-21",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"96"
      },
      {
        description: "Último día para que las Escuelas resuelvan las peticiones de inscripción extraordinaria de asignaturas, de acuerdo con las solicitudes efectuadas por los estudiantes.",
        title: "Resolución de Peticiones de Inscripción Extraordinaria de Asignaturas",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-25",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"97"
      },
      {
        description: "Último día para que las y los estudiantes ingresen solicitudes de suspensión de semestre a través de www.uach.cl/alumnos.",
        title: "Solicitudes de Suspensión de Semestre",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-30",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"98"
      },
      {
        description: "Último día para que las y los estudiantes de cursos superiores postulen a las distintas modalidades de intercambio estudiantil para el primer semestre 2023, a universidades extranjeras y nacionales a través de la Oficina de Movilidad Estudiantil.",
        title: "Postulación a Intercambio Estudiantil (Estudiantes cursos superiores)",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-08-30",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"99"
      },
      {
        description: "Último día para que las y los estudiantes de carreras anuales anulen una asignatura o módulo a través de www.uach.cl/alumnos.",
        title: "Anulación de Asignaturas o Módulos para Carreras Anuales",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-09-04",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"100"
      },
      {
        description: "Último día para que las y los estudiantes de carreras con régimen anual presenten las solicitudes de anulación del año academico a través de www.uach.cl/alumnos.",
        title: "Anulación del Año academico para Carreras con Régimen Anual",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-09-04",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"101"
      },
      {
        description: "Postulación Proyectos de Innovación a la Docencia Universitaria Concurso 2024 de la Dirección de Estudios de Pregrado – DACIC.",
        title: "Postulación a Proyectos de Innovación a la Docencia Universitaria",
        className: "Otros",
        sem: "2do Semestre",
        start: "2023-09-04",
        end: "2023-11-30",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"102"
      },
      {
        description: "Ceremonia de celebración de Aniversario de la Universidad en Valdivia.",
        title: "Ceremonia de Aniversario en Valdivia",
        className: "Social",
        sem: "2do Semestre",
        start: "2023-09-07",
        sede: ["Valdivia"],
        id:"103"
      },
      {
        description: "Ceremonia de celebración de Aniversario de la Universidad en la sede Puerto Montt.",
        title: "Ceremonia de Aniversario en Puerto Montt",
        className: "Social",
        sem: "2do Semestre",
        start: "2023-09-08",
        sede: ["PuertoMontt"],
        id:"104"
      },
      {
        description: "Ceremonia de celebración de Aniversario de la Universidad en el Campus Patagonia.",
        title: "Ceremonia de Aniversario en Campus Patagonia",
        className: "Social",
        sem: "2do Semestre",
        start: "2023-09-11",
        sede: ["Patagonia"],
        id:"105"
      },
      {
        description: "Período para que las Unidades Académicas presenten nuevas asignaturas optativas o actualizaciones de asignaturas a ser implementadas el primer semestre 2024 a DACIC, incluyendo retroalimentación del equipo microcurricular, para su posterior oficialización ante la Dirección de Estudios de Pregrado y el Departamento de Registro academico Estudiantil.",
        title: "Presentación de Nuevas Asignaturas Optativas",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-09-11",
        end: "2023-10-13",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"106"
      },
      {
        description: "Publicación de la asignación de la Beca de Alimentación, segundo semestre 2023.",
        title: "Publicación de Asignación de Beca de Alimentación",
        className: "Financiero",
        sem: "2do Semestre",
        start: "2023-09-15",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"107"
      },
      {
        description: "Semana de pausa estudiantil.",
        title: "Semana de Pausa Estudiantil",
        className: "Social",
        sem: "2do Semestre",
        start: "2023-09-14",
        end: "2023-09-22",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"108"
      },
      {
        description: "Período de postulación a Crédito con Garantía Estatal para estudiantes que se les termina Gratuidad, Becas y Fondo Solidario de Crédito Universitario en el año 2023, por años de permanencia en la carrera en página www.fuas.cl.",
        title: "Postulación a Crédito con Garantía Estatal",
        className: "Financiero",
        sem: "2do Semestre",
        start: "",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"109"
      },
      {
        description: "Período de postulación a Gratuidad, Becas de Arancel y Créditos, para estudiantes de cursos superiores que postulan por primera vez o tienen cambio de situación socioeconómica en el sitio www.fuas.cl.",
        title: "Postulación a Gratuidad, Becas y Créditos",
        className: "Financiero",
        sem: "2do Semestre",
        start: "",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"110"
      },
      //PAG7
      {
        description: "Período de postulación a Ingresos Especiales a través de www.uach.cl.",
        title: "Postulación a Ingresos Especiales",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-10-02",
        end: "2023-12-15",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"111"
      },
      {
        description: "Cuarta publicación de resultados de Asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl.",
        title: "Publicación de Resultados de Beneficios",
        className: "Financiero",
        sem: "2do Semestre",
        start: "2023-10-03",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"112"
      },
      {
        description: "Último día para que estudiantes extranjeros y nacionales envíen sus postulaciones de intercambio, para el primer semestre 2024 a la Oficina de Movilidad Estudiantil.",
        title: "Postulación a Intercambio para Estudiantes Extranjeros y Nacionales (1er Semestre 2024)",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-10-15",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"113"
      },
      {
        description: "Proceso de Admisión a carreras Técnico Universitarias del Campus Patagonia. Período de postulaciones online a través de htttps://patagonia.uach.cl.",
        title: "Admisión a Carreras Técnico Universitarias",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-10-17",
        end: "2023-11-24",
        sede: ["Patagonia"],
        id:"114"
      },
      {
        description: "Último día para que estudiantes de carreras semestrales presenten las solicitudes de anulación de semestre, a través de www.uach.cl/alumnos.",
        title: "Solicitudes de Anulación de Semestre",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-10-26",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"115"
      },
      {
        description: "Último día para que estudiantes de carreras semestrales anulen una asignatura o módulo a través de www.uach.cl/alumnos.",
        title: "Anulación de Asignaturas o Módulos",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-10-26",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"116"
      },
      {
        description: "Proceso de Admisión a Programas de Continuidad de Estudios Profesionales del Campus Patagonia. Período de postulaciones y recepción de antecedentes en https://patagonia.uach.cl.",
        title: "Admisión a Programas de Continuidad de Estudios Profesionales",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-11-02",
        end: "2023-12-01",
        sede: ["Patagonia"],
        id:"117"
      },
      {
        description: "Último día para que los Directores y Directoras de Escuela resuelvan las solicitudes de anulación de asignaturas realizadas por los estudiantes.",
        title: "Resolución de Anulación de Asignaturas",
        className: "Docencia",
        sem: "2do Semestre",
        start: "2023-11-03",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"118"
      },
      {
        description: "Período para que estudiantes presenten a través de www.uach.cl/alumnos las solicitudes de postergación de evaluaciones.",
        title: "Solicitudes de Postergación de Evaluaciones",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-11-04",
        end: "2023-12-04",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"119"
      },
      {
        description: "Período para que las Escuelas formulen la petición de asignaturas para el primer semestre 2024 (carreras semestrales y anuales) a las Unidades Académicas.",
        title: "Formulación de Petición de Asignaturas para el Primer Semestre 2024",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-11-06",
        end: "2023-11-17",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"120"
      },
      {
        description: "Período para que las Unidades Académicas definan la oferta de asignaturas para el primer semestre 2024 (carreras semestrales y anuales).",
        title: "Definición de Oferta de Asignaturas para el Primer Semestre 2024",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-11-27",
        end: "2023-12-07",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"121"
      },
      {
        description: "Período de renovación de Becas de Mantención JUNAEB (Presidente de la República, Beca Indígena y Beca de Residencia Indígena, Beca Integración Territorial, Beca Patagonia, Beca Aysén) para primer semestre del año 2024 en el sitio portalbecas.junaeb.cl/sinabweb/",
        title: "Renovación de Becas de Mantención JUNAEB (Diciembre)",
        className: "Financiero",
        sem: "2do Semestre",
        start: "",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"122"
      },
      {
        description: "Proceso de admisión a carreras Técnico Universitarias del Campus Patagonia. Segundo período de postulaciones online a través de htttps://patagonia.uach.cl.",
        title: "Admisión a Carreras Técnico Universitarias",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-12-01",
        end: "2023-12-20",
        sede: ["Patagonia"],
        id:"123"
      },
      {
        description: "Primer período de matrícula de estudiantes seleccionados del proceso de admisión a carreras Técnico Universitarias del Campus Patagonia.",
        title: "Matrícula de Estudiantes Seleccionados",
        className: "Admisión",
        sem: "2do Semestre",
        start: "2023-12-01",
        end: "2023-12-22",
        sede: ["Patagonia"],
        id:"124"
      },
      {
        description: "Último día de clases del segundo semestre.",
        title: "Último Día de Clases del Segundo Semestre",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-12-01",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"125"
      },
      {
        description: "Periodo de exámenes finales.",
        title: "Exámenes Finales",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-12-04",
        end: "2023-12-15",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"126"
      },
      {
        description: "Período de matrícula de estudiantes seleccionados del Proceso de Admisión a Programas de Continuidad de estudios profesionales del Campus Patagonia.",
        title: "Matrícula de Estudiantes Seleccionados (Programas de Continuidad)",
        className: "Admisión",
        sem: "2do Semestre",
        start: "2023-12-06",
        end: "2023-12-29",
        sede: ["Patagonia"],
        id:"127"
      },
      {
        description: "Último día para el ingreso de calificaciones.",
        title: "Ingreso de Calificaciones",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-12-26",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"128"
      },
      {
        description: "Segundo período de matrícula de estudiantes seleccionados del Proceso de Admisión a Carreras Técnico Universitarias del Campus Patagonia.",
        title: "Matrícula de Estudiantes Seleccionados (Carreras Técnicas)",
        className: "Admisión",
        sem: "2do Semestre",
        start: "2023-12-26",
        end: "2024-01-12",
        sede: ["Patagonia"],
        id:"129"
      },
      //Pag8
      {
        description: "Último día para que las y los estudiantes ingresen solicitudes de reconsideración, a través de www.uach.cl/alumnos.",
        title: "Solicitudes de Reconsideración",
        className: "Académico",
        sem: "2do Semestre",
        start: "2023-12-29",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id:"130"
      },
      {
        description: "Inicio período de matrícula estudiantes de cursos superiores, año académico 2024.",
        title: "Inicio de Matrícula",
        className: "Admisión",
        sem: "1er Semestre",
        start: "2024-01-05",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id: "131"
      },
      {
        description: "Último día para que los Directores y Directoras de Escuela resuelvan las solicitudes de reconsideración presentadas por los estudiantes.",
        title: "Resolución de Solicitudes de Reconsideración",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2024-01-05",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id: "132"
      },
      {
        description: "Último día para que la Dirección de Estudios de Pregrado confirme las solicitudes de reconsideración resueltas por los Directores y Directoras de Escuela para el período inmediatamente siguiente.",
        title: "Confirmación de Solicitudes de Reconsideración",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2024-01-12",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id: "133"
      },
      {
        description: "Curso de Formación en Docencia Universitaria para Habilitación Pedagógica, a cargo del Departamento de Aseguramiento de la Calidad e Innovación Curricular (DACIC), disponible para docentes de las Sedes Valdivia, Puerto Montt y Campus Patagonia.",
        title: "Curso de Formación en Docencia Universitaria",
        className: "Docencia",
        sem: "1er Semestre",
        start: "2024-01-08",
        end: "2024-01-19",
        sede: ["Valdivia", "PuertoMontt", "Patagonia"],
        id: "134"
      }

    ]

    export const typeEvents = [...new Set(events.map(evento => evento.className))]
    export const allCampus = [...new Set(events.reduce((acc, evento) => acc.concat(evento.sede), []))];

export async function GET() {
  return new NextResponse.json(events);
}