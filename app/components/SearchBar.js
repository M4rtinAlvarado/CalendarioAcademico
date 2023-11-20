import React from "react";
import { useState } from "react";
import { Input, Button, CloseButton} from '@chakra-ui/react'
import EventModal from "./EventModal"
import {useDisclosure} from '@chakra-ui/react'

import { FaSearch } from "react-icons/fa"
import { IoMdClose } from "react-icons/io";
import { Icon } from '@chakra-ui/react'


function quitarTildes(texto) {
    const tildes = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U' };
    return texto.replace(/[áéíóúÁÉÍÓÚ]/g, (match) => tildes[match]);
}

function cambiarFormatoFecha(fecha) {
    if (fecha) {
        const [yy, mm, dd] = fecha.split('-');
        const date = new Date(yy, mm - 1, dd);
        return `${dd}/${mm}/${yy}`;
    }
    return '';
}


function SearchBar({placeholder, data}) {
    const [filteredData,setFilteredData] = useState([])
    const [openModals, setOpenModals] = useState([]);
    const [wordInput, setWordInput] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [eventTitle, setEventTitle,] = useState("")
    const [eventStartDate, setEventStartDate] = useState("")
    const [eventID, setEventID] = useState("1")
    const [eventDescription, setEventDescription] = useState("")
    const [eventClassName, setEventClassName] = useState("")
    const [eventEndDate, setEventEndDate] = useState("")
    const [eventSedes, setEventSedes] = useState([])
    //const palabrasComunes = ['de', 'la', 'los', 'el', 'en', 'y', 'a', 'con', 'del', 'las', 'al', 'para', 'es', 'un', 'una', 'por', 'lo', 'su', 'como']



    const handleFilter = (action) => {
        const searchWords = quitarTildes(action.target.value.toLowerCase()).split(' ').filter(Boolean);
        setWordInput(action.target.value)

     const newFilter = data.map((value) => {
        const title = quitarTildes(value.title.toLowerCase());
        const description = quitarTildes(value.description.toLowerCase());

        let titleWordsCount = 0;
        for (const word of searchWords) {
            if (title.includes(word)) {
                titleWordsCount += 1;
            }
        }

        let descriptionWordsCount = 0;
        for (const word of searchWords) {
            if (description.includes(word)) {
                descriptionWordsCount += 1;
            }
        }
        return { ...value, titleWordsCount, descriptionWordsCount };//crea los campos titleWordsCount, descriptionWordsCount para value
    }).filter((value) => value.titleWordsCount > 0 && value.descriptionWordsCount > 0);

    // Ordenar primero por la cantidad de palabras coincidentes en el título y luego en la descripción
    newFilter.sort((a, b) => {
        if (b.titleWordsCount === a.titleWordsCount) {
            return b.descriptionWordsCount - a.descriptionWordsCount;
        }
        return b.titleWordsCount - a.titleWordsCount;
    });

    setFilteredData(newFilter);
};


    const handleOpen = (value) => {//Cambia el estado
        setEventTitle(value.title) 
        setEventStartDate(cambiarFormatoFecha(value.start))
        setEventEndDate(cambiarFormatoFecha(value.end || value.start))
        setEventClassName(value.className)
        setEventDescription(value.description)
        setEventSedes(value.sede)
        setEventID(value.id)
        onOpen()
      };
    

    const clearInput =() => {
        setFilteredData([])
        setWordInput("")
    }

    return (
        
    <div className="search">
        <div className="searchInputs">
            <input type = "text" placeholder={placeholder} value={wordInput} onChange={handleFilter}/>
       
                {wordInput === "" ? (
                    <Icon className="searchIcon" as={FaSearch} color={"black"}/>
                ) : (
                    <Icon className = "deleteIcon" as={IoMdClose} color={"red"} onClick={clearInput}/>
                )}

        </div>
        
        {filteredData.length != 0 &&(
        <div className="dataResult">
            {filteredData.map((value, key) =>{//value es un evento

                return(
                    <div key={key}>
                        <ul className="dataItem" onClick={() => {handleOpen(value)}}>
                            <p>{value.title}</p>
                        </ul>
                    
                </div>
                )
            })}
            
        </div>
        )}      
        {isOpen ? (
        <EventModal 
          isOpen = {isOpen}
          onClose = {onClose}
          eventTitle = {eventTitle}
          eventStartDate = {eventStartDate}
          eventDescription = {eventDescription}
          eventClassName = {eventClassName}
          eventEndDate = {eventEndDate}
          eventSedes = {eventSedes}
          eventID ={ eventID}  
        />) : null}
    </div>   
    );
    
}

export default SearchBar;