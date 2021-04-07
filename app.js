'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hi.. Saya Jervin Descrates Kontessa, nim 51018013 jurusan Sistem Informasi di STMIK kharisma makassar\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
