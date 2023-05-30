const questions = [
    {
      question: " 1- Se durante o atendimento houver algum conflito com o cliente,qual seria a maneira certa de resolver esse conflito?",
      choices: [" A)mandaria o cliente ir embora sem resolver o conflito", "B)sairia do local e deixaria ele falando sozinho.", "C)chamaria ele para conversar em um lugar calmo para resolver esse problema."],
      correctAnswer: 2
    },
    {
      question: "2- O cliente gostou muito de uma roupa, porém não tem a numeração dele,como você agiria nessa situação?",
      choices: ["A) falaria pra ele ir em outra loja.", "B)avisaria o dia que está previsto para chegar a roupa novamente e passaria o número da loja ou ofereceria uma roupa parecida.", "C) Apenas falaria que não tinha a roupa."],
      correctAnswer: 1
    },
    {
      question: " 3- Chegou um cliente na loja, porém você está ocupado no momento,o que vc falaria para o cliente?",
      choices: ["A) iria pedir para o cliente esperar..", "B) deixaria ele se virar sozinho.", "C) chamaria outra pessoa para ajudar no atendimento no momento ."],
      correctAnswer: 2
    },
    {
      question: "4 - Caso chegue um cliente com uma aparência simples e outro com uma aparência boa ,qual você atenderia primeiro?",
      choices: ["A) atenderia o cliente com a aparência boa, pois com certeza ele tem mais dinheiro e deixaria o outro esperando.","B) atenderia quem chegasse primeiro.","C) atenderia os dois ao mesmo tempo."],
      correctAnswer: 1
    } ,
    {
      question: " 5- Como você iria agir se caso um cliente estivesse agindo de forma grosseira com você ?",
      choices: ["A) pediria para ele manter a calma, e caso ele continuasse, eu pediria para ele se retirar da loja.","B)iria ser grossa com ele também.","C) iria mandar ele ir embora, pois não tenho paciência para lidar com pessoas desse tipo."],
      correctAnswer: 0
    }
    ,
    {
      question: " 6 - Durante um atendimento como você resolveria um conflito gerado pelo cliente ?",
      choices: ["A) eu pediria para ele manter a calma, e levaria ele para conversar em um local adequado para não assustar os outros clientes.","B) mandaria ele ir embora.","C) deixaria ele sozinho até se acalmar."],
      correctAnswer: 0
    }
    ,
   
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Função para exibir a pergunta atual
  function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    questionElement.innerText = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
  
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const choice = questions[currentQuestion].choices[i];
      const li = document.createElement("li");
      li.innerHTML = `<input type="radio" name="choice" value="${i}"> ${choice}`;
      choicesElement.appendChild(li);
    }
  }
  
  // Função para verificar a resposta e exibir a próxima pergunta
  function checkAnswer() {
    const choices = document.getElementsByName("choice");
    let selectedChoice;
  
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        selectedChoice = choices[i].value;
        break;
      }
    }
  
    if (selectedChoice == questions[currentQuestion].correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  // Função para exibir o resultado final
  function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Resultado</h2>
      <p>Você acertou ${score} de ${questions.length} perguntas.</p>
      <button onclick="location.reload()">Reiniciar</button>
    `;
  }
  
  // Event listener para o botão de enviar resposta
  document.getElementById("submit-btn").addEventListener("click", checkAnswer);
  
  // Inicialização do quiz
  showQuestion();