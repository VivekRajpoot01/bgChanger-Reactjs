# React Background Changer

This project is a simple React application that allows you to change the background color of the page by clicking on buttons.

## Project Structure

The main component of this project is `App`. This component maintains a state variable `color` which is used to set the background color of the page. There are several buttons, each representing a different color. When a button is clicked, the `color` state variable is updated, which in turn updates the background color of the page.

## Code

Here's the main code for the `App` component:

```jsx
import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')   // default background Color

  return (
    <div className ='w-full h-screen duration-200'
    style={{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className ="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" >
          <!-- Buttons for changing color go here -->
        </div>
      </div>
    </div>
  )
}

export default App
