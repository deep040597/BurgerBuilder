import React from 'react'
import './BuildControl.css'

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button className='More'>Increase</button>
        <button className='Less'>Decrease</button>
    </div>
)

export default buildControl