const UserModel = require('../models/UserModel');

function filterUser(filter){
  return  {[`${+filter ? 'id' : 'name'}`]: filter}
}

module.exports = {
  async index(req, res){
    const user = await UserModel.findAll();
    return res.json(user);
  },

  async show(req, res){
    const { filter } = req.params;
    const objFilter = filterUser(filter);
    const user = await UserModel.findOne({ where: objFilter });
    return res.json(user);
  },

  async store(req, res){
    const { name } = req.body;
    const user = await UserModel.create({name});
    return res.json(user);
  },

  async update(req, res){
    const { name } = req.body;
    const { id } = req.params
    const objFilter = filterUser(id);
    const user = await UserModel.update({ name }, { where: objFilter })
    return res.send(user);
  },

  async destroy(req, res){
    const { id } = req.params
    const user = await UserModel.destroy({ where: { id } })
    return res.json(user);
  }
}