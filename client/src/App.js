import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './components/Layout';
import store from "./store";

const App = _ => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
