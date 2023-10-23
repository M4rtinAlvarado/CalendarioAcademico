import { NextResponse } from "next/server";

export const events = 
[   {
  description: "Período de matrícula para estudiantes de cursos superiores a través del portal www.uach.cl/alumnos.",
  title: "Matrícula de Cursos Superiores",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-04",
  end: "2023-03-12",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Primer período para que las y los profesores responsables actualicen las características y publiquen el programa de sus asignaturas del primer semestre 2023, en el Sistema academico.",
  title: "Actualización de Programas academicos",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-16",
  end: "2023-01-23",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Publicación de resultados de preselección de Gratuidad, Becas y Créditos para postulantes FUAS y potenciales renovantes, a través de www.beneficiosestudiantiles.cl/.",
  title: "Publicación de Resultados FUAS",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-01-16",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Segundo período de postulaciones FUAS para beneficios 2023, a través de www.fuas.cl.",
  title: "Postulaciones FUAS",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-01-16",
  end: "2023-03-16",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Curso de Formación en Docencia Universitaria para Habilitación Pedagógica, a cargo del Departamento de Aseguramiento de la Calidad e Innovación Curricular (DACIC), disponible para docentes de las Sedes Valdivia, Puerto Montt y Campus Patagonia.",
  title: "Curso de Formación en Docencia Universitaria",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-17",
  end: "2023-01-19",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes ingresen solicitudes de reconsideración, a través de www.uach.cl/alumnos.",
  title: "Solicitudes de Reconsideración",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-18",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Primer período de matrícula Proceso de Admisión 2023 (Seleccionados, BEA, PACE e ingresos especiales).",
  title: "Matrícula Proceso de Admisión",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-18",
  end: "2023-01-20",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Primer período de Acreditación Socioeconómica para las y los estudiantes informados por el MINEDUC que deban presentar documentos de respaldo del FUAS, en página www.becasycreditos.cl.",
  title: "Acreditación Socioeconómica",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-01-18",
  end: "2023-01-26",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para la renovación de las Becas de Mantención JUNAEB (Presidente de la República, Indígena y de Residencia Indígena, Integración Territorial, Patagonia, Aysén) para primer semestre del año 2023 a través de la página portalbecas.junaeb.cl/sinabweb/.",
  title: "Renovación de Becas JUNAEB",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-01-20",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Segundo período de matrícula Proceso de Admisión 2023 (Listas de espera, lista adicional de espera, BEA, PACE e ingresos especiales).",
  title: "Matrícula Proceso de Admisión",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-21",
  end: "2023-01-27",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día para que Directores y Directoras de Escuela resuelvan las solicitudes de reconsideración presentadas por los estudiantes.",
  title: "Resolución de Solicitudes de Reconsideración",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-23",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que la Dirección de Estudios de Pregrado confirme las solicitudes de reconsideración resueltas por los Directores y Directoras de Escuela, para el período inmediatamente siguiente.",
  title: "Confirmación de Solicitudes de Reconsideración",
  type: "academico",
  sem: "Semestre1",
  start: "2023-01-26",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Periodo de receso del personal de la Universidad.",
  title: "Receso del Personal",
  type: "otros",
  sem: "Semestre1",
  start: "2023-01-30",
  end: "2023-02-28",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Período de postulación y renovación de la Beca de Alimentación, a través de www.uach.cl/alumnos.",
  title: "Beca de Alimentación",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-01",
  end: "2023-03-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Período de postulación a la Beca de Estímulo Universitario (Laborancias) a través de www.uach.cl/alumnos.",
  title: "Beca de Estímulo Universitario",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-01",
  end: "2023-03-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Periodo en que las Unidades solicitan estudiantes laborantes al Departamento de Bienestar Estudiantil, a través de www.uach.cl/funcionarios.",
  title: "Solicitud de Estudiantes Laborantes",
  type: "otros",
  sem: "Semestre1",
  start: "2023-03-01",
  end: "2023-03-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Período de postulación a Beca Hijo de Funcionario en el Departamento de Bienestar de Personal.",
  title: "Beca Hijo de Funcionario",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-01",
  end: "2023-03-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Segundo período para que las y los profesores responsables actualicen las características y publiquen el programa de sus asignaturas del primer semestre 2023.",
  title: "Actualización de Programas academicos",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-02",
  end: "2023-03-13",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Bienvenida e Inducción para estudiantes Ingreso 2023 provenientes de Programas PACE, Propedéutico y Ranking 1000.",
  title: "Bienvenida e Inducción",
  type: "otros",
  sem: "Semestre1",
  start: "2023-03-03",
  end: "2023-03-07",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Inicio de clases para estudiantes de cursos superiores de la Escuela de Derecho (Valdivia y Puerto Montt).",
  title: "Inicio de Clases",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-06",
  sede: ["Valdivia", "PuertoMontt"]
},
{
  description: "Periodo de inducción para estudiantes de intercambio del primer semestre.",
  title: "Inducción para Estudiantes de Intercambio",
  type: "otros",
  sem: "Semestre1",
  start: "2023-03-06",
  end: "2023-03-10",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Periodo de nivelación académica inicial, estudiantes Ingreso 2023 provenientes de Programas PACE, Propedéutico y Ranking 1000.",
  title: "Nivelación Académica",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-06",
  end: "2023-03-10",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Bienvenida Institucional y jornadas de inducción por parte de las Escuelas para estudiantes Ingreso 2023.",
  title: "Bienvenida Institucional",
  type: "otros",
  sem: "Semestre1",
  start: "2023-03-08",
  end: "2023-03-10",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Período de inscripción, modificación de asignaturas y envío a las Escuelas de solicitudes de inscripción extraordinaria, correspondiente al primer semestre 2023, a través de www.uach.cl/alumnos.",
  title: "Inscripción y Modificación de Asignaturas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-06",
  end: "2023-03-20",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Período de solicitud de arancel ajustado por decil socioeconómico, presentando la cartola del Registro Social de Hogares para estudiante que no cuenten con el beneficio de Gratuidad o Beca Vocación de Profesor.",
  title: "Solicitud de Arancel Ajustado",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-06",
  end: "2023-03-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Talleres de inducción de la Unidad de Apoyo al Aprendizaje (UAAEP) para Ingresos 2023.",
  title: "Talleres de Inducción",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-08",
  end: "2023-03-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Publicación de resultados de asignación de Gratuidad, Becas y Créditos para postulantes FUAS en www.becasycreditos.cl.",
  title: "Resultados de Beneficios FUAS",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-09",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Primer Período de apelación para estudiantes que completaron el FUAS en el sitio www.becasycreditos.cl.",
  title: "Período de Apelación FUAS",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-09",
  end: "2023-03-24",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Inicio de clases para estudiantes de cursos superiores, excepto Escuela de Derecho (Valdivia y Puerto Montt).",
  title: "Inicio de Clases",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-13",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes presenten solicitud de reconocimientos y convalidaciones de asignaturas en sus respectivas Escuelas.",
  title: "Solicitud de Reconocimientos y Convalidaciones",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-20",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Adjudicación de Proyectos de Innovación a la Docencia Universitaria Concurso 2023, de la Dirección de Estudios de Pregrado - DACIC.",
  title: "Adjudicación de Proyectos de Innovación",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-20",
  end: "2023-03-24",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Período de solicitud de monto crédito con garantía estatal para estudiantes preseleccionados FUAS del periodo de postulación octubre-noviembre de 2022.",
  title: "Solicitud de Crédito con Garantía Estatal",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-20",
  end: "2023-04-09",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día para enviar solicitudes de estudiantes ayudantes al Departamento de Registro academico Estudiantil.",
  title: "Solicitudes de Estudiantes Ayudantes",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-23",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que Directores y Directoras de Escuelas resuelvan las peticiones de inscripción de asignaturas, de acuerdo con las solicitudes efectuadas por las y los estudiantes.",
  title: "Resolución de Peticiones de Inscripción",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-27",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Período para que las Unidades Académicas presenten nuevas asignaturas optativas o actualizaciones de asignaturas para el segundo semestre 2023 a DACIC, incluyendo retroalimentación del equipo microcurricular, para su posterior oficialización ante la Dirección de Estudios de Pregrado y el Departamento de Registro academico Estudiantil.",
  title: "Presentación de Asignaturas Optativas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-27",
  end: "2023-05-05",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día para que estudiantes con ingreso 2023 renuncien a la carrera a través de Infoalumnos.",
  title: "Renuncia a la Carrera",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes de carreras semestrales y anuales ingresen solicitudes de suspensión de semestres y de año, a través de www.uach.cl/alumnos.",
  title: "Solicitud de Suspensión de Semestres",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Período para que las Direcciones de Escuela (sedes Valdivia y PuertoMontt) y Jefaturas de Carrera (Campus Patagonia) presenten al Departamento de Aseguramiento de la Calidad e Innovación Curricular (DACIC) las modificaciones curriculares menores que involucren cambios en el Sistema Curricular, para ser implementados desde el primer semestre 2024.",
  title: "Modificaciones Curriculares",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-27",
  end: "2023-05-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día para que Directores y Directoras de Escuela envíen los reconocimientos y convalidaciones de asignaturas al Departamento de Registro academico Estudiantil.",
  title: "Envío de Reconocimientos y Convalidaciones",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que Directores y Directoras de Escuela informen sobre notas de Tesis, Seminarios o Trabajo de Titulación inscritos en el segundo semestre 2022.",
  title: "Informe de Notas de Tesis",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes de carreras semestrales con asignatura terminal inscrita en el segundo semestre 2022, ingresen su solicitud de ampliación de plazo de titulación, RAE 2008, en www.uach.cl/alumnos.",
  title: "Solicitud de Ampliación de Plazo de Titulación",
  type: "academico",
  sem: "Semestre1",
  start: "2023-03-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Publicación de la asignación inicial de las becas internas Beca Rector Eduardo Morales Miranda y Beca Irma Herrera 2023.",
  title: "Asignación Inicial de Becas Internas",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-03-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Periodo de Acompañamiento academico y psicoeducativo de la Unidad de Apoyo al Aprendizaje (UAAEP).",
  title: "Acompañamiento academico y Psicoeducativo",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-01",
  end: "2023-12-29",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Inauguración del Año academico en Valdivia.",
  title: "Inauguración del Año academico",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-14",
  sede: ["Valdivia"]
},
{
  description: "Publicación de asignación de Becas de Alimentación UACh para el primer semestre 2023.",
  title: "Asignación de Becas de Alimentación",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-04-15",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes antiguos postulen a intercambios estudiantiles para el segundo semestre de 2023 a universidades extranjeras y nacionales a través de la Oficina de Movilidad Estudiantil.",
  title: "Postulación a Intercambios Estudiantiles",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-15",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día para que las y los estudiantes extranjeros y nacionales envíen sus postulaciones de intercambio para el segundo semestre de 2023 a la Oficina de Movilidad Estudiantil.",
  title: "Postulación a Intercambio para Estudiantes Extranjeros y Nacionales",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-15",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Período para que DACIC efectúe la retroalimentación de las asignaturas optativas recepcionadas, a implementar el segundo semestre 2023, y gestione su codificación con Registro academico Estudiantil y la Dirección de Estudios de Pregrado.",
  title: "Retroalimentación de Asignaturas Optativas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-15",
  end: "2023-05-15",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Inauguración del Año academico en Coyhaique.",
  title: "Inauguración del Año academico",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-17",
  sede: ["Patagonia"]
},
{
  description: "Inauguración del Año academico en Puerto Montt.",
  title: "Inauguración del Año academico",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-18",
  sede: ["PuertoMontt"]
},
{
  description: "Publicación de resultados de cambios de Instituciones de Educación Superior (Becas y Fondo Solidario de Crédito Universitario).",
  title: "Publicación de Resultados de Cambios de Instituciones de Educación Superior",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-21",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día de solicitud de monto CAE para estudiantes renovantes de Crédito con Garantía Estatal",
  title: "Solicitud de monto CAE",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-04-26",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Solicitud renovación monto CAE a través de la página https://portal.ingresa.cl/como-renovar/requisitos-para-renovar/",
  title: "Solicitud renovación monto CAE",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-04-27",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Semana de pausa estudiantil",
  title: "Semana de Pausa Estudiantil",
  type: "academico",
  sem: "Semestre1",
  start: "2023-04-28",
  end: "2023-05-05",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Periodo de firma de pagaré del Fondo Solidario Crédito Universitario (FSCU) para estudiantes a los cuales se aplica el artículo 108 de la Ley 21.091.",
  title: "Firma de Pagaré FSCU",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-04-30",
  end: "2023-05-31",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día para que estudiantes de carreras semestrales anulen una asignatura o módulo",
  title: "Anulación de Asignatura o Módulo",
  type: "academico",
  sem: "Semestre1",
  start: "2023-05-24",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes ingresen las solicitudes de anulación de semestre para carreras semestrales",
  title: "Solicitud de Anulación de Semestre",
  type: "academico",
  sem: "Semestre1",
  start: "2023-05-24",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Inauguración de Año Cultural en Valdivia.",
  title: "Inauguración de Año Cultural",
  type: "social",
  sem: "Semestre1",
  start: "2023-05-25",
  sede: ["Valdivia"]
},
{
  description: "Segunda publicación de resultados de asignación de Gratuidad, Becas y Créditos para postulantes FUAS",
  title: "Segunda Publicación de Resultados de Asignación",
  type: "academico",
  sem: "Semestre1",
  start: "2023-05-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Último día para que las Macrounidades presenten a la Dirección de Estudios de Pregrado las solicitudes de modificaciones curriculares mayores de carreras de Pregrado, para el análisis de pertinencia curricular, factibilidad administrativa y financiera.",
  title: "Solicitudes de Modificaciones Curriculares Mayores",
  type: "academico",
  sem: "Semestre1",
  start: "2023-05-30",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},
{
  description: "Segundo período de apelación para estudiantes que completaron el FUAS en sitio www.becasycreditos.cl.",
  title: "Segundo Período de Apelación FUAS",
  type: "academico",
  sem: "Semestre1",
  start: "2023-05-30",
  end: "2023-06-14",
  sede: ["PuertoMontt", "Valdivia", "Patagonia"]
},//
{
  description: "Período para que las Escuelas formulen las solicitudes de asignaturas para el segundo semestre 2023 a las Unidades Académicas.",
  title: "Formulación de Solicitudes de Asignaturas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-06-05",
  end: "2023-06-13",
  sede: ["Valdivia", "Patagonia", "PuertoMontt"]
},
{
  description: "Último día para que Directores y Directoras de Escuela resuelvan las solicitudes de anulación de asignaturas realizadas por los estudiantes.",
  title: "Resolución de Anulación de Asignaturas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-06-07",
  sede: ["Valdivia", "Patagonia", "PuertoMontt"]
},
{
  description: "Período para que las y los estudiantes presenten a través de www.uach.cl/alumnos las solicitudes de postergación de evaluaciones.",
  title: "Solicitudes de Postergación de Evaluaciones",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-07",
  end: "2023-08-07",
  sede: ["Valdivia", "Patagonia", "PuertoMontt"]
},//
{
  description: "Período para que las Unidades Académicas definan la oferta de asignaturas para el segundo semestre 2023.",
  title: "Definición de Oferta de Asignaturas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-06-19",
  end: "2023-06-27",
  sede: ["Valdivia", "Patagonia", "PuertoMontt"]
},
{
  description: "Período de firma del pagaré del Fondo Solidario de Crédito Universitario para estudiantes que el MINEDUC le asigne este beneficio de arancel en el Departamento de Bienestar Estudiantil de cada Campus y Sedes.",
  title: "Firma de Pagaré del Fondo Solidario de Crédito Universitario",
  type: "financiero",
  sem: "Semestre1",
  start: "2023-06-30",
  end: "2023-07-30",
  sede: ["Valdivia", "Patagonia", "PuertoMontt"]
},
{
  description: "Último día para que las Facultades y Sedes presenten proyectos de innovación curricular de carreras a la Vicerrectoría Académica, para evaluar factibilidad de implementación desde el primer semestre 2024.",
  title: "Presentación de Proyectos de Innovación Curricular",
  type: "academico",
  sem: "Semestre1",
  start: "2023-06-30",
  sede: ["Valdivia", "Patagonia", "PuertoMontt"]
},//
{
  description: "Curso de Formación en Docencia Universitaria para Habilitación Pedagógica, a cargo del Departamento de Aseguramiento de la Calidad e Innovación Curricular (DACIC), disponible para docentes de las Sedes Valdivia, Puerto Montt y Campus Patagonia.",
  title: "Curso de Formación en Docencia Universitaria",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-03",
  end: "2023-08-04",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día de clases del primer semestre.",
  title: "Último Día de Clases del Primer Semestre",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-07",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de exámenes finales.",
  title: "Exámenes Finales",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-10",
  end: "2023-07-21",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Primer período para que las y los profesores responsables actualicen las características de sus asignaturas del segundo semestre 2023.",
  title: "Actualización de Características de Asignaturas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-10",
  end: "2023-07-21",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Período de recepción de solicitudes de Ingreso Especial en la Dirección de Estudios de Pregrado. Se exceptúan de lo anterior los ingresos especiales que, por Reglamento academico Estudiantil, sólo pueden realizarse en el mes de marzo.",
  title: "Recepción de Solicitudes de Ingreso Especial",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-17",
  end: "2023-07-21",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de receso de las actividades del personal de la Universidad.",
  title: "Receso de Actividades del Personal",
  type: "otros",
  sem: "Semestre1",
  start: "2023-07-24",
  end: "2023-07-28",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de vacaciones para las y los estudiantes.",
  title: "Vacaciones de Estudiantes",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-24",
  end: "2023-08-04",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Segundo período para que las y los profesores responsables actualicen las características y publiquen los programas de sus asignaturas del segundo semestre 2023.",
  title: "Actualización y Publicación de Programas de Asignaturas",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-31",
  end: "2023-08-07",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que los Directores y Directoras de Escuela informen las notas de las tesis, seminarios, prácticas o trabajos de titulación inscritos el primer semestre 2023.",
  title: "Informe de Notas de Trabajos de Titulación",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-31",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes de carreras semestrales con asignatura terminal inscrita en el primer semestre 2023, ingresen su solicitud de ampliación de plazo de titulación, RAE 2008, en www.uach.cl/alumnos.",
  title: "Solicitud de Ampliación de Plazo de Titulación",
  type: "academico",
  sem: "Semestre1",
  start: "2023-07-31",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Inicio del proceso de renovación de las Becas de Mantención JUNAEB (Beca Presidente de la República, Beca Indígena y Beca de Residencia Indígena, Beca Integración Territorial, Beca Patagonia, Beca Aysén) para el segundo semestre del año 2023, a través de la página portalbecas.junaeb.cl/sinabweb.",
  title: "Renovación de Becas de Mantención JUNAEB",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-01",//fecha por definir
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Último día para el ingreso de calificaciones.",
  title: "Ingreso de Calificaciones",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-01",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes ingresen solicitudes de reconsideración, a través de www.uach.cl/alumnos.",
  title: "Solicitudes de Reconsideración",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-01",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de matrícula segundo semestre para estudiantes en situaciones especiales.",
  title: "Matrícula para Estudiantes en Situaciones Especiales",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-01",
  end: "2023-08-03",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de inducción para estudiantes de intercambio, segundo semestre 2023.",
  title: "Inducción para Estudiantes de Intercambio",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-01",
  end: "2023-08-04",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Período de postulación y renovación de la Beca de Alimentación, a través de www.uach.cl/alumnos.",
  title: "Postulación y Renovación de Beca de Alimentación",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-08-01",
  end: "2023-08-31",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de postulación a la Beca de Estímulo Universitario (Laborancias) a través de www.uach.cl/alumnos.",
  title: "Postulación a Beca de Estímulo Universitario",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-08-01",
  end: "2023-08-31",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Periodo para que las Unidades soliciten estudiantes laborantes al Departamento de Bienestar Estudiantil, a través de www.uach.cl/funcionarios.",
  title: "Solicitud de Estudiantes Laborantes",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-01",
  end: "2023-08-31",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Tercera publicación de resultados de Asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl.",
  title: "Publicación de Resultados de Asignación de Beneficios",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-08-03",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Período de inscripción de asignaturas para estudiantes de cursos superiores.",
  title: "Inscripción de Asignaturas para Estudiantes de Cursos Superiores",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-03",
  end: "2023-08-11",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Tercer período de apelación a resultados de asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl.",
  title: "Apelación a Resultados de Asignación de Beneficios",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-08-03",
  end: "2023-08-18",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que Directores y Directoras de Escuela resuelvan las solicitudes de reconsideración presentadas por las y los estudiantes.",
  title: "Resolución de Solicitudes de Reconsideración",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-04",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Inicio de clases segundo semestre.",
  title: "Inicio de Clases Segundo Semestre",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-07",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período para que las Unidades Académicas presenten nuevas asignaturas optativas o actualizaciones de asignaturas para el primer semestre 2024 a DACIC.",
  title: "Presentación de Nuevas Asignaturas Optativas",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-07",
  end: "2023-09-08",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que la Dirección de Estudios de Pregrado confirme las solicitudes de reconsideración resueltas por los Directores y Directoras de Escuela, para el período inmediatamente siguiente.",
  title: "Confirmación de Solicitudes de Reconsideración",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-09",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Último día para que las y los estudiantes presenten reconocimientos y convalidaciones de asignaturas en sus respectivas Escuelas.",
  title: "Presentación de Reconocimientos y Convalidaciones de Asignaturas",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-11",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de modificación a la inscripción de asignaturas y envío a las Escuelas de solicitudes de inscripción extraordinaria correspondiente al segundo semestre 2023, a través de www.uach.cl/alumnos.",
  title: "Modificación e Inscripción Extraordinaria de Asignaturas",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-11",
  end: "2023-08-18",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Feriado estudiantil y día no laborable.",
  title: "Feriado Estudiantil",
  type: "otros",
  sem: "Semestre2",
  start: "2023-08-14",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Último día para enviar las solicitudes de estudiantes ayudantes al Departamento de Registro academico Estudiantil.",
  title: "Envío de Solicitudes de Estudiantes Ayudantes",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-18",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que las Escuelas envíen al Departamento de Registro academico Estudiantil los reconocimientos y convalidaciones de asignaturas.",
  title: "Envío de Reconocimientos y Convalidaciones de Asignaturas",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-21",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que las Escuelas resuelvan las peticiones de inscripción extraordinaria de asignaturas, de acuerdo con las solicitudes efectuadas por los estudiantes.",
  title: "Resolución de Peticiones de Inscripción Extraordinaria de Asignaturas",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-25",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Último día para que las y los estudiantes ingresen solicitudes de suspensión de semestre a través de www.uach.cl/alumnos.",
  title: "Solicitudes de Suspensión de Semestre",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-30",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes de cursos superiores postulen a las distintas modalidades de intercambio estudiantil para el primer semestre 2023, a universidades extranjeras y nacionales a través de la Oficina de Movilidad Estudiantil.",
  title: "Postulación a Intercambio Estudiantil",
  type: "academico",
  sem: "Semestre2",
  start: "2023-08-30",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Último día para que las y los estudiantes de carreras anuales anulen una asignatura o módulo a través de www.uach.cl/alumnos.",
  title: "Anulación de Asignaturas o Módulos para Carreras Anuales",
  type: "academico",
  sem: "Semestre2",
  start: "2023-09-04",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que las y los estudiantes de carreras con régimen anual presenten las solicitudes de anulación del año academico a través de www.uach.cl/alumnos.",
  title: "Anulación del Año academico para Carreras con Régimen Anual",
  type: "academico",
  sem: "Semestre2",
  start: "2023-09-04",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Postulación Proyectos de Innovación a la Docencia Universitaria Concurso 2024 de la Dirección de Estudios de Pregrado – DACIC.",
  title: "Postulación a Proyectos de Innovación a la Docencia Universitaria",
  type: "academico",
  sem: "Semestre2",
  start: "2023-09-04",
  end: "2023-11-30",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Ceremonia de celebración de Aniversario de la Universidad en Valdivia.",
  title: "Ceremonia de Aniversario en Valdivia",
  type: "social",
  sem: "Semestre2",
  start: "2023-09-07",
  sede: ["Valdivia"]
},
{
  description: "Ceremonia de celebración de Aniversario de la Universidad en la sede Puerto Montt.",
  title: "Ceremonia de Aniversario en Puerto Montt",
  type: "social",
  sem: "Semestre2",
  start: "2023-09-08",
  sede: ["PuertoMontt"]
},
{
  description: "Ceremonia de celebración de Aniversario de la Universidad en el Campus Patagonia.",
  title: "Ceremonia de Aniversario en Campus Patagonia",
  type: "social",
  sem: "Semestre2",
  start: "2023-09-11",
  sede: ["Patagonia"]
},
{
  description: "Período para que las Unidades Académicas presenten nuevas asignaturas optativas o actualizaciones de asignaturas a ser implementadas el primer semestre 2024 a DACIC, incluyendo retroalimentación del equipo microcurricular, para su posterior oficialización ante la Dirección de Estudios de Pregrado y el Departamento de Registro academico Estudiantil.",
  title: "Presentación de Nuevas Asignaturas Optativas",
  type: "academico",
  sem: "Semestre2",
  start: "2023-09-11",
  end: "2023-10-13",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Publicación de la asignación de la Beca de Alimentación, segundo semestre 2023.",
  title: "Publicación de Asignación de Beca de Alimentación",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-09-15",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Semana de pausa estudiantil.",
  title: "Semana de Pausa Estudiantil",
  type: "social",
  sem: "Semestre2",
  start: "2023-09-14",
  end: "2023-09-22",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Período de postulación a Crédito con Garantía Estatal para estudiantes que se les termina Gratuidad, Becas y Fondo Solidario de Crédito Universitario en el año 2023, por años de permanencia en la carrera en página www.fuas.cl.",
  title: "Postulación a Crédito con Garantía Estatal",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-09-01", // Debes definir la fecha
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de postulación a Gratuidad, Becas de Arancel y Créditos, para estudiantes de cursos superiores que postulan por primera vez o tienen cambio de situación socioeconómica en el sitio www.fuas.cl.",
  title: "Postulación a Gratuidad, Becas y Créditos",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-09-01", // Debes definir la fecha
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Período de postulación a Ingresos Especiales a través de www.uach.cl.",
  title: "Postulación a Ingresos Especiales",
  type: "academico",
  sem: "Semestre2",
  start: "2023-10-02",
  end: "2023-12-15",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Cuarta publicación de resultados de Asignación de Gratuidad, Becas de Arancel y Créditos en sitio www.becasycreditos.cl.",
  title: "Publicación de Resultados de Beneficios",
  type: "financiero",
  sem: "Semestre2",
  start: "2023-10-03",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que estudiantes extranjeros y nacionales envíen sus postulaciones de intercambio, para el primer semestre 2024 a la Oficina de Movilidad Estudiantil.",
  title: "Postulación a Intercambio Estudiantil",
  type: "academico",
  sem: "Semestre2",
  start: "2023-10-15",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Proceso de Admisión a carreras Técnico Universitarias del Campus Patagonia. Período de postulaciones online a través de htttps://patagonia.uach.cl.",
  title: "Admisión a Carreras Técnico Universitarias",
  type: "academico",
  sem: "Semestre2",
  start: "2023-10-17",
  end: "2023-11-24",
  sede: ["Patagonia"]
},
{
  description: "Último día para que estudiantes de carreras semestrales presenten las solicitudes de anulación de semestre, a través de www.uach.cl/alumnos.",
  title: "Solicitudes de Anulación de Semestre",
  type: "academico",
  sem: "Semestre2",
  start: "2023-10-26",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Último día para que estudiantes de carreras semestrales anulen una asignatura o módulo a través de www.uach.cl/alumnos.",
  title: "Anulación de Asignaturas o Módulos",
  type: "academico",
  sem: "Semestre2",
  start: "2023-10-26",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Proceso de Admisión a Programas de Continuidad de Estudios Profesionales del Campus Patagonia. Período de postulaciones y recepción de antecedentes en https://patagonia.uach.cl.",
  title: "Admisión a Programas de Continuidad de Estudios Profesionales",
  type: "academico",
  sem: "Semestre2",
  start: "2023-11-02",
  end: "2023-12-01",
  sede: ["Patagonia"]
},
{
  description: "Último día para que los Directores y Directoras de Escuela resuelvan las solicitudes de anulación de asignaturas realizadas por los estudiantes.",
  title: "Resolución de Anulación de Asignaturas",
  type: "academico",
  sem: "Semestre2",
  start: "2023-11-03",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período para que estudiantes presenten a través de www.uach.cl/alumnos las solicitudes de postergación de evaluaciones.",
  title: "Solicitudes de Postergación de Evaluaciones",
  type: "academico",
  sem: "Semestre2",
  start: "2023-11-04",
  end: "2023-12-04",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Período para que las Escuelas formulen la petición de asignaturas para el primer semestre 2024 (carreras semestrales y anuales) a las Unidades Académicas.",
  title: "Formulación de Petición de Asignaturas para el Primer Semestre 2024",
  type: "academico",
  sem: "Semestre2",
  start: "2023-11-06",
  end: "2023-11-17",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período para que las Unidades Académicas definan la oferta de asignaturas para el primer semestre 2024 (carreras semestrales y anuales).",
  title: "Definición de Oferta de Asignaturas para el Primer Semestre 2024",
  type: "academico",
  sem: "Semestre2",
  start: "2023-11-27",
  end: "2023-12-07",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Período de renovación de Becas de Mantención JUNAEB (Presidente de la República, Beca Indígena y Beca de Residencia Indígena, Beca Integración Territorial, Beca Patagonia, Beca Aysén) para primer semestre del año 2024 en el sitio portalbecas.junaeb.cl/sinabweb/",
  title: "Renovación de Becas de Mantención JUNAEB",
  type: "financiero",
  sem: "Semestre2",
  start: "2024-12-01", // Debes definir la fecha
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Proceso de admisión a carreras Técnico Universitarias del Campus Patagonia. Segundo período de postulaciones online a través de htttps://patagonia.uach.cl.",
  title: "Admisión a Carreras Técnico Universitarias (Segundo Período)",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-01",
  end: "2023-12-20",
  sede: ["Patagonia"]
},
{
  description: "Primer período de matrícula de estudiantes seleccionados del proceso de admisión a carreras Técnico Universitarias del Campus Patagonia.",
  title: "Matrícula de Estudiantes Seleccionados",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-01",
  end: "2023-12-22",
  sede: ["Patagonia"]
},
{
  description: "Último día de clases del segundo semestre.",
  title: "Último Día de Clases del Segundo Semestre",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-01",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},//
{
  description: "Periodo de exámenes finales.",
  title: "Exámenes Finales",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-04",
  end: "2023-12-15",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Período de matrícula de estudiantes seleccionados del Proceso de Admisión a Programas de Continuidad de estudios profesionales del Campus Patagonia.",
  title: "Matrícula de Estudiantes Seleccionados (Programas de Continuidad)",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-06",
  end: "2023-12-29",
  sede: ["Patagonia"]
},
{
  description: "Último día para el ingreso de calificaciones.",
  title: "Ingreso de Calificaciones",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-26",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
},
{
  description: "Segundo período de matrícula de estudiantes seleccionados del Proceso de Admisión a Carreras Técnico Universitarias del Campus Patagonia.",
  title: "Matrícula de Estudiantes Seleccionados (Carreras Técnicas)",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-26",
  end: "2024-01-12",
  sede: ["Patagonia"]
},//
{
  description: "Último día para que las y los estudiantes ingresen solicitudes de reconsideración, a través de www.uach.cl/alumnos.",
  title: "Solicitudes de Reconsideración",
  type: "academico",
  sem: "Semestre2",
  start: "2023-12-29",
  sede: ["Valdivia", "PuertoMontt", "Patagonia"]
}
//Falta lo de 2024

]
    export const typevents = [...new Set(events.map(evento => evento.type))]
    export const allCampus = [...new Set(events.reduce((acc, evento) => acc.concat(evento.campus), []))];
    
export async function GET() {
  return new NextResponse.json(events);
}
