import React from 'react'
import { Button } from "@/components/ui/button"


const ReuseableButton = ({text, classStyle, onClick}) => {
  
  return (
    <div>
      <Button className={`${classStyle}`} onClick={onClick}>{text}</Button>
    </div>
  )
}

export default ReuseableButton