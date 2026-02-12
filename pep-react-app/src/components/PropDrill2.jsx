import React from 'react'

function Box({children}){
    return(
        <div style={{border: '2px solid black', padding: '20px', margin: '10px'}}>
            {children}
        </div>
    )
}

const PropDrill2 = () => {
  return (
    <div>
      <Box>
        <h1>Hello from box</h1>
        <p>Para of box</p>
      </Box>
    </div>
  )
}

export default PropDrill2
