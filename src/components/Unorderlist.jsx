import React from 'react'

const Unorderlist = ({children , ulstyle}) => {
// console.log(children);

  return (
    <ul className={ulstyle}>
      {children}
    </ul>
  )
}

export default Unorderlist
