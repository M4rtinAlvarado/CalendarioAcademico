import {
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {useState, useEffect} from "react"
  import { FaUserCircle } from "react-icons/fa";

export default function EventModal(props) {

    const { isOpen, onClose, eventTitle, eventStartDate, eventDescription, eventClassName, eventEndDate , eventSedes, eventID} = props;
    const [eventComentarios, setEventComentarios] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [comentario, setComentario] = useState("");
    const [enRespuestaA, setEnRespuestaA] = useState("");
    const[respondiendo,setRespondiendo] = useState(false)
    console.log(eventID)

    function ApiComentarios (){
      const fetchData = async () => {
        const response = await fetch(`/api/Comentarios?idApp=Calendario&idItem=${eventID}`);
        const data = await response.json();
        setEventComentarios(data);
      };
      fetchData();
    }
    useEffect(() => {
        ApiComentarios()
      }, []);


      console.log(eventComentarios)

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
        console.log(data);
      };
    }

      const handleSubmit = async (e) => {
        e.preventDefault();
        sendRequest();
        ApiComentarios();
        ApiComentarios();
        console.log(eventComentarios)
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
                <div className={x.enRespuestaA == "" ? "comentario" : "comentario-respuesta"} key={index}>
                  <div className='userName'><FaUserCircle className='user-icon' /> {x.usuario} </div>
                  <div className='text-comentario'>{x.comentario}</div>
                </div>
              ))}
          </div>
              <form onSubmit={handleSubmit} className="form">
                  <Input placeholder='Ingrese Usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} width= '20%' borderColor={'black'} marginRight={'2%'}  />
                  <Input placeholder='Nuevo Comentario' value={comentario} width= '70%'onChange={(e)=> setComentario(e.target.value)} borderColor={'black'} marginRight={'2%'} />
                  <Button type = 'submit' variant='outline' borderColor={'black'} backgroundColor={'gray.300'}>Enviar</Button>
              </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    )
  }