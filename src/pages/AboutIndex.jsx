import React from 'react'
import { useParams } from 'react-router'

const AboutIndex = () => {
  let {id} = useParams();

  console.log(id)

  return (
    <div>AboutIndex id: {id}</div>
  )
}

export default AboutIndex