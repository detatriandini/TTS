const button = document.getElementById("btn-submit");
const inputjwb = document.getElementById("jawab");
const pilsoal = document.getElementById("pilihSoal");

const d2 = document.querySelectorAll(".D2");
const d4 = document.querySelectorAll(".D4");
const d5 = document.querySelectorAll(".D5");
const d6 = document.querySelectorAll(".D6");

const t1 = document.querySelectorAll(".T1");
const t3 = document.querySelectorAll(".T3");
const t2 = document.querySelectorAll(".T2");

button.addEventListener("click", function () {
  let soal = pilsoal.value;
  let jawaban = inputjwb.value.toLowerCase();

  console.log(jawaban);

  // alert(jawaban);
  if (soal === "menurun-1" && jawaban === "takjil") {
    alert("Jawaban anda benar");
    for (let i = 0; i < t1.length; i++) {
      t1[i].innerHTML = jawaban[i];
    }
  } else if (soal === "menurun-2" && jawban === "tadarus") {
    alert("Jawaban anda benar");
    for (let i = 0; i < t2.length; i++) {
      t2[i].innerHTML = jawaban[i];
    }
  } else if (soal === "menurun-3" && jawaban === "idulfitri") {
    alert("Jawaban anda benar");
    for (let i = 0; i < t3.length; i++) {
      t3[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar-2" && jawaban === "tarawih") {
    alert("Jawaban anda benar");
    for (let i = 0; i < d2.length; i++) {
      d2[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar-4" && jawaban === "ramadan") {
    alert("Jawaban anda benar");
    for (let i = 0; i < d4.length; i++) {
      d4[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar-5" && jawaban === "haus") {
    alert("Jawaban anda benar");
    for (let i = 0; i < d5.length; i++) {
      d5[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar-6" && jawaban === "nabuburit") {
    alert("Jawaban anda benar");
    for (let i = 0; i < d6.length; i++) {
      d6[i].innerHTML = jawaban[i];
    }
  } else {
    alert("Jawaban anda salah ");
  }
});
