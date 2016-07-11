var express = require('express');
var router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},
    {"id":2,"name":"Pez","color":"Green"},
    {"id":3,"name":"Marshmallow","color":"Pink"},
    {"id":4,"name":"Candy Stick","color":"Blue"}
]

// Root
router.get('/', (req, res) => {
    res.status(200).json(
        {
            api_version: 'v1.0.0', 
            posts: '/candies'
        });
})

/* GET home page. */
// INDEX '/'
router.get('/candies', (req, res) => {
    res.status(200).json(candies)
})

// Show action
router.get('/candies/:id', (req, res) => {
    res.status(200).json(candies[req.params.id-1])
})

// CREATE
router.post('/candies', (req, res) => {
    console.log(req.body);
    if (req.body.color === "hahah") {
        res.status(422).json({message: 'candy could not be created'})
    } else {
        res.status(201).json({message: 'candy created',
        id: req.body.id,
        name: req.body.name,
        color: req.body.color
        })
    }
    
    var candy = {
    id: parseInt(req.body.id),
    name: req.body.name,
    color: req.body.color
    }

  candies.push(candy);
})

// Update
router.put('/candies/:id', (req, res) => {
    res.status(200).json({ message: `candies${req.params.id} updated` })
})

// Delete/Destroy
router.delete('/candies/:id', (req, res) => {
    res.status(200).json({ message: `candies${req.params.id} deleted` })
})

module.exports = router;
