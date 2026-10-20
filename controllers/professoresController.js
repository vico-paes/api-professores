let professores = [
  {
    id: 1,
    nome: "Vinicius Paes Lima",
    idade: 30,
    departamento: "Computação",
    turmas: [
      { codigo: "1A", disciplina: "Programação Web", alunos: ["Ana", "Bruno", "Carlos"] },
      { codigo: "2B", disciplina: "Banco de Dados", alunos: ["Daniela", "Eduardo"] }
    ]
  },
  {
    id: 2,
    nome: "Maria Souza",
    idade: 45,
    departamento: "Matemática",
    turmas: [
      { codigo: "3C", disciplina: "Cálculo", alunos: ["Fernanda", "Gabriel"] }
    ]
  },
  {
    id: 3,
    nome: "João Pereira",
    idade: 38,
    departamento: "Computação",
    turmas: [
      { codigo: "4D", disciplina: "Estrutura de Dados", alunos: ["Helena", "Igor", "Julia"] }
    ]
  }
];

const listarProfessores = (req, res) => {
  res.json(professores);
};

const buscarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  res.json(professor);
};

const listarTurmas = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  res.json(professor.turmas);
};

const atualizarProfessor = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const { nome, idade, departamento, turmas } = req.body;

  if (nome !== undefined) professor.nome = nome;
  if (idade !== undefined) professor.idade = idade;
  if (departamento !== undefined) professor.departamento = departamento;
  if (turmas !== undefined) professor.turmas = turmas;

  res.json(professor);
};

const adicionarTurma = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const { codigo, disciplina, alunos } = req.body;
  const turma = { codigo, disciplina, alunos: alunos || [] };

  professor.turmas.push(turma);

  res.status(201).json(professor);
};

const listarPorDepartamento = (req, res) => {
  const departamento = req.params.departamento.toLowerCase();
  const resultado = professores.filter((p) => p.departamento.toLowerCase() === departamento);

  res.json(resultado);
};

const removerProfessor = (req, res) => {
  const id = parseInt(req.params.id);
  const index = professores.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  professores.splice(index, 1);

  res.json({ mensagem: "Professor removido com sucesso" });
};

module.exports = {
  listarProfessores,
  buscarPorId,
  listarTurmas,
  atualizarProfessor,
  adicionarTurma,
  listarPorDepartamento,
  removerProfessor
};
