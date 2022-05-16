import React, { useState } from 'react'

const Counterpage = () => {
    var [counter,setConter]=useState(0)
    const counterIncr = () => {
        setConter(
            counter+1
        )
        
    }
    const counterDecr = () => {
        setConter(
            counter-1
        )
        
    }
  return (
    <div>
        
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label"><h1>{counter}</h1></label>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button class="btn btn-success" onClick={counterIncr}>INCREMENT</button>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button class="btn btn-success" onClick={counterDecr}>DECREMENT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Counterpage