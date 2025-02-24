
document.addEventListener("DOMContentLoaded", function() {
  // "SEND" tugmasini aniqlaymiz
  let sendBtn = document.querySelector(".form-box button[type='submit']");

  sendBtn.addEventListener("click", function(e) {
    e.preventDefault(); // Formaning default yuborilishini toʻxtatish

    // Formadagi inputlardan qiymatlarni olish
    const name = document.querySelector(".form-box input[placeholder='Name']").value;
    const email = document.querySelector(".form-box input[placeholder='Number']").value;
    const address = document.querySelector(".form-box input[placeholder='Mavzu']").value;
    const message = document.querySelector(".form-box input[placeholder='Xabar']").value;

    // Yuboriladigan matnni shakllantiramiz
    const text = `Foydalanuvchidan kelgan yangi xabar:\nIsm: ${name}\nNomer: ${email}\nMavzu: ${address}\nXabar: ${message}`;

    // Bot token va admin chat ID
    const botToken = "8010628288:AAF5LQw1yflKBS5IDnxwFgH9jDnQ1aQMa_0";
    const chatId = "5656829497";

    // Telegram API URLini yaratamiz (xabar URL-kodlangan holda yuboriladi)
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    // Fetch orqali yuborish
    fetch(telegramUrl)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert("Xabar yuborildi!");
        } else {
          alert("Xabar yuborishda xatolik yuz berdi!");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Xatolik yuz berdi!");
      });
  });
});
