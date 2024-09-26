import React from 'react'
import { useState } from 'react'

export default function Row(props) {
    const [gradePoints, setGradePoints] = useState('0.0');

    // const indGpa = 0;
    const [selectedCradit, setSelectedCradit] = useState('0');
    const [selectedGrade, setSelectedGrade] = useState('0');
    
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
        
        
        console.log(points); 
        console.log(typeof(points)); 
        return points;
    }

    const handleCradit= (event)=>{
        var subTotal = 0;
        const value = parseInt(event.target.value, 10);  //getting value from onchange handler using evnet object
        setSelectedCradit(value); //seting value of cradit hours to state Variable usint thair function
        // subTotal = value * parseInt(selectedGrade, 10)
        
    }
    const handleGrade= (event)=>{
        const value = event.target.value;  //getting value from onchange handler using evnet object
        setSelectedGrade(value); //seting value of cradit hours to state Variable usint thair function

        // const sub = parseInt(gpaPoints(selectedGrade), 10);
        console.log(gpaPoints(parseInt(selectedGrade, 10)));
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
        <td>{selectedGrade}</td>
    </tr>
  )
}
