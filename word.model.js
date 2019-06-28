const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc_1:ABC123456@databasenode-fx0di.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true , useCreateIndex: true});

const Word = mongoose.model('Word', { 
    en : {type : String , require : true , trim : true , unique : true},
    vn : {type : String , require : true , trim : true },
    isMemorized : {type : Boolean , require : true , default : false},
});

//SELECT 
// Word.find({})
// .then(words => console.log(words))

//INSERT 
// const newword = new Word({en : "Five" , vn : "Năm"})
// newword.save()
// .then(w => console.log(w))
// .catch(error => console.log(error.message))

//UPDATE
Word.findByIdAndUpdate("5d15fca8c06d1b04571adb78",{isMemorized : false} , {new : true})
.then(w => console.log(w))
.catch(error => console.log(error.message))