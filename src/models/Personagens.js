const mongoose = require('mongoose')
const paginacao = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
  nome:{
    type: String,
    required: true,
  },
  casa:{
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now 
  }
})

mongoose.plugin(paginacao)

mongoose.model('Personagens', UserSchema);