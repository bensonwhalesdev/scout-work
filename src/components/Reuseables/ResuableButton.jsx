import React from 'react'
import { Button } from "@/components/ui/button"


const ReuseableButton = () => {
  function handleClick() {
    console.log('Hello world');
    
  }
  return (
    <div className="">
      <Button onClick={handleClick}>Click me</Button>
    </div>
  )
}

export default ReuseableButton