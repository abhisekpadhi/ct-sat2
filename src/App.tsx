import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import { get } from "cookie-toss";


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    get({
      iframeUrl: 'https://tosshub.netlify.app/',
      dataKey: 'chocolate-chip-oatmeal',
    }).then(res => {
      console.log(`get res: ${JSON.stringify(res)}`);
    }).catch(err => {
      console.log(`get err: ${JSON.stringify(err)}`);
    });
  }, [])

  return (
    <div className="App" />
  )
}

export default App
