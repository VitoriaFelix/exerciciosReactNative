import React from 'react'
import { Text, View } from 'react-native'
import  Estilo from './estilo'

export default props =>{
    return(
        <React.Fragment>
            <Text style={Estilo.textoGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>
    )
}