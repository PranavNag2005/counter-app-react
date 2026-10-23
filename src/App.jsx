import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ProfileCard from './components/Profilecard'
import ProfileCard2 from './components/Profilecard2'

const people = [
  { id: 1, name: "Asha", role: "Designer",age:33,location:"ongole",skills:["html","css","js"],featured:true },
  { id: 2, name: "Ravi", role: "Developer",age:22,location:"hyderabd" },
  { id: 3, name: "Meera", role: "Manager",age:33,location:"banglaore" },
];
function App() {
  
  return(
    
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <ProfileCard/>
      </div>

      <div className="card">
        <ProfileCard2 name="vamsi" age={22} location="india"/>
      </div>

      {people.map(person => <ProfileCard2 name={person.name} age={person.age} location={person.location} skills={person.skills} featured={person.featured}/>)}
      
    </div>




  )
 
}

export default App
