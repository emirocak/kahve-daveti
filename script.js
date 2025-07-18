const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

const sorular = [
  "Sen 'hayır' dedikçe internet yavaşlıyor olabilir ",
  "Bu soruyu geçersen, algoritmam duygulanır ",
  "Bak hâlâ zamanın var, düşün... biraz ",
  "Bu soruya 'hayır' cevabı sistem hatası yaratabilir...",
  "Bak bu 'hayır'lar loglanıyor, sonra üzülürsün ",
  "Bir kahveyle ne kaybedersin? Belki birini kazanırsın ",
  "Bu kadar çok düşünüyorsan, belki denemeye değerdir "
];


const notlar = [
  "*Not: Bu teklif bir daha güncellenmeyebilir.*",
  "*Sunucu tarafı hep açık, ama zaman kısıtlı.*",
  "*Hayır cevabı da saygıyla karşılanır. Ama yine de düşünülebilir.*",
  "*Yalnızca iyi kahve, kötü espri yok.*",
   "*Sunucu tarafı hep açık, ama zaman kısıtlı.*",
  "*Sadece kod değil, hisler de optimize edildi.*",
   "*Sunucu tarafı hep açık, ama zaman kısıtlı.*"
];

let soruIndex = 0;
let kacmaLimit = 7; // Bu kadar sonra kaçamaz
let hayirClickCount = 0;

yesBtn.addEventListener("click", () => {
  question.innerText = "Görüşmek üzere!";
  message.innerText = "THANKSSSSS, verimli zaman için teşekkürler! ☕";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  if (soruIndex < kacmaLimit) {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  } else {
    noBtn.style.transform = `translate(0, 0)`;
  }

  if (soruIndex < sorular.length) {
    question.innerText = sorular[soruIndex];
    message.innerText = notlar[soruIndex];
    soruIndex++;
  }
});

noBtn.addEventListener("click", () => {
  hayirClickCount++;

  const newFontSize = Math.max(10, 18 - hayirClickCount * 2); // noBtn küçülüyor
  const newPadding = Math.max(4, 12 - hayirClickCount); // noBtn padding küçülüyor

  noBtn.style.fontSize = `${newFontSize}px`;
  noBtn.style.padding = `${newPadding}px ${newPadding * 2}px`;

  // Evet butonunu büyütelim
  const yesFontSize = 18 + hayirClickCount * 2;
  const yesPadding = 12 + hayirClickCount;

  yesBtn.style.fontSize = `${yesFontSize}px`;
  yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2}px`;

  if (newFontSize <= 10) {
    noBtn.disabled = true;
    noBtn.style.opacity = 0.5;
    message.innerText = "Artık sistem seni de ikna etmek istemiyor gibi 😅";
  }
});


yesBtn.addEventListener("click", () => {
  window.location.href = "https://wa.me/905321533431?text=Tamam,%20kahve%20zamanı%20☕%20:)";
});
