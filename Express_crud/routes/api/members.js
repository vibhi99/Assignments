const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

//Gets all Members
router.get('/', (req, res) => {
    res.json(members);
});

//Gets Single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));

    }else{
        res.status(400).json({msg: `No member with id of ${req.params.id}`});
    }
});

//Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        roll_number: req.body.roll_number,
        name: req.body.name,
        status: 'active'
    }

    if (!newMember.roll_number || !newMember.name){
        return res.status(400).json({msg: 'Please include roll number and name'});
    }

    members.push(newMember);
    res.json(members);

});


// Update Members
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.roll_number = updMember.roll_number ? updMember.roll_number : member.roll_number;
                member.name = updMember.name ? updMember.name : member.name;

                res.json({msg:'Member Updated', member});
            }
        });
    }else{
        res.status(400).json({msg: `No member with id of ${req.params.id}`});
    }
});


//Delete Member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: 'Member Deleted', 
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });

    }else{
        res.status(400).json({msg: `No member with id of ${req.params.id}`});
    }
});
module.exports = router;