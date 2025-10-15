document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const logSection = document.getElementById("logdiv");
  const headerLoginBtn = document.getElementById("headerLoginBtn");
  const guestBtn = document.getElementById("guestBtn");
  const playgroundDiv = document.getElementById("playground");
  const loginDiv = document.getElementById("logindiv");
  const loginBtn = document.getElementById("loginBtn");

  // Header "Log In" button → open login form
  headerLoginBtn.addEventListener("click", () => {
    header.style.display = "none";
    logSection.style.display = "none";
    playgroundDiv.style.display = "none";
    loginDiv.style.display = "flex";
  });

  // Login section "Log In" button → show login form
  loginBtn.addEventListener("click", () => {
    logSection.style.display = "none";
    playgroundDiv.style.display = "none";
    loginDiv.style.display = "flex";
  });

  // Guest button → start the quiz
  guestBtn.addEventListener("click", () => {
    header.style.display = "none";
    logSection.style.display = "none";
    loginDiv.style.display = "none";
    playgroundDiv.style.display = "flex";
    loadQuestion();
  });

  const QuizzQuestions = [
    {
      question: "Who are Naruto's best friends?",
      options: ["Orochimaru", "Sasuke and Sakura", "Hinata and Ino"],
      answer: "Sasuke and Sakura",
      image: "../../images/img5.jpg"
    },
    {
      question: "Who is known as the 'One Punch Man'?",
      options: ["Genos", "Saitama", "Garou", "Boros"],
      answer: "Saitama",
      image: "../../images/genos.jpg"
    },
    {
      question: "What is Luffy's dream in One Piece?",
      options: ["Become Pirate King", "Find the treasure", "Become Marine", "Rule the seas"],
      answer: "Become Pirate King",
      image: "../../images/dragonballs.jpg"
    },
    {
      question: "Who is Goku’s main rival in Dragon Ball Z?",
      options: ["Vegeta", "Piccolo", "Frieza", "Krillin"],
      answer: "Vegeta",
      image: "../../images/goku.jpg"
    },
    {
      question: "What is the name of the Shinigami who owns a Death Note in the beginning?",
      options: ["Ryuk", "Rem", "Sidoh", "Gelus"],
      answer: "Ryuk",
      image: "../../images/dethnote.jpg"
    }
  ];

  let currentQ = 0;

  function loadQuestion() {
    const q = QuizzQuestions[currentQ];
    playgroundDiv.innerHTML = `
      <div class="nav">
        <ul><li><a href="index.html">Return</a></li></ul>
        <div class="t1">Guess the Anime Character</div>
      </div>
      <div class="question">
        <h2>${q.question}</h2>
        <img src="${q.image}" alt="Anime character" class="question-img"/>
        <div class="options">
          ${q.options.map(opt => `<button class="option-btn">${opt}</button>`).join("")}
        </div>
      </div>
    `;

    const optionBtns = playgroundDiv.querySelectorAll(".option-btn");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => selectAnswer(btn.textContent));
    });
  }

  function selectAnswer(selected) {
    const correct = QuizzQuestions[currentQ].answer;
    alert(selected === correct ? "✅ Correct!" : `❌ Wrong! The answer is: ${correct}`);
    currentQ++;
    if (currentQ < QuizzQuestions.length) {
      loadQuestion();
    } else {
      playgroundDiv.innerHTML = `<h2>🎉 Quiz Finished! Great job!</h2>`;
    }
  }
});