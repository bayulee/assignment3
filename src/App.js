import React from 'react'
import NavBar from "./component/NavBar"
import Todo from "./component/Todo"

function App() {
  let title="my first react app"
  return (
  <div>
    <NavBar title={title} />
    <main>
    <Todo title="learning react"datetime="23rd march 2022"/>
    <Todo title="premest training"datetime="2nd january 2022"/>
    <Todo title="going to market"datetime="3rd april 2022"/>
    <Todo title="writing exams"datetime="18th december 2022"/>
    <Todo title="depreciating cedis"datetime="4th october 2022"/>
    
 </main>
 
    </div>
  );
}

export default App;