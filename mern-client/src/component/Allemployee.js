import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Allemployee() {

    const [employeedata, setEmployeedata] = useState([])

    const getemployee = async () => {
        try {
            await axios.get('http://localhost:5000/employee/viewemployee')
                .then(response => {
                    setEmployeedata(response.data)
                })
        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        getemployee()
    }, [])




    return (
        <div>
            <div>
                <h1 align='center'>All employee</h1>

                <table border={1} align='center'>
                    <tr>
                        <td>Employee Name</td>
                        <td>Employee Email</td>
                        <td>Employee Salary</td>
                        <td>Employee Department</td>

                        <td>Action</td>
                    </tr>
                    {
                        employeedata.map(employee => (
                            <tr>
                                <td>{employee.employee_name}</td>
                                <td>{employee.employee_email}</td>
                                <td>{employee.employee_Salary}</td>
                                <td>{employee.employee_Department}</td>

                                <td>
                                    <a href={`/calulatesalary/${employee._id}`}>Calculatesalary</a>
                                </td>


                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Allemployee