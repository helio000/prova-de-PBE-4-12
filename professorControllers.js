const professores = [];

module.exports = {
  getAll: (req, res) => {
    res.status(200).json(professores);
  },

  getById: (req, res) => {
    const id = parseInt(req.params.id);
    const professor = professores.find((p) => p.id === id);
    if (professor) {
      res.status(200).json(professor);
    } else {
      res.status(404).json({ message: "Professor não encontrado" });
    }
  },

  create: (req, res) => {
    const { nome, disciplina } = req.body;
    const id = professores.length + 1;
    const novoProfessor = { id, nome, disciplina };
    professores.push(novoProfessor);
    res.status(201).json(novoProfessor);
  },

  update: (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, disciplina } = req.body;
    const professor = professores.find((p) => p.id === id);
    if (professor) {
      professor.nome = nome || professor.nome;
      professor.disciplina = disciplina || professor.disciplina;
      res.status(200).json(professor);
    } else {
      res.status(404).json({ message: "Professor não encontrado" });
    }
  },

  remove: (req, res) => {
    const id = parseInt(req.params.id);
    const index = professores.findIndex((p) => p.id === id);
    if (index !== -1) {
      professores.splice(index, 1);
      res.status(200).json({ message: "Professor removido com sucesso" });
    } else {
      res.status(404).json({ message: "Professor não encontrado" });
    }
  },
};
