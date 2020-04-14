const UsersModel = require('../models/Users');
const {v4: idV4} = require('uuid');
const dba = [];

function filterUser(filterData, dba){
  const userFilter = dba.filter(user => {
    for(key in user){
      if(user[key] === filterData)
        return user[key] === filterData;
    } 
  });
  if(userFilter)
    return userFilter;
}

function findIndex(id, dba){
  const userIndex = dba.findIndex(user => user.id === id);
  return userIndex;
}

class UserController {
  
  // Mostrar 1 usuario
  show(req, res){
    const {filter} = req.params;
    const user = filterUser(filter, dba);
    return res.json(user);
  }

  // Mostrar todos os usuarios
  index(req, res){
    return res.json(dba);
  }

  // Criar Usuario;
  store(req, res){
    const {nome, idade} = req.body;
    const user = new UsersModel(idV4(), nome, idade);
    dba.push(user);
    return res.json(user);
  }

  // Editar Usuario
  update(req, res){
    const { id } = req.params;
    const {nome, idade} = req.body;
    const index = findIndex(id, dba);
    let dataUser = { id, nome, idade };
    let user = {}
    for(let key in dataUser){
      if(dataUser[key])
        user[key] = dataUser[key]
    }
    const newUser = {...dba[index], ...user};
    dba.splice(index, 1, newUser);
    return res.json(newUser);
  }

  // Deletar Usuario;
  destroy(req, res){
    const { id } = req.params;
    const index = findIndex(id, dba);
    dba.splice(index, 1);
    res.status(204).send();
  }
}

module.exports = new UserController();