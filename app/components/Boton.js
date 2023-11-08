import {Button} from '@chakra-ui/react'


export default function Boton(props) {


    const { clase , state , click} = props;
    let nombre = clase;
    if(state){
        nombre = "NonSelected";
    }
    return(
        <Button margin={2} className={nombre} onClick={click}>
            {clase}
        </Button>
    )
  }