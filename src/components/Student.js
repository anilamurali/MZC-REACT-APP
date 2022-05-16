import React, { useState } from 'react'

const Student = () => {
    var [name,setName]=useState("Anila Murali")
    var [age,setAge]=useState("24")
    var [college,setCollege]=useState("Mount Zion")
    const changeName = () => {
        setName(
            name="Vasu"  

        )
        setAge(
            age="24"

        )
        setCollege(
            college="MZC"
        )
    }
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label for="" class="form-label">Name<br/>{name}</label>
                </div>
                <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label for="" class="form-label">Age<br/>{age}</label></div>
                <div class="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                    <label for="" class="form-label">College<br/>{college}</label></div>
                </div>
                <div class="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                    <button class="btn btn-success" onClick={changeName}>Change</button>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Student