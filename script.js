// Buat 54 soalan Math mudah contoh
const questions = [];
for(let i=1; i<=54; i++){
  questions.push({q:`${i} + ${i}`, a: i+i});
}

let currentIndex = 0;
let score = 0;

function startGame(){
  document.querySelector("button").style.display = "none"; // hide Start button
  document.getElementById("gameArea").classList.remove("hidden");
  showQuestions();
}

function showQuestions(){
  // Kosongkan semua input
  const inputs = document.querySelectorAll(".answerInput");
  inputs.forEach(input => input.value = "");

  // Papar soalan ikut batch 5
  for(let i=0; i<5; i++){
    if(currentIndex + i < questions.length){
      inputs[i].placeholder = `Soalan ${currentIndex + i +1}: ${questions[currentIndex + i].q}`;
    } else {
      inputs[i].placeholder = "";
      inputs[i].disabled = true;
    }
  }
}

function submitAnswers(){
  const inputs = document.querySelectorAll(".answerInput");
  let correctThisRound = 0;

  for(let i=0; i<5; i++){
    if(currentIndex + i < questions.length){
      const userAnswer = Number(inputs[i].value);
      if(userAnswer === questions[currentIndex + i].a){
        addBlockToTower();
        correctThisRound++;
        score++;
      }
    }
  }

  currentIndex += 5;

  document.getElementById("scoreBoard").textContent = `Skor: ${score}/${questions.length}`;

  if(currentIndex >= questions.length){
    document.getElementById("result").textContent = `🎉 Game selesai! Skor akhir: ${score}/${questions.length}`;
    document.getElementById("questionContainer").classList.add("hidden");
  } else {
    showQuestions();
  }
}

function addBlockToTower(){
  const tower = document.getElementById("jengaTower");
  const block = document.createElement("div");
  block.className = "block";
  tower.appendChild(block);
}
