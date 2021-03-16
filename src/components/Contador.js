import React, {useState} from 'react'
import {  Button, Text  } from 'react-native'
import Estilo from './estilo'

export default props =>{
   // let numero =props.valorInicial
   const [numero, setNumero]=useState(props.valorInicial)
  const inc = () => setNumero(numero + props.passo)
  const dec = () => setNumero(numero - props.passo)
    return(
        <>
        <Text style={Estilo.textoGrande}>{numero}</Text>
        <Button title="+" onPress={inc}></Button>
        <Button title="-" onPress={dec}></Button>
        </>
    )
}