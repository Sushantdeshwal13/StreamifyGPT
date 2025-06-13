import React from 'react'
import Body from './components/Body'
import appstore from './utils/appstore'
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={appstore}>
      <Body/>
    </Provider>
  )
}

export default App
