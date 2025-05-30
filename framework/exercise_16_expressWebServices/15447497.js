const express = require('express');
const app = express();
const PORT = 3000;

let db = {
  posts: [
    { id: 1, title: "O Futuro da Inteligência Artificial", content: "Uma análise das tendências que estão moldando o amanhã da IA.", author: "Marina Andrade" },
    { id: 2, title: "Como a Natureza Inspira Inovações Tecnológicas", content: "Descubra como cientistas se inspiram em animais e plantas para criar novas tecnologias.", author: "Carlos Mendes" },
    { id: 3, title: "Dicas para Manter o Foco em um Mundo Cheio de Distrações", content: "Técnicas práticas para aumentar sua produtividade diária.", author: "Fernanda Lima" },
    { id: 4, title: "Os Mistérios do Universo: Buracos Negros", content: "Entenda o que são buracos negros e por que eles intrigam tanto os cientistas.", author: "Lucas Silva" },
    { id: 5, title: "A Revolução dos Alimentos Plant-Based", content: "Como a alimentação vegana está transformando o mercado global.", author: "Juliana Costa" },
    { id: 6, title: "História da Arte: Do Renascimento à Arte Contemporânea", content: "Uma jornada pelas principais correntes artísticas da história.", author: "Beatriz Ramos" },
    { id: 7, title: "Como Começar a Investir com Pouco Dinheiro", content: "Dicas para dar os primeiros passos no mundo dos investimentos.", author: "André Pires" },
    { id: 8, title: "Minimalismo: Menos é Mais?", content: "Entenda como o estilo de vida minimalista pode trazer mais equilíbrio.", author: "Tatiane Freitas" },
    { id: 9, title: "Viagem pelo Brasil: Roteiros Incríveis Fora do Comum", content: "Conheça destinos pouco explorados, mas cheios de encanto.", author: "Rafael Oliveira" },
    { id: 10, title: "O Impacto das Redes Sociais na Saúde Mental", content: "Como o uso excessivo pode afetar nosso bem-estar psicológico.", author: "Laura Martins" },
    { id: 11, title: "Tendências de Moda Sustentável em 2025", content: "Marcas e estilos que estão liderando a moda consciente.", author: "Camila Torres" },
    { id: 12, title: "Programação para Iniciantes: Por Onde Começar?", content: "Os primeiros passos no mundo do código e da tecnologia.", author: "João Henrique" },
    { id: 13, title: "Fotografia com Smartphone: Técnicas e Dicas", content: "Como tirar fotos incríveis usando apenas o celular.", author: "Ana Clara Rocha" },
    { id: 14, title: "Empreendedorismo Digital: Como Monetizar seu Conhecimento", content: "Transforme sua paixão em renda com cursos e conteúdo online.", author: "Diego Nascimento" },
    { id: 15, title: "Mindfulness e Meditação para Iniciantes", content: "Práticas simples para reduzir o estresse e aumentar a atenção plena.", author: "Renata Souza" }
  ]
};

app.use(express.json()); // Middleware to parse JSON bodies

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/posts', (req, res) => {
  res.json(db.posts);
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = db.posts.find(p => p.id === postId);
  
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

const { body, validationResult } = require('express-validator');

app.post(
  '/posts',
  [
    body('title').notEmpty().withMessage('O título é obrigatório'),
    body('content').notEmpty().withMessage('O conteúdo é obrigatório'),
    body('author').notEmpty().withMessage('O autor é obrigatório')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Retorna todos os erros de validação
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, author } = req.body;
    const newPost = {
      id: db.posts.length ? db.posts[db.posts.length - 1].id + 1 : 1,
      title,
      content,
      author
    };

    db.posts.push(newPost);
    res.status(201).json(newPost);
  }
);

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = db.posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    const updatedPost = {
      ...db.posts[postIndex],
      ...req.body
    };
    
    db.posts[postIndex] = updatedPost;
    res.json(updatedPost);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = db.posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    db.posts.splice(postIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});