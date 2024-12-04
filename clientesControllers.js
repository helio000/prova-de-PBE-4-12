const clientes = [];

module.exports = {
  getAll: (req, res) => {
    res.status(200).json(clientes);
  },

  getById: (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find((c) => c.id === id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: "Cliente não encontrado" });
    }
  },

  create: (req, res) => {
    const { nome, email } = req.body;
    const id = clientes.length + 1;
    const novoCliente = { id, nome, email };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
  },

  update: (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;
    const cliente = clientes.find((c) => c.id === id);
    if (cliente) {
      cliente.nome = nome || cliente.nome;
      cliente.email = email || cliente.email;
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: "Cliente não encontrado" });
    }
  },

  remove: (req, res) => {
    const id = parseInt(req.params.id);
    const index = clientes.findIndex((c) => c.id === id);
    if (index !== -1) {
      clientes.splice(index, 1);
      res.status(200).json({ message: "Cliente removido com sucesso" });
    } else {
      res.status(404).json({ message: "Cliente não encontrado" });
    }
  },
};
