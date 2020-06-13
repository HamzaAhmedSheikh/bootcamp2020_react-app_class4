import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

export default function Counter (props) {
    return (
    <div>
      <h3 className='text-center mt-3'> Value of counter is: {props.counter} </h3>
    </div>
    )  
}