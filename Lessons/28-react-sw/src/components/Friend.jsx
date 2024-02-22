import React from "react";
const Friend = ({picture, pos}) => {
  let styles = "col-4 p-1 "
  if (pos === 7) {
    styles +='bottomLeft'
  }
  if (pos === 9){
    styles += 'bottomRight'
  }
  return (
      <img className={styles} src={picture} alt="Friend"/>
  )
}

export default Friend