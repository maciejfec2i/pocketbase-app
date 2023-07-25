import React from 'react'
import Author from './Author'

export default function Authors(props) {  

  return (
    props.authors.map(author => {
      return <Author key={crypto.randomUUID()} author={author} selectedAuthor={props.selectedAuthor} />
    })
  )
}
