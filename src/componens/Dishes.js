import React from "react";


const Dishes =(props)=>{
    console.log(props.meals)

    return (
        <>
        <div className="container">
<div className="row mt-5">
    {
        props.meals.map(el =>(
            <div className="col-4">
                <img src={el.img} alt="" className="w-75 n-50 my-5"/>
                <h4 className="text-primary">{el.title}</h4>
                <p className="text-secondary">{el.cuisine}</p>
                <span className="d-flex justify-content-between">
                    <p>{el.timeDelivery}</p>
                    <p className="text-danger">{el.cost}</p>
                </span>
            </div>
        ))
    }
</div>
        </div>


        </>


    )
}

export default Dishes