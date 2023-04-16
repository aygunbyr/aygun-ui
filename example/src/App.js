import React from 'react'

import { Button } from 'aygun-ui'
import 'aygun-ui/dist/index.css'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return (
    <>
      <div className='main'>
        <Button text='Primary Button' type='primary' />
        <Button text='Default Button' />
        <Button text='Dashed Button' type='dashed' />
        <Button text='Text Button' type='text' />
        <Button text='Link Button' type='link' />
      </div>
    </>
  )
}

export default App
