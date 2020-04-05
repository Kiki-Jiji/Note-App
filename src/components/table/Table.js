import React, { Component } from 'react'

const TableHead = () => {
      return (
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
      )
    }

const TableBody = props => {
  const rows = props.characterData.notes.map((row, index) => {
    return (
      <tr key= {index}>
        <td> {row.name} </td>
        <td> {row.job} </td>
        <td>
          <button onClick = { () => props.removeNote(index) }>Delete </button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>

}

const Table = props => {

  const { character, removeNote } = props



    return (
      <table>
      <TableHead />
      <TableBody characterData = {character} removeNote = {removeNote}/>
      </table>
    )


}


export default Table
