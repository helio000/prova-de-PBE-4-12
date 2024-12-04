const telefones = [];

module.exports = {
  getAll: (req, res) => {
    res.status(200).json(telefones);
  },

  create: (req, res) => {
    const { numero, tipo } = req.body;
    const id = telefones.length + 1;
    const novoTelefone = { id, numero, tipo };
    telefones.push(novoTelefone);
    res.status(201).json(novoTelefone);
  },

  update: (req, res) => {
    const id = parseInt(req.params.id);
    const { numero, tipo } = req.body;
    const telefone = telefones.find((t) => t.id === id);
    if (telefone) {
      telefone.numero = numero || telefone.numero;
      telefone.tipo = tipo || telefone.tipo;
      res.status(200).json(telefone);
    } else {
      res.status(404).json({ message: "Telefone não encontrado" });
    }
  },

  remove: (req, res) => {
    const id = parseInt(req.params.id);
    const index = telefones.findIndex((t) => t.id === id);
    if (index !== -1) {
      telefones.splice(index, 1);
      res.status(200).json({ message: "Telefone removido com sucesso" });
    } else {
      res.status(404).json({ message: "Telefone não encontrado" });
    }
  },
};
