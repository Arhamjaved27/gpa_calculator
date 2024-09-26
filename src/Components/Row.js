import React from 'react'
import App from '../App';


import { useState } from 'react'
import { useEffect } from 'react';

export default function Row({catchValue},props) {
    const [gradePoints, setGradePoints] = useState('0.0');
    // const indGpa = 0;
    const [selectedCradit, setSelectedCradit] = useState('0');
    const [selectedGrade, setSelectedGrade] = useState('0');

    var  flag1, flag2 =0;
    
    const bothValueCheck = ()=>{
        if(flag1 === 0 && flag2 ===0)
        {
            console.log("Not Both Value is Selected");
        }
        else
        {
            setGradePoints(selectedCradit* gpaPoints(parseInt(selectedGrade, 10))); //setting Overall Grade pOints        
            catchValue(parseInt(gradePoints, 10));
        }
    }


    const gpaPoints= (grad)=>{
        var points = 0;
        if(grad === 1)
        {
            points=4.00;
        }
        else if(grad === 2)
        {
            points=3.66;
        }
        else if(grad === 3)
        {
            points=3.33;
        }
        else if(grad === 4)
        {
            points=3.00;
        }
        else if(grad === 5)
        {
            points=2.66;
        }
        else if(grad === 6)
        {
            points=2.33;
        }
        else if(grad === 7)
        {
            points=2.00;
        }
        else if(grad === 8)
        {
            points=1.66;
        }
        else if(grad === 9)
        {
            points=1.33;
        }
        else if(grad === 10)
        {
            points=1.0;
        }
        else
        {
            points=0;
        }
        
        return points;
    }


   
    useEffect(() => {
        // console.log("selectedCradit updated:", selectedCradit);
      }, [selectedCradit]); // This will log the updated state whenever it changes.

      useEffect(() => {
        // console.log("setSelectedGrade updated:", selectedGrade);
      }, [selectedGrade]); // This will log the updated state whenever it changes.


    const handleCradit= (event)=>{
        var subTotal = 0;
        const value = parseInt(event.target.value, 10);  //getting value from onchange handler using evnet object
        setSelectedCradit(value); //seting value of cradit hours to state Variable usint thair function

        console.log("Cradit hourse ", selectedCradit, value);
        flag1 =1;
        bothValueCheck();

    }
    const handleGrade= (event)=>{
        const value = event.target.value;  //getting value from onchange handler using evnet object
        setSelectedGrade(value); //seting value of cradit hours to state Variable usint thair function
        flag2 =1;     
    }
   

  return (
    <tr> 
        <th scope="row">{props.rownumber}</th> 
        <td >
            <div> 
                <select className="form-select p-1  " id="CraditSelect" value={selectedCradit} onChange={handleCradit}>
                    <option selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </td>
        <td >
            <div> 
                <select className="form-select p-1 " id="GradeSelect" value={selectedGrade} onChange={handleGrade}>
                    <option selected>0</option>
                    <option value="1">A+</option>
                    <option value="2">A</option>
                    <option value="3">B+</option>
                    <option value="4">B</option>
                    <option value="5">B-</option>
                    <option value="6">C+</option>
                    <option value="7">C</option>
                    <option value="8">C-</option>
                    <option value="9">D+</option>
                    <option value="10">D</option>
                    <option value="11">F</option>

                </select>
            </div>
        </td>
        
        <td>{selectedCradit}</td>
        <td>{selectedCradit* gpaPoints(parseInt(selectedGrade, 10))}</td>
    </tr>
  )

}
