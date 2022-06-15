import React from 'react'
import estilos from "./Cabecera.module.css"


export default function Cabecera({cantidad}) {
  
  return (
    <header  className={estilos.encabezado}>
        <h1 className={estilos.titulo}>Carrito de compras</h1>
        <p >cantidad de productos <span className={estilos.descripcion}>{cantidad}</span></p>
    </header>
  )
}
