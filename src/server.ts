import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.json({
            message: "Hello world!",
        })
})

app.listen(PORT, () => {
    console.log(`Server runnig in port: ${PORT}`)
})