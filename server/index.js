const express = require("express")
const app = express()
const port = 3001
const messages = require("./controllers/message_controller")

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', messages.create)
// posting a message - create

app.get('/api/messages', messages.read)
// get what already exists - read

app.put('/api/messages/:id', messages.update)
// updating a post 

app.delete('/api/messages/:id', messages.delete)
// deleting a post



app.listen(port, () => {
    console.log('listening to the port', port)
}) 