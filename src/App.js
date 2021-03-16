import React from 'react'
import { View, StyleSheet } from 'react-native'
//import Primeiro  from './components/Primeiro'
//import CompPadrao,{Comp1,Comp2} from './components/Multi' 
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'
//import Frag from './components/Frag'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Pai from './components/direta/Pai'
import Pai from './components/indireta/Pai'

export default () => (

    <View style={style.App}>
        <Pai></Pai>

  { /*       <Contador valorInicial={100} passo={2}></Contador>

   <Botao></Botao>
        <Frag principal="Cadastro Produto" secundario="Tela de Cadastro do Produto "></Frag>
      
        <Aleatorio min={1} max={60}></Aleatorio>
        <Aleatorio min={1} max={60}></Aleatorio>
        <Aleatorio min={1} max={60}></Aleatorio>
        <Aleatorio min={1} max={60}></Aleatorio>
        <Aleatorio min={1} max={60}></Aleatorio>
        <Aleatorio min={1} max={60}></Aleatorio>
         
         <MinMax min ={3} max={30}></MinMax>
        <MinMax min ={1} max={20}></MinMax>
       
        <CompPadrao></CompPadrao>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro></Primeiro> */}
    </View>
    )

    const style = StyleSheet.create({
        App:{
           backgroundColor: 'gray',
          //permite pegar a tela toda flex / flexGrow
           flex: 1,
           justifyContent: "center",
           alignItems:"center",
           padding:20,

        }
    })