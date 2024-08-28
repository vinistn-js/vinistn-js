// horario.js

// Horário de funcionamento
const startHour = 8;  // 8 da manhã
const startMinute = 0;  // 08:00

const endHour = 13;  // 1 da tarde
const endMinute = 32;  // 13:01

// Página de aviso
const closedPage = "fechado.html";

// Verifica se o usuário já está na página de aviso
const isOnClosedPage = window.location.pathname.includes(closedPage);

// Função para verificar o horário e redirecionar se necessário
function checkSiteStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Verifica se está fora do horário de funcionamento
    const isOutsideWorkingHours = (
        currentHour < startHour || 
        (currentHour === startHour && currentMinute < startMinute) ||
        currentHour > endHour ||
        (currentHour === endHour && currentMinute >= endMinute)
    );

    if (isOutsideWorkingHours && !isOnClosedPage) {
        // Redireciona para a página de aviso
        window.location.href = closedPage;
    } else if (!isOutsideWorkingHours && isOnClosedPage) {
        // Se estiver no horário de funcionamento e na página de aviso, redireciona para a página principal
        window.location.href = "index.html"; // Altere para a sua página inicial
    }
}

// Executa a verificação
checkSiteStatus();

// Também verifica a cada minuto para garantir que, se a página estiver aberta, o usuário seja redirecionado ao horário de fechamento
setInterval(checkSiteStatus, 60000);
