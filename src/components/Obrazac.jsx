
import { forwardRef } from "react";
import React from "react";
import Form from "./Form";


const Obrazac = forwardRef((props, ref) => {
    return (
        <div className="obrazac" ref={ref}>
            <Form /> 
        </div>                
    );
});
    
export default Obrazac;