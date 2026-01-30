import {
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react'
import {useState, useEffect} from "react"
import { FaUserCircle } from "react-icons/fa";

function calcFecha(timestamp) {
  const fechaActual = new Date();
  const fechaCometario = new Date(timestamp);
  const diferencia = fechaActual - fechaCometario;

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  if (dias > 7) {
    // Si han pasado más de 7 días, mostrar la fecha normalmente
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return fechaCometario.toLocaleString(undefined, options);

  } else if (horas >= 24) {
    return `hace ${dias} ${dias === 1 ? 'día' : 'días'}`;

  } else if (minutos >= 60) {
    return `hace ${horas} ${horas === 1 ? 'hora' : 'horas'}`;

  } else {
    return `hace ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
  }
}
export default function EventModal(props) {

  const { isOpen, onClose, eventTitle, eventStartDate, eventDescription, eventClassName, eventEndDate , eventSedes, eventID} = props;
  const [eventComentarios, setEventComentarios] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const [enRespuestaA, setEnRespuestaA] = useState("");
  const[respondiendo,setRespondiendo] = useState("")
  const[respondiendoUsuario, setRespondiendoUsuario] = useState("")
  const toast = useToast()

  function handleResponder(x, y){
    setRespondiendo(true)
    setRespondiendoUsuario(x)
    setEnRespuestaA(y)
  }

  function handleDejarDeResponder(){
    setRespondiendo(false)
    setRespondiendoUsuario("")
    setEnRespuestaA("")
  }

  function ApiComentarios (){
    const fetchData = async () => {
      const response = await fetch(`/api/Comentarios?idApp=Calendario&idItem=${eventID}`);
      const data = await response.json();
      let aux = []
      for(const i of data){
        if(i.enRespuestaA == null){
          aux.push(i)
          for (const j of data){
            if (j.enRespuestaA === i._id){
              aux.push(j)
            }
          }
        }
      }
      setEventComentarios(aux);
    };
    fetchData();
  }
  useEffect(() => {
      ApiComentarios()
    }, []);


    const sendRequest = async () => {
      if (usuario.length > 0 && comentario.length > 0){
      const response = await fetch("/api/CrearComentario", {
        method: "POST",
        body: JSON.stringify({
          usuario: usuario,
          idApp: "Calendario",
          idItem: eventID,
          comentario: comentario,
          timestamp: Date.now(),
          enRespuestaA: enRespuestaA === "" ? null : enRespuestaA,
        }),
      });
      const data = await response.json();
      toast({
        title: "Comentario Creado",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: "Error",
        description: "Debes rellenar Usuario y Comentario",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      sendRequest();
      ApiComentarios();
      ApiComentarios();
      
      // Reset form
      setUsuario("");
      setComentario("");
      setEnRespuestaA("");
    };

  return(
      <>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} motionPreset="scale">
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>{eventTitle}</ModalHeader>
        <ModalCloseButton color={"white"} size={"lg"}/>
        <ModalBody>
        <div className="div-default">
            <div className="fecha">
                <b><h3>Fecha: {eventStartDate} - {eventEndDate}</h3></b>
            </div>
        </div>
        <b><h3>Categoría:</h3></b>
          <div className="div-default">
            <div className={eventClassName}>{eventClassName}</div>
            {eventSedes.map((category,index) => (
              <div className={category}key={index}> {category} </div>
            ))}
          </div>
        <b><h3>Descripción:</h3></b>
        <div className="div-default">
            <p>{eventDescription}</p>
        </div>
        <b><h3>Comentarios:</h3></b>
        <div className="div-comentarios">
    
        {eventComentarios.map((x,index) => (
              <div className={x.enRespuestaA === null ? "comentario" : "comentario-respuesta"} key={index}>
                <div className='comentario-header'>
                <div className='userName'>
                  <FaUserCircle className='user-icon' /> 
                  {x.usuario} <p> {calcFecha(x.timestamp)} </p>
                  </div>
                  {x.enRespuestaA=== null ? <Button variant='outline' borderColor={'black'} backgroundColor={'#003554'} color={"white"}
                    _hover={{backgroundColor: "#166897"}}
                    onClick={() => handleResponder(x.usuario, x._id)}>Responder</Button> : console.log("")}
                </div>
                <div className='text-comentario'>{x.comentario}</div>
              </div>
            ))}
        </div>
        <div className='div-comentar'>
            {respondiendo ?
              (<div className='responder-header'>
                <div className='div-responder'> 
                Respondiendo a <b>{respondiendoUsuario}</b> 
                </div>
                <Button variant='outline' borderColor={'black'} backgroundColor={'red.400'} 
                onClick={() => handleDejarDeResponder()}>Dejar de responder</Button>
                </div>) : (console.log(""))
            } 
            <form onSubmit={handleSubmit} className="form">
                <Input placeholder='Ingrese Usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} 
                  width= '20%' borderColor={'black'} marginRight={'2%'}  />
                <Input placeholder='Nuevo Comentario' value={comentario} width= '70%'onChange={(e)=> setComentario(e.target.value)} 
                  borderColor={'black'} marginRight={'2%'} />
                <Button type = 'submit' variant='outline' borderColor={'black'} backgroundColor={'gray.300'}>Enviar</Button>
            </form>
        </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
  )
}