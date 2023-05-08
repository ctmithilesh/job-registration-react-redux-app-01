import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './index.css'
import { setFormData } from '../../actions/setFormData';
export default function JobRegistrationForm() {


    const formErrors = {
        color:`Red`
    }

    // Local State 
    const [full_name,setName] = useState()
    const [age,setAge] = useState()
    const [gender,setGender] = useState()
    const [graduation,setGraduation] = useState()
    const [masters,setMasters] = useState()
    const [primarySkills,setPrimarySkills] = useState()
    const [secondarySkills,setSecondarySkills] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // register - needed for validation

    const handleInputChange = (e) =>{
        
        const target = e.target
        const name = target.name 
        const value = target.value 
        console.log(value)
        if(name === 'full_name'){
                setName(value)
        }
        if(name === 'age'){
            setAge(value)
        }
        if(name === 'gender'){
            setGender(value)
        }
        if(name === 'graduation'){
            setGraduation(value)
        }
        if(name === 'masters'){
            setMasters(value)
        }
        if(name === 'primary_skills'){
            setPrimarySkills(value)
        }
        if(name === 'secondary_skills'){
            setSecondarySkills(value)
        }



    }
    const onSubmit = ()=> {
        // e.preventDefault()

        console.log(full_name,age,gender,graduation,masters, primarySkills,secondarySkills)
        const formData = { full_name, age, gender,graduation, masters, primarySkills,secondarySkills}
        setFormData(dispatch,formData)

        setTimeout(()=>{
            navigate('/view/details')
        }, 3000)
    }

  return (
    <div>
        <form  class="form" onSubmit={handleSubmit(onSubmit)}>
            <h1> Job Registration Form </h1>
            <div>
                <label>
                    Your Full Name 
                </label>
                <input
                    name="full_name"
                    type="text"
                    placeholder="Enter your Name"
                    onChangeCapture={handleInputChange}
                    {...register('full_name',{required:true})}
                />
                {errors.full_name && <span style={{...formErrors}}>Full Name  is required</span>}
            </div>
            <div>
             <label>
               Age
            </label>
        
            <input
                name="age"
                type="number"
                placeholder="Enter your Age"
                onChangeCapture={handleInputChange}
                {...register('age',{required:true})}
            />
                     {errors.age && <span style={{...formErrors}}>Age  is required</span>}
            </div>
            <div>
              <label>
               Gender
            </label>
            <select name="gender" onChangeCapture={handleInputChange}  {...register('gender',{required:true})}>
                <option value="">Please choose an option</option>
                <option value="Male">Male </option>
                <option value="Female">Female</option>
            </select>
            {errors.gender && <span style={{...formErrors}}>Gender  is required</span>}
            </div>
            <div>
             <label>
                Your Graduation Details 
            </label>
            <select name="graduation" onChangeCapture={handleInputChange} {...register('graduation',{required:true})}>
                <option value="">Please choose an option</option>
                <option value="BCOM">BCOM</option>
                <option value="BSCIT">BSCIT</option>
                <option value="BTECH">BTECH</option>
                <option value="BA">BA</option>
            </select>
            {errors.graduation && <span style={{...formErrors}}>Graduation  is required</span>}
            </div>
            <div>
             <label>
                Your Masters Details 
            </label>
            <select name="masters" onChangeCapture={handleInputChange} {...register('masters',{required:true})}>
            <option value="">Please choose an option</option>
                <option value="MCOM">MCOM</option>
                <option value="MSCIT">MSCIT</option>
                <option value="MTECH">MTECH</option>
                <option value="MA">MA</option>
            </select>
            {errors.masters && <span style={{...formErrors}}>Masters  is required</span>}
            </div>
            <div>
            <label>
                Your Primary Skills 
            </label>
            <select name="primary_skills" onChangeCapture={handleInputChange}  {...register('primary_skills',{required:true})}>
            <option value="">Please choose an option</option>
                <option value="Coding">Coding</option>
                <option value="Communication">Communication</option>
                <option value="DevOps">DevOps</option>
                <option value="Backend Development">Backend Development</option>
                <option value="Frontend Development">Frontend Development</option>
            </select>
            {errors.primary_skills && <span style={{...formErrors}}>Primary Skills  is required</span>}
            </div>
            <div>
            <label>
                Your Secondary Skills 
            </label>
            <select name="secondary_skills" onChangeCapture={handleInputChange} {...register('secondary_skills',{required:true})}>
                <option value="">Please choose an option</option>
                <option value="Sales">Sales</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Public Speaking Skills">Public Speaking Skills</option>
            </select>
            {errors.secondary_skills && <span style={{...formErrors}}>Secondary Skills  is required</span>}
            </div>
            <button type="submit">
                Submit 
            </button>
            </form>
    </div>
  )
}
