import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className ='w-full h-screen duration-200'
    style={{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className ="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" >
          <button onClick = {() => setColor('red')}
          className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"red"}}  >Red</button>
          <button onClick={() => setColor('green')}
          className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"green"}} >Green</button>
          <button onClick={() => setColor('brown')}
          className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"brown"}} >brown</button>
          <button onClick={() => setColor('aqua')}
           className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"aqua"}} >Aqua</button>
          <button onClick={() => setColor('darkorchid')}
           className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"darkorchid"}} >Dark orchid</button>
          <button onClick={() => setColor('dimgrey')}
           className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"dimgrey"}} >Grey</button>
          <button onClick={() => setColor('gold')} 
           className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"gold"}} >Gold</button>
          <button onClick={() => setColor('magenta')}
           className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"magenta"}} >Magenta</button>
           <button onClick={() => setColor('black')}
           className=" outline-none px-4 py-1  rounded-full text-white shadow-lg " style={{backgroundColor:"black"}} >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
