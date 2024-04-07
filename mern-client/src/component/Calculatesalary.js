import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Calculatesalary() {

    const { eid } = useParams()


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
        'totalsalary': '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEmployeedata({
            ...employeedata,
            [name]: value
        })
    }

    useEffect(() => {
        const getemployee = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/employee/singleemployee/${eid}`)
                setEmployeedata(response.data)

            } catch (error) {
                console.error(error);

            }
        }
        getemployee()
    }, [eid])



    const handleCalculateSalary = (e) => {
        e.preventDefault()

        try {
            const totaldays = employeedata.employee_working_days - employeedata.employee_Apsent_days;
            const totalsalary = employeedata.employee_Salary * totaldays

            // console.log(totalsalary)
            setEmployeedata({
                ...employeedata,
                totalsalary: totalsalary
            });


        } catch (error) {
            console.error(error)

        }
    }



    return (

        <div>
            <fieldset style={formFieldSet}>
                <legend> Add employee</legend>
                <tr>
                    <td>Employee name</td>
                    <td>
                        <input type='text' name='employee_name' value={employeedata.employee_name} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Employee email</td>
                    <td>
                        <input type='email' name='employee_email' value={employeedata.employee_email} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Employee Slaary</td>
                    <td>
                        <input type='number' name='employee_Salary' value={employeedata.employee_Salary} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>
                        <select name='employee_Department' value={employeedata.employee_Department} onChange={handleInputChange}>
                            <option value=''>Select Department</option>
                            <option value='php'>Php</option>
                            <option value='java'>java</option>
                            <option value='reactjs'>reactjs</option>

                        </select>
                    </td>
                </tr>
                <tr >
                    <td> Working Days</td>
                    <td>
                        <input type='number' name='employee_working_days' value={employeedata.employee_working_days} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td> Absent Days</td>
                    <td>
                        <input type='number' name='employee_Apsent_days' value={employeedata.employee_Apsent_days} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td>Totel Salary</td>
                    <td>
                        <input type='number' name='totalsalary' value={employeedata.totalsalary} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} align='center'>
                        <input type='button' value="Calculate Salary" name='Calculate Salary' onClick={handleCalculateSalary} />
                    </td>
                </tr>
            </fieldset>

        </div>

    )
}

export default Calculatesalary