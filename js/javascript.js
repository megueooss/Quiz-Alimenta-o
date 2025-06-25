let speedrunMode = false;

function showSettings() {
  const checkbox = document.getElementById("speedrun-checkbox");
  checkbox.checked = speedrunMode;

  checkbox.addEventListener("change", function () {
    speedrunMode = this.checked;
    alert(`Speedrun Mode ${speedrunMode ? "ativado ✅" : "desativado ❌"}`);
  });

  alert("⚙️ Você pode ativar o Speedrun Mode logo abaixo dos botões iniciais.");
}

const questions = [
  { question: "Qual destes é considerado um carboidrato saudável?", answers: ["Refrigerante", "Pão branco", "Arroz integral", "Biscoito recheado"], correct: 2, difficulty: "fácil" },
  { question: "Qual vitamina é mais abundante nas frutas cítricas?", answers: ["Vitamina A", "Vitamina B12", "Vitamina C", "Vitamina D"], correct: 2, difficulty: "fácil" },
  { question: "A creatina é mais utilizada para:", answers: ["Aumentar energia e massa muscular", "Perda de cabelo", "Relaxamento mental", "Melhorar a digestão"], correct: 0, difficulty: "normal" },
  { question: "Qual desses alimentos é fonte de gordura saudável?", answers: ["Bacon", "Salmão", "Margarina", "Sorvete"], correct: 1, difficulty: "fácil" },
  { question: "O excesso de proteína pode sobrecarregar qual órgão?", answers: ["Estômago", "Pulmão", "Rim", "Fígado"], correct: 2, difficulty: "normal" },
  { question: "Qual alimento é rico em fibras?", answers: ["Maçã", "Carne", "Iogurte", "Frango"], correct: 0, difficulty: "fácil" },
  { question: "Qual suplemento é utilizado para melhorar o desempenho nos treinos?", answers: ["Creatina", "Vitamina A", "Ômega-3", "Ferro"], correct: 0, difficulty: "difícil" },
  { question: "Qual é o principal benefício da vitamina D?", answers: ["Saúde dos ossos", "Ganho de massa", "Digestão", "Sono"], correct: 0, difficulty: "fácil" },
  { question: "O que é um alimento funcional?", answers: ["Comida com calorias vazias", "Alimento que previne doenças", "Ultraprocessado", "Alimento industrializado"], correct: 1, difficulty: "normal" },
  { question: "Qual é a função das proteínas no corpo?", answers: ["Fornecer energia imediata", "Construção e reparo dos tecidos", "Regular a temperatura", "Hidratar o corpo"], correct: 1, difficulty: "fácil" },
  { question: "Qual desses alimentos é fonte natural de vitamina A?", answers: ["Cenoura", "Batata", "Carne vermelha", "Pão integral"], correct: 0, difficulty: "fácil" },
  { question: "O que são probióticos?", answers: ["Vitaminas artificiais", "Bactérias benéficas", "Minerais essenciais", "Suplementos de cálcio"], correct: 1, difficulty: "normal" },
  { question: "O que é considerado uma boa fonte de ferro?", answers: ["Laranja", "Arroz", "Feijão", "Alface"], correct: 2, difficulty: "fácil" },
  { question: "Qual desses ajuda a regular o intestino?", answers: ["Gordura saturada", "Fibras", "Carboidratos simples", "Sal refinado"], correct: 1, difficulty: "fácil" },
  { question: "Qual bebida ajuda na hidratação e contém eletrólitos?", answers: ["Café", "Refrigerante", "Água de coco", "Vinho"], correct: 2, difficulty: "normal" },
  { question: "O que são antioxidantes?", answers: ["Vitaminas do complexo B", "Substâncias que combatem radicais livres", "Tipo de gordura", "Proteínas vegetais"], correct: 1, difficulty: "difícil" },
  { question: "Qual suplemento é recomendado para pessoas com anemia?", answers: ["Creatina", "Ômega-3", "Ferro", "Vitamina D"], correct: 2, difficulty: "normal" },
  { question: "Alimentos integrais são importantes por serem ricos em:", answers: ["Fibras", "Gorduras", "Sal", "Corantes"], correct: 0, difficulty: "fácil" },
  { question: "Evitar qual substância ajuda a controlar a hipertensão?", answers: ["Fibras", "Cálcio", "Sódio", "Ferro"], correct: 2, difficulty: "normal" },
  { question: "A vitamina B12 é encontrada principalmente em:", answers: ["Frutas", "Vegetais", "Carnes e ovos", "Grãos integrais"], correct: 2, difficulty: "normal" },
  { question: "O que é uma alimentação balanceada?", answers: ["Apenas vegetais", "Apenas proteína", "Com equilíbrio entre todos os nutrientes", "Com poucos alimentos"], correct: 2, difficulty: "fácil" },
  { question: "Suplementos substituem refeições?", answers: ["Sim, completamente", "Não, são apenas complementos", "Apenas no café da manhã", "Depende da idade"], correct: 1, difficulty: "fácil" },
  { question: "O que são alimentos ultraprocessados?", answers: ["Frutas secas", "Alimentos com muitos aditivos artificiais", "Leite e derivados", "Vegetais cozidos"], correct: 1, difficulty: "normal" },
  { question: "Qual desses alimentos aumenta o colesterol bom (HDL)?", answers: ["Abacate", "Bacon", "Manteiga", "Batata frita"], correct: 0, difficulty: "fácil" },
  { question: "Qual é o papel da água no nosso corpo?", answers: ["Causa retenção", "Ajuda na digestão e regulação da temperatura", "Engorda", "Não tem função clara"], correct: 1, difficulty: "fácil" },
  {
  question: "Qual suplemento é mais conhecido por ajudar no ganho de massa muscular?",
  answers: ["Ômega-3", "Creatina", "Colágeno", "Vitamina D"],
  correct: 1,
  difficulty: "fácil"
  },
  {
    question: "O whey protein é uma fonte de qual macronutriente?",
    answers: ["Gordura", "Carboidrato", "Proteína", "Fibra"],
    correct: 2,
    difficulty: "fácil"
  },
  {
    question: "Qual suplemento é indicado para ajudar na saúde das articulações?",
    answers: ["Glucosamina", "Cafeína", "BCAA", "Zinco"],
    correct: 0,
    difficulty: "normal"
  },
  {
    question: "Qual vitamina é lipossolúvel e pode ser tóxica em excesso?",
    answers: ["Vitamina C", "Vitamina B12", "Vitamina D", "Vitamina B6"],
    correct: 2,
    difficulty: "normal"
  },
  {
    question: "A creatina age principalmente em qual sistema energético?",
    answers: ["Glicolítico", "Aeróbico", "Fosfagênico", "Oxidativo"],
    correct: 2,
    difficulty: "difícil"
  },
  {
    question: "Qual suplemento é mais utilizado para melhorar o foco e desempenho mental?",
    answers: ["Magnésio", "Colágeno", "Cafeína", "Cálcio"],
    correct: 2,
    difficulty: "fácil"
  },
  {
    question: "Qual é o principal objetivo da suplementação com BCAA?",
    answers: ["Melhorar a memória", "Diminuir fadiga muscular", "Aumentar gordura corporal", "Regular a tireoide"],
    correct: 1,
    difficulty: "normal"
  },
  {
    question: "Qual mineral é essencial para o transporte de oxigênio no sangue?",
    answers: ["Cálcio", "Ferro", "Zinco", "Selênio"],
    correct: 1,
    difficulty: "fácil"
  },
  {
    question: "Em qual momento é mais comum consumir whey protein?",
    answers: ["Antes de dormir", "Durante o treino", "Após o treino", "Antes do café da manhã"],
    correct: 2,
    difficulty: "fácil"
  },
  {
    question: "A suplementação de colágeno ajuda principalmente na saúde de qual tecido?",
    answers: ["Muscular", "Cerebral", "Conjuntivo", "Linfático"],
    correct: 2,
    difficulty: "normal"
  },
  {
    question: "Qual é a recomendação mais comum para o consumo de creatina?",
    answers: ["10g por refeição", "5g ao dia", "30g pós-treino", "1g a cada hora"],
    correct: 1,
    difficulty: "normal"
  },
  {
    question: "Quais aminoácidos formam o BCAA?",
    answers: ["Glicina, prolina, serina", "Leucina, isoleucina, valina", "Arginina, lisina, histidina", "Alanina, cisteína, metionina"],
    correct: 1,
    difficulty: "difícil"
  },
  {
    question: "Qual suplemento é utilizado por pessoas com intolerância à lactose?",
    answers: ["Colágeno", "Whey Isolado", "Creatina", "Ômega-3"],
    correct: 1,
    difficulty: "normal"
  },
  {
    question: "Qual suplemento é feito a partir do óleo de peixe?",
    answers: ["Ômega-3", "Vitamina A", "Creatina", "Caseína"],
    correct: 0,
    difficulty: "fácil"
  },
  {
    question: "Qual suplemento é mais recomendado para auxiliar no sono e relaxamento?",
    answers: ["Cafeína", "Vitamina C", "Magnésio", "Beta-alanina"],
    correct: 2,
    difficulty: "normal"
  },
  {
    question: "A beta-alanina ajuda principalmente em qual aspecto do treino?",
    answers: ["Aumentar força máxima", "Melhorar resistência muscular", "Reduzir peso corporal", "Aumentar testosterona"],
    correct: 1,
    difficulty: "difícil"
  },
  {
    question: "Qual suplemento pode causar retenção de água muscular como efeito colateral?",
    answers: ["Vitamina B12", "Creatina", "Zinco", "Whey"],
    correct: 1,
    difficulty: "normal"
  },
  {
    question: "O que diferencia o Whey Isolado do Whey Concentrado?",
    answers: ["Mais carboidratos", "Mais lactose", "Maior pureza proteica", "Menor absorção"],
    correct: 2,
    difficulty: "normal"
  },
  {
    question: "Qual suplemento é mais associado ao ganho de peso (massa + gordura)?",
    answers: ["Termogênico", "Hipercalórico", "Multivitamínico", "Ômega-3"],
    correct: 1,
    difficulty: "fácil"
  },
  {
    question: "A vitamina C é conhecida por qual principal benefício?",
    answers: ["Melhora da digestão", "Aumento da energia", "Aumento da imunidade", "Ganho de massa"],
    correct: 2,
    difficulty: "fácil"
  },
  {
    question: "Qual suplemento pode ser indicado para vegetarianos?",
    answers: ["Vitamina B12", "Whey protein", "Creatina", "Cafeína"],
    correct: 0,
    difficulty: "normal"
  },
  {
    question: "Qual suplemento é conhecido por ajudar na recuperação muscular pós-exercício?",
    answers: ["Vitamina A", "Ômega-3", "Multivitamínico", "Cafeína"],
    correct: 1,
    difficulty: "normal"
  },
  {
    question: "Qual suplemento deve ser evitado à noite para não atrapalhar o sono?",
    answers: ["Creatina", "Cafeína", "Ômega-3", "Colágeno"],
    correct: 1,
    difficulty: "fácil"
  },
  {
    question: "Suplementos substituem uma alimentação equilibrada?",
    answers: ["Sim, são completos", "Não, são complementos", "Depende do tipo", "Apenas em dietas líquidas"],
    correct: 1,
    difficulty: "fácil"
  },
  {
    question: "Qual é o papel do multivitamínico?",
    answers: ["Substituir refeições", "Aumentar energia", "Repor diversas vitaminas e minerais", "Perder gordura rapidamente"],
    correct: 2,
    difficulty: "fácil"
  }
];

let selectedQuestions = [], current = 0, score = 0, globalTime = 0, globalTimer;
let localRanking = [];

const acertoAudio = new Audio("sounds/osu_acerto.mp3");
const erroAudio = new Audio("sounds/minecrafthit_erro.mp3");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const restartBtn = document.getElementById("restart");
const backHomeBtn = document.getElementById("back-home");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  shuffle(questions);
  selectedQuestions = questions.slice(0, 10);
  current = 0;
  score = 0;

  updateScore();
  startGlobalTimer();
  showQuestion();
}

function showRanking() {
  alert("📊 Ranking ainda não implementado.");
}

function showSettings() {
  alert("⚙️ Configurações ainda não implementadas.");
}

let globalStartTime;
let globalInterval;

function startGlobalTimer() {
  globalStartTime = Date.now();
  clearInterval(globalInterval); 

  globalInterval = setInterval(() => {
    const now = Date.now();
    const elapsed = now - globalStartTime;
    const seconds = (elapsed / 1000).toFixed(2);
    timerEl.innerText = `⏱️ Tempo total: ${seconds}s`;
  }, 50);
}

function updateScore() {
  scoreEl.innerText = `🎯 Acertos: ${score}/${selectedQuestions.length}`;
}

function showDifficulty(level) {
  const difficultyEl = document.getElementById("difficulty");
  difficultyEl.innerText = `Nível: ${level}`;
  difficultyEl.style.color = {
    "fácil": "green",
    "normal": "orange",
    "difícil": "red",
    "expert": "purple"
  }[level.toLowerCase()] || "black";
}

function showQuestion() {
  const q = selectedQuestions[current];
  questionEl.innerText = q.question;
  answersEl.innerHTML = "";

  showDifficulty(q.difficulty);

  q.answers.forEach((text, index) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.className = "answer-btn";
    btn.onclick = () => nextQuestion(index === q.correct);
    answersEl.appendChild(btn);
  });
}

function nextQuestion(correct) {
  if (correct) {
    acertoAudio.play();
    score++;
  } else {
    erroAudio.play();
  }
  current++;
  updateScore();
  if (current < selectedQuestions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(globalInterval); // <- Isso para o cronômetro corretamente
  const now = Date.now();
  const elapsed = now - globalStartTime;
  const totalSeconds = (elapsed / 1000).toFixed(2);

  questionEl.innerText = `✅ Quiz finalizado! Você acertou ${score}/${selectedQuestions.length}`;
  answersEl.innerHTML = "";
  timerEl.innerText = `⏱️ Tempo total: ${totalSeconds}s`;

  restartBtn.style.display = "inline-block";
  backHomeBtn.style.display = "inline-block";
  document.getElementById("grafico").style.display = "block";
}

function restartQuiz() {
  current = 0;
  score = 0;
  document.getElementById("grafico").style.display = "none";
  updateScore();
  restartBtn.style.display = "none";
  shuffle(questions);
  selectedQuestions = questions.slice(0, 10);
  startGlobalTimer();
  showQuestion();
}

restartBtn.addEventListener("click", restartQuiz);

function backToHome() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("grafico").style.display = "none";
  restartBtn.style.display = "none";
  backHomeBtn.style.display = "none";
  clearInterval(globalInterval);
}
backHomeBtn.addEventListener("click", backToHome);

function finishQuiz() {
  clearInterval(globalInterval);
  const now = Date.now();
  const elapsed = now - globalStartTime;
  const totalSeconds = (elapsed / 1000).toFixed(2);

  localRanking.push({
    nome: prompt("Digite seu nome para o ranking:") || "Anônimo",
    acertos: score,
    tempo: parseFloat(totalSeconds) // garantir que tempo é número
  });

  // Ordena: menor tempo primeiro; se empate no tempo, maior acertos primeiro
  localRanking.sort((a, b) => {
    if (a.tempo !== b.tempo) {
      return a.tempo - b.tempo;
    }
    return b.acertos - a.acertos;
  });

  questionEl.innerText = `✅ Quiz finalizado! Você acertou ${score}/${selectedQuestions.length}`;
  answersEl.innerHTML = "";
  timerEl.innerText = `⏱️ Tempo total: ${totalSeconds}s`;
  restartBtn.style.display = "inline-block";
  backHomeBtn.style.display = "inline-block";
  document.getElementById("grafico").style.display = "block";

  mostrarRankingLocal();
}

function mostrarRankingLocal() {
  const rankingDiv = document.getElementById("ranking-local");
  rankingDiv.innerHTML = "<h3>🏆 Ranking Local</h3>";

  localRanking.forEach((entry, index) => {
    const linha = document.createElement("div");
    linha.innerText = `${index + 1}. ${entry.nome} - ${entry.acertos} acertos - ${entry.tempo}s`;
    rankingDiv.appendChild(linha);
  });
}

function gerarGrafico() {
  const ctx = document.getElementById("grafico").getContext("2d");
  new Chart(ctx, {
    type: "column",
    data: {
      labels: ["Acertos", "Erros"],
      datasets: [{
        data: [score, selectedQuestions.length - score],
        backgroundColor: ["#4caf50", "#f44336"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}
