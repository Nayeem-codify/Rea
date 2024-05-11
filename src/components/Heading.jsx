import React from 'react'

const Heading = ({title,nayeemstyle,fullform}) => {
  return (
   <h1 title={fullform} className={nayeemstyle}>{title}</h1>
  )
}

export default Heading
