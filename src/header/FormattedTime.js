import React, { useState, useEffect } from 'react'

const FormattedTime = () => {
  const [time, setTime] = useState(new Date())

  const establishTime = () => 
    setInterval(() => setTime(new Date()), 1000)
  
  useEffect(() => {
    establishTime()
  })  
    
  return(
    <div>
      {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
    </div>
  ) 
}

export default FormattedTime