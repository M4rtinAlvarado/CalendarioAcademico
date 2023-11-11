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


export default function EventModal(props) {


    const { isOpen, onClose, eventTitle, eventStartDate, eventDescription, eventClassName, eventEndDate} = props;

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
          </div>
          <b><h3>Descripción:</h3></b>
          <div className="div-default">
              <p>{eventDescription}</p>
          </div>
          <b><h3>Comentarios:</h3></b>
          <div className="div-comentarios">
              <div className="comentario">Comentario1</div>
              <div className="form">
                  <Input placeholder='Nuevo Comentario'  width= '90%' borderColor={'black'} marginRight={'2%'} />
                  <Button variant='outline' borderColor={'black'} backgroundColor={'gray.300'}>Enviar</Button>
              </div>
          </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    )
  }