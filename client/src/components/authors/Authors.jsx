import React from 'react'
import Author from './Author'

export default function Authors(props) {  

  return (
    props.authors.map(author => {
      return <Author author={author} key={crypto.randomUUID()} />
    })
  )
}
