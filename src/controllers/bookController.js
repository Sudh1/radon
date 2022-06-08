const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooksList= await BookModel.find( )  
    res.send({msg: allBooksList})
}


const bookList= async function (req, res) {
  let allBooks= await BookModel.find( ).select({bookName:1,authorName:1,_id:0})  
  res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {
  let yearList= await BookModel.find({year:req.body.year} ).select({bookName:1,_id:0})  
  res.send({msg: yearList})
}

const particularBooks = async function (req,res) {
  let specificBooks = await BookModel.find(req.body)
  res.send({msg:specificBooks})
} 

const priceDetails= async function (req,res) {
  let bookPrice = await BookModel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500 INR"]}} ).select({bookName:1,_id:0})
  res.send({ msg: bookPrice })
}

const randomBooks= async function(req, res) {
  let booksList = await BookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 250}}]})
  res.send({msg: booksList })
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.particularBooks=particularBooks
module.exports.priceDetails= priceDetails
module.exports.randomBooks=randomBooks