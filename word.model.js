const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc_1:ABC123456@databasenode-fx0di.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true , useCreateIndex: true,});

const Word = mongoose.model('Word', { 
    en : {type : String , require : true , trim : true , unique : true},
    vn : {type : String , require : true , trim : true },
    isMemorized : {type : Boolean , require : true , default : false},
});

Word.find({})
.then(words => console.log(words))
