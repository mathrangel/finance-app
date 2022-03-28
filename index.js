const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const authRoutes = require('./src/routes/auth.routes')
app.use('/auth', authRoutes)

const userRoutes = require('./src/routes/user.routes')
app.use('/user', userRoutes)

const transactionRoutes = require('./src/routes/transactions.routes')
app.use('/transactions', transactionRoutes)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`)) 