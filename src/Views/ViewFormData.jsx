import React from 'react'
import { useSelector } from 'react-redux'
import './ViewFormData.css'
import { useNavigate } from 'react-router-dom'
export default function ViewFormData() {
    const formData = useSelector((state)=> state.form)
    const navigate = useNavigate()
    console.log(formData)
    const data = formData[0]

    const goBack = () => {
        navigate('/')
    }
  return (
    <div class="card">
        <div class="card-header">
            Verify your Form Data
        </div>
        <div class="card-body">
            <h3>{data.full_name}</h3>
            <p>{data.age}</p>
            <p>{data.gender}</p>
            <p>{data.graduation}</p>
            <p>{data.primarySkills}</p>
            <p>{data.secondarySkills}</p>
        </div>
        <button onClick={()=> goBack()}> Back </button>
        <button> Submit to Database </button>
    </div>

  )
}
