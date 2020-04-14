const ProductModel = require("../models/Products");
const { v4: idV4 } = require("uuid");
const dba = [];

function filterProduct(filterData, dba) {
  const productFilter = dba.filter((product) => {
    for (key in product) {
      if (product[key] === filterData) return product[key] === filterData;
    }
  });
  if (productFilter) return productFilter;
}

function findIndex(id, dba) {
  const productIndex = dba.findIndex((product) => product.id === id);
  return productIndex;
}

class ProductController {
  // Mostrar 1 usuario
  show(req, res) {
    const { filter } = req.params;
    const product = filterProduct(filter, dba);
    return res.json(product);
  }

  // Mostrar todos os usuarios
  index(req, res) {
    return res.json(dba);
  }

  // Criar Usuario;
  store(req, res) {
    const { nome, preco } = req.body;
    const product = new ProductModel(idV4(), nome, preco);
    dba.push(product);
    return res.json(product);
  }

  // Editar Usuario
  update(req, res) {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const index = findIndex(id, dba);
    let dataproduct = { id, nome, preco };
    let product = {};
    for (let key in dataproduct) {
      if (dataproduct[key]) product[key] = dataproduct[key];
    }
    const newProduct = { ...dba[index], ...product };
    dba.splice(index, 1, newProduct);
    return res.json(newProduct);
  }

  // Deletar Usuario;
  destroy(req, res) {
    const { id } = req.params;
    const index = findIndex(id, dba);
    dba.splice(index, 1);
    res.status(204).send();
  }
}

module.exports = new ProductController();