import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetail = () => {
    const {id}=useParams();
  return (
    <div>RestaurantDetail for {id}</div>
  )
}

export default RestaurantDetail