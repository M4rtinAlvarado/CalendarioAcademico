import {Button} from '@chakra-ui/react'


export default function Boton(props) {


    const { clase , state , click} = props;
    let nombre = clase;
    let claseP = ""
    if(state){
        nombre = "NonSelected";
    }
    if(clase === "PuertoMontt"){
       claseP = "Puerto Montt"
    }else{
        claseP = clase
    }
    return(
        <Button margin={2} className={nombre} onClick={click}>
            {claseP}
        </Button>
    )
  }