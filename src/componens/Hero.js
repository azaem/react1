import React from "react";

const Hero = (props) => {
    console.log(props.recipes)
}
return (
    <div className="hero">
        <div className="container">
            <h1 className="hero-title"> </h1>
            {
                props.recipes.map((el, idx) => (
                    <div key={idx}>
                        <h3>{el.name}</h3>
                        <ul className="ingredients d-flex flex-column">
                            {
                                el.ingredients.map((el, idx) => (
                                    <>
                                        <li>{el.name}-{el.amount} {el.measurement}</li>

                                    </>

                                ))
                            }

                        </ul>

                    </div>
                ))
            }

        </div>
    </div>

)
 export default  Hero