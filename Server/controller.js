module.exports = {

    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(err => {
                res.status(500).send(inventory)
            })
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, price, img } = req.body
        
        dbInstance.add_inventory({ name, price, img })
            .then(inventory => res.status(200).send(inventory))
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.delete_inventory({id})
        .then(res.status(200).send())
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db')
        const productID = req.params.id
        console.log(req.body)

        res.status(200).send('testing')
    }

}
