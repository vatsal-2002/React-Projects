import React from 'react'
import styles from './Button.module.css'

function Button({isOutLine, icon, text}) {
  return (
    <button className={isOutLine ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
