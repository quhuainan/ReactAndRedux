import React from 'react'
import {view as Todos} from './todos/'
import { Filters} from './filter/'
console.log( Todos)
export default function TodoApp(){
    return(
        <div>
            <Todos/>
            <Filters/>

        </div>
    )
}