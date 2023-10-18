"use client"
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {League_Spartan} from "@next/font/google"

const lspartan = League_Spartan({
    subsets:['latin']
})

export default function Home() {
  return (
    <div className={lspartan.className}>
        <div className="main-evento">
            <h1 >Nombre de Evento</h1>

            <div className="div-default">
                <div className="fecha">
                    <b><h3>Fecha: dd/mm/aaaa - dd/mm/aaaa</h3></b>
                </div>
                
            </div>

            <b><h3>Categoría:</h3></b>
            <div className="div-default">
                <div className="categoria-1">Categoría 1</div>
                <div className="categoria-2">Categoría 2</div>
            </div>

            <div className="div-default">
                <p>Descripción del evento</p>
            </div>

            <b><h3>Comentarios:</h3></b>
            <div className="div-comentarios">
                <div className="comentario">Comentario1</div>
                <div className="form">
                    <Input placeholder='Nuevo Comentario'  width= '90%' borderColor={'black'} marginRight={'2%'} />
                    <Button variant='outline' borderColor={'black'} backgroundColor={'gray.300'}>Enviar</Button>
                </div>
            </div>


        </div>
    </div>
  )
}
