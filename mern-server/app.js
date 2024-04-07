require('dotenv').config()


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const createBookRouter = require('./routes/create_books')
const createPlantsRouter = require('./routes/create_plants')
const createDepartmentRouter = require('./routes/create_department')
const createEmployeeRouter = require('./routes/create_employee')

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use('/api', createBookRouter)
app.use('/plants', createPlantsRouter)
app.use('/department', createDepartmentRouter)
app.use('/employee', createEmployeeRouter)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is  Running  on - http://localhost:${port}`)
})