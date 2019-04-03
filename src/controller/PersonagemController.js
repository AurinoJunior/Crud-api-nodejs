const mongoose = require('mongoose')

const Personagem = mongoose.model('Personagens')

module.exports = {
  async fetchAll(req, res) {
    // const page = req.query.page;
    const {page = 1} = req.query;
    console.log(req.query)
    const result = await Personagem.paginate({}, {page, limit:10});

    return res.json(result);
  },

  async fetchOne(req, res) {
    const result = await Personagem.findById(req.params.id)

    return res.json(result)
  },

  async update(req, res){
    const result = await Personagem.findByIdAndUpdate (req.params.id, req.body, {
      new:true, // volta o objeto alterado. 
    });

    return res.status(200).json(result)
  },

  async delete(req, res){
    await Personagem.findByIdAndRemove(req.params.id)

    return res.status(204).end()
  },

  async create (req, res){
    const result = await Personagem.create(req.body);

    return res.status(201).json(result)
  }
}