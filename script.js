const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

const sorular = [
  "Alternatif bir plan yapalım mı? 🤔",
  "Bu sadece bir teklif, karar senin.",
  "Cevabın değiştiyse güncelleme zamanı :)",
  "Bazen ikinci bir şans, ilkini anlamlı kılar.",
  "İnat değil, istikrar diyelim biz buna."
];

const notlar = [
  "*Not: Bu teklif bir daha güncellenmeyebilir.*",
  "*Sunucu tarafı hep açık, ama zaman kısıtlı.*",
  "*Hayır cevabı da saygıyla karşılanır. Ama yine de düşünülebilir.*",
  "*Yalnızca iyi kahve, kötü espri yok.*",
  "*Sadece kod değil, hisler de optimize edildi.*"
];

let soruIndex = 0;
let kacmaLimit = 4; // Bu kadar sonra kaçamaz
let hayirClickCount = 0;

yesBtn.addEventListener("click", () => {
  question.innerText = "Görüşmek üzere!";
  message.innerText = "Mantıklı karar, verimli zaman için teşekkürler! ☕";
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

  const newFontSize = Math.max(10, 18 - hayirClickCount * 2); // 10px altına düşmesin
  const newPadding = Math.max(4, 12 - hayirClickCount); // 4px altına düşmesin

  noBtn.style.fontSize = `${newFontSize}px`;
  noBtn.style.padding = `${newPadding}px ${newPadding * 2}px`;

  if (newFontSize <= 10) {
    noBtn.disabled = true;
    noBtn.style.opacity = 0.5;
    message.innerText = "Artık sistem seni de ikna etmek istemiyor gibi 😅";
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "https://wa.me/905321533431?text=Tamam,%20kahve%20zamanı%20☕%20:)";
});
