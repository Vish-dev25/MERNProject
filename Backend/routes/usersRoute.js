const express = require("express");
const router = express.Router();
const User = require('../models/usersModel');

router.get('/all', async(req,res) => {
    const users =  await User.find()
    res.json(users);

});

router.post('/add', async(req,res) => {
    const users =  new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin,
        status: req.body.status
      
    })
       try{
        const u1 = await users.save()
        res.json(u1);
       }catch(err){
           res.send("Error")
       }

});

router.get('/:id', async(req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        res.json(user)

    }catch(err){
        res.send('Error' + err)
    }
})

router.delete('/delete/:id', async(req,res) =>{
    try{
        const user = await User.findById(req.params.id)      
        const u1 = await user.remove()
        res.json(u1)
        }
        catch(err){
            {
                res.send('Error')
        }
    }
}
)
router.put('/update/:id', async(req,res) =>{
    User.findOneAndUpdate({_id:req.params.id},req.body).then(function(result)
    {
        User.findOne({_id:req.params.id}).then(function(result)
        {
            res.send(result);
        })
    })
}
)

module.exports = router


