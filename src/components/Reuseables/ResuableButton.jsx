import React from 'react'
import { Button } from "@/components/ui/button"


const ReuseableButton = ({text, classStyle, onClick, icon}) => {
  
  return (
    <div>
      <Button className={`${classStyle}`} onClick={onClick}>{icon && icon} {text}</Button>
    </div>
  )
}

export default ReuseableButton