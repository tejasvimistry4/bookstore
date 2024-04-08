import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Allemployee() {


    const [employeedata, setEmployeedata] = useState([]);

    const getemployee = async () => {
        try {
            const response = await axios.get('http://localhost:5000/employee/viewemployee');
            setEmployeedata(response.data);
        } catch (error) {
            console.error('Error fetching employee data:', error.message);
        }
    };

    useEffect(() => {
        getemployee();
    }, []);

    return (
        <div>
            <div>
                <h1 align='center'>All employee</h1>
                <table border={1} align='center'>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Employee Salary</th>
                            <th>Employee Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeedata.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee.employee_name}</td>
                                <td>{employee.employee_email}</td>
                                <td>{employee.employee_Salary}</td>
                                <td>{employee.employee_Department ? employee.employee_Department.department_name : 'N/A'}</td>
                                <td>
                                    <a href={`/calculatesalary/${employee._id}`}>Calculate Salary</a>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Allemployee;
