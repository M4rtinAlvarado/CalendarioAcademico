"use client"
import React from "react";
import { useState } from "react";
import EventModal from "./EventModal"

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



    const handleFilter = (action) => {
        const searchWords = quitarTildes(action.target.value.toLowerCase()).split(' ').filter(Boolean);// .filter() es para eliminar espacios en blanco("")
        setWordInput()
        const newFilter = data.filter((value) => {
            const title = quitarTildes(value.title.toLowerCase());
            const description = quitarTildes(value.description.toLowerCase());
            return searchWords.some(word => title.includes(word) || description.includes(word));// .some() es para ver si alguna de las palabras en searchWords esta title o en description
        });

        setFilteredData(newFilter);
    };


    const handleOpen = (index) => {//Cambia el estado
        const updatedModals = [...openModals];// los 3 puntos son para copiar el array
        updatedModals[index] = !updatedModals[index];
        setOpenModals(updatedModals);
      };

    const clearInput =() => {
        setFilteredData([])
        setWordInput("")
    }

    return (
        
    <div className="search">
        <div className="searchInputs">
            <input type = "text" placeholder={placeholder} value={wordInput} onChange={handleFilter}/>
            <button className="clearBtn" onClick={clearInput}> X </button>
        </div>
        
        {filteredData.length != 0 &&(
        <div className="dataResult">
            {filteredData.map((value, key) =>{//value es un evento

                return(
                    <div key={key}>
                        <ul className="dataItem" onClick={() => handleOpen(key)}>
                            <p>{value.title}</p>
                        </ul>
                    <EventModal
                    isOpen={openModals[key]}
                    onClose={() => handleOpen(key)}
                    eventTitle={value.title}
                    eventStartDate={cambiarFormatoFecha(value.start)}
                    eventDescription={value.description}
                    eventEndDate={cambiarFormatoFecha(value.end || value.start)}
                    eventClassName={value.className}
                    eventSedes = {value.sede}
                    eventComentarios = {[]}
                    />
                </div>
                )
            })}
            
        </div>
        )}       
    </div>   
    );
    
}

export default SearchBar;