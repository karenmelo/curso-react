import './index.css'
import reactDom from 'react-dom'
import React from 'react'
import App from './App'
//uma forma de fazer criando uma constante
//const el = document.getElementById('root')
//ReactDOM.render('Olá React', el)

//outra forma de fazer sem criar a constante
//reactDom.render(<div>Olá React</div>, document.getElementById('root'))

//outra forma de brincar com JSX
//const tag = <strong>Olá React!</strong>
//reactDom.render(<div>{tag}</div>, document.getElementById('root'))


reactDom.render(
    <App />
    ,
    document.getElementById('root')
)