// Defina a data e hora-alvo para a contagem regressiva (substitua pela data desejada).
const targetDate = new Date("2023-12-31 00:00:00").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        // A contagem regressiva terminou.
        document.getElementById("timer").innerHTML = "<span>00</span><span>00</span><span>00</span><span>00</span>";
    } else {
        // Calcular dias, horas, minutos e segundos restantes.
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Atualizar a exibição da contagem regressiva.
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
}

// Atualiza a contagem regressiva a cada segundo.
setInterval(updateCountdown, 1000);

// Initial call to display the countdown without delay
updateCountdown();