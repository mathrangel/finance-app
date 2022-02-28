const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const authRoutes = require('./src/routes/auth.routes')
app.use('/auth', authRoutes)

const userRoutes = require('./src/routes/user.routes')
app.use('/user', userRoutes)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`)) 