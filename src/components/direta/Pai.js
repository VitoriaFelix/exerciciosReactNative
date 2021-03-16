import React from 'react'

import  Filho from './Filho'

export default props => {
    let x = 3
    let y = 10
    return(
        <>
        <Filho a={x} b={y}></Filho>
        <Filho a={x + 100} b={y + 200}></Filho>
        </>
    )
}