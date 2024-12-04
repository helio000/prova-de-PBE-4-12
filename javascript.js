const express = require('express');
const router = express.Router();
const clientesController = require('controllers/clientesController');
const professoresController = require('controllers/professoresController');
const telefonesController = require('controllers/telefonesController');
const veiculosController = require('controllers/veiculosController');


router.get('clientes', clientesController.getAll);
router.get('clientes', clientesController.getById);
router.post('/clientes', clientesController.create);
router.put('clientes', clientesController.update);
router.delete('clientes', clientesController.remove);


router.get('professores', professoresController.getAll);
router.get('professores', professoresController.getById);
router.post('professores', professoresController.create);
router.put('professores', professoresController.update);
router.delete('professores', professoresController.remove);


router.get('telefones', telefonesController.getAll);
router.post('telefones', telefonesController.create);
router.put('telefonesid', telefonesController.update);
router.delete('telefones', telefonesController.remove);


router.get('veiculos', veiculosController.getAll);
router.get('veiculos', veiculosController.getById);
router.post('veiculos', veiculosController.create);
router.put('veiculos', veiculosController.update);
router.delete('veiculos', veiculosController.remove);

module.exports = router;
