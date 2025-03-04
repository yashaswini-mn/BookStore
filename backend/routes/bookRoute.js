const express = require("express");
const router = express.Router()
const books = require("../models/bookmodel")

//POSTBOOK

router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        let bookModel = new books(data);
        await bookModel.save().then((res) => {
            res.status(200).json({ message: "Book Added Successfully" });
        })
    } catch (error) {
        console.log(error);
    }
});

//GETBOOKS

router.get("/getbooks", async (req, res) => {
    let bookkk;
    try {
        bookkk = await books.find();
        res.status(200).json({ bookkk })
    } catch (error) {
        console.log(error)
    }
})

//GETBOOKS BY ID

router.get("/getbooks/:id", async (req, res) => {
    let bookk;
    const id = req.params.id;
    try {
        bookk = await books.findById(id)
        res.status(200).json({ bookk })
    } catch (error) {
        console.log(error)
    }
})

//UPDATE BOOK BY ID

router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    let book;
    try {
        book = await books.findByIdAndUpdate(id, {
            bookname,
            description,
            author,
            
            image,
            price,
        });
        await book.save().then(() => res.send(200).json({ message: "Data updated successfully" }))
        // await book.save().then(()=>res.json({book}))
    } catch (error) {
        console.log(error)
    }
})

//DELETE BOOK BY ID

router.delete("/deleteBooks/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await books.findByIdAndDelete(id).
            then(() =>
                res.status(200).json({ message: "Book deleted successfully" }
                ))
    } catch (error) {
        console.log(error)
    }

})
module.exports = router;