import {
    Input,
    Button,
    ButtonGroup,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { FaUserCircle } from "react-icons/fa";

export default function EventModal(props) {


    const { isOpen, onClose, eventTitle, eventStartDate,
            eventDescription, eventClassName, eventEndDate,
            eventSedes, eventComentarios} = props;

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
              {eventSedes.map((category) => (
                <div className={category}>{category}</div>
              ))}
            </div>

          <b><h3>Descripción:</h3></b>
          <div className="div-default">
              <p>{eventDescription}</p>
          </div>

          <b><h3>Comentarios:</h3></b>
          <div className="div-comentarios">
              {eventComentarios.map((x) => (
                <div className={x.enRespuestaA == "" ? "comentario" : "comentario-respuesta"}>
                  <div className='userName'><FaUserCircle className='user-icon' />  {x.usuario}</div>
                  <div className='text-comentario'>{x.comentario}</div>
                </div>
              ))}
          </div>
            <div className="form">
                <Input placeholder='Ingrese Usuario'  width= '20%' borderColor={'black'} marginRight={'2%'} />
                <Input placeholder='Ingrese Comentario'  width= '70%' borderColor={'black'} marginRight={'2%'} />
                <Button variant='outline' borderColor={'black'} backgroundColor={'gray.300'}>Enviar</Button>
            </div>
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    )
  }