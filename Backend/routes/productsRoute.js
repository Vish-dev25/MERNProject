const express = require("express");
const router = express.Router();
const Product = require('../models/productsModel');

router.get('/all', async(req,res) => {
        const products =  await Product.find()
        res.json(products);
    
});

router.post('/add', async(req,res) => {
    const products =  new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        supplier: req.body.supplier,
        quantity: req.body.quantity,
        status : req.body.status      
    })
       try{
        const p1 = await products.save()
        res.json(p1);
       }catch(err){
           res.send({"error": err});
       }

});

router.get('/:id', async(req,res) =>{
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)

    }catch(err){
        res.send('Error' + err)
    }
})

router.delete('/delete/:id', async(req,res) =>{
    try{
        const product = await Product.findById(req.params.id)      
        const p1 = await product.remove()
        res.json(p1)
        }
        catch(err){
            {
                res.send('Error')
        }
    }
}
)

router.put('/update/:id', async(req,res) =>{
    Product.findOneAndUpdate({_id:req.params.id},req.body).then(function(result)
    {
        Product.findOne({_id:req.params.id}).then(function(result)
        {
            res.send(result);
        })
    })
}
)
module.exports = router