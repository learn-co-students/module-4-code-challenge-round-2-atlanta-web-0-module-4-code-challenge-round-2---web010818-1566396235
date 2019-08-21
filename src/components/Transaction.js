import React from 'react'

const Transaction = (props) => {

  const { description, category, amount, posted_at} = props.tran
  return (
    <tr>
      <td>{posted_at}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction
