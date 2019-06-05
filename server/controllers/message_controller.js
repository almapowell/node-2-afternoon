let id = 0
let messages = []

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body
        id++
        messages.push({id, text, time})
        res.status(200).send(messages)
    },


    read: (req, res) => {
        res.status(200).send(messages)
    },


    update: (req, res) => {
        let { text } = req.body
        let updateId = req.params.id
        let messageIndex = messages.findIndex(message => +message.id === +updateId)
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages)
    },


    delete: (req, res) => {
        let { id } = req.params
        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1)

        res.send(messages)
    }
}