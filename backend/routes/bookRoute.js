const express = require("express");
const router = express.Router()
const books = require("../models/bookmodel")

router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const bookModel = new books(data);
        await bookModel.save().then((res) => {
            res.status(200).json({ message: "Book Added Successfully" });
        })
    } catch (error) {
        console.log(error);
    }
});

router.get("/getbooks", async (req, res) => {
    let bookkk;
    try {
        bookkk = await bookModel.find();
        res.status(200).json({ bookkk })
    } catch (error) {
        console.log(error)
    }
})
router.get("/getbooks/:id", async (req, res) => {
    let bookk;
    const id = req.params.id;
    try {
        bookk = await bookModel.findById(id)
        res.status(200).json({bookk})
    } catch (error) {
        console.log(error)
    }
})

router.get("/updateBook",async (req, res)=>{
    const id = req.params.id;
    const {bookname, description,author, image, price}=req.body;
    try{
        await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price,
        })
    }catch(error){
        console.log(error)
    }
})

module.exports = router;