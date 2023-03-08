import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 4 linhas de import que vão trazer elementos de outros arquivos.


ReactDOM.createRoot(document.getElementById('root')).render( //Criando o elemento de react na raiz da pagina...
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
