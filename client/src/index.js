import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ContextProvieder} from './SocketContext'
import './styles.css'



ReactDOM.render(<ContextProvieder><App /></ContextProvieder>
    ,document.getElementById("root"))