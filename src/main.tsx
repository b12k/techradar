import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import { Radar } from './components'
import { data } from './data.mock';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div className='container'>
      <Radar {...data}/>
    </div>
  </StrictMode>,
)
