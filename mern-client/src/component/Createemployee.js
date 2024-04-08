import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Createemployee() {

    const navigate = useNavigate()

    const formFieldSet = {
        width: '300px',
        padding: '10px',
        margin: 'auto',
        borderRadius: '10px'
    }

    const [employeedata, setEmployeedata] = useState({
        'employee_name': '',
        'employee_email': '',
        'employee_Salary': '',
        'employee_Department': '',
        'employee_working_days': '',
        'employee_Apsent_days': '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEmployeedata({
            ...employeedata,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await axios.post('http://localhost:5000/employee/adddemployee', employeedata)
            navigate('/allemployee');

            console.log(response.data)

        } catch (error) {
            console.error(error)

        }
    }

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/department/Viewdepartment');
            setDepartments(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };



    return (
        <div>
            <fieldset style={formFieldSet}>
                <legend> Add employee</legend>
                <tr>
                    <td>Employee name</td>
                    <td>
                        <input type='text' name='employee_name' onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Employee email</td>
                    <td>
                        <input type='email' name='employee_email' onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Employee Slaary</td>
                    <td>
                        <input type='number' name='employee_Salary' onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>
                        <select name='employee_Department' onChange={handleInputChange}>
                            <option value=''>Select Department</option>
                            {departments.map(department => (
                                <option key={department._id} value={department._id}>{department.department_name}</option>
                            ))}
                        </select>

                    </td>
                </tr>
                <tr>
                    <td>Employee Working Days</td>
                    <td>
                        <input type='number' name='employee_working_days' onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Employee Apsent Days</td>
                    <td>
                        <input type='number' name='employee_Apsent_days' onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} align='center'>
                        <input type='button' value="Add Employee" name='AddEmployee' onClick={handleFormSubmit} />
                    </td>
                </tr>
            </fieldset>

            <a className='ms-4' href="/book">book</a><br></br>
            <a className='ms-4' href="/allbooks">allbooks</a><br></br>

            <a className='ms-4' href="/allemployee">employee</a>
        </div>
    )
}

export default Createemployee