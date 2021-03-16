import React from 'react'
import {  Button } from 'react-native'



function executar(){
    console.warn("Executado 1")
}
export default props =>{
    return(
        <React.Fragment>
        <Button title ="Executar 1" onPress={executar}></Button>
        <Button title ="Executar 2" onPress={function(){
            console.warn("Executado 2")
        }}></Button>
        <Button title ="Executar 3" onPress={() =>
            console.warn("Executado 3")
        }></Button>
        </React.Fragment>
    )
    
}