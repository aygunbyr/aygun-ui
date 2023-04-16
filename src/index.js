import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type, text, ...rest }) => {
  return (
    <button className={styles[type]} {...rest}>
      {text}
    </button>
  )
}
