const veiculos = [];

module.exports = {
  getAll: (req, res) => {
    res.status(200).json(veiculos);
  },

  getById: (req, res) => {
    const id = parseInt(req.params.id);
    const veiculo = veiculos.find((v) => v.id === id);
    if (veiculo) {
      res.status(200).json(veiculo);
    } else {
      res.status(404).json({ message: "Veículo não encontrado" });
    }
  },

  create: (req, res) => {
    const { modelo, placa } = req.body;
    const id = veiculos.length + 1;
    const novoVeiculo = { id, modelo, placa };
    veiculos.push(novoVeiculo);
    res.status(201).json(novoVeiculo);
  },

  update: (req, res) => {
    const id = parseInt(req.params.id);
    const { modelo, placa } = req.body;
    const veiculo = veiculos.find((v) => v.id === id);
    if (veiculo) {
      veiculo.modelo = modelo || veiculo.modelo;
      veiculo.placa = placa || veiculo.placa;
      res.status(200).json(veiculo);
    } else {
      res.status(404).json({ message: "Veículo não encontrado" });
    }
  },

  remove: (req, res) => {
    const id = parseInt(req.params.id);
    const index = veiculos.findIndex((v) => v.id === id);
    if (index !== -1) {
      veiculos.splice(index, 1);
      res.status(200).json({ message: "Veículo removido com sucesso" });
    } else {
      res.status(404).json({ message: "Veículo não encontrado" });
    }
  },
};
