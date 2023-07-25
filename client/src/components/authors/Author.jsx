import React from 'react'
import { titleCase } from 'title-case'

export default function Author(props) {

  const authorName = titleCase(props.author.fullname)

  return (
    <option value={props.author.id}>{authorName}</option>
  )
}
