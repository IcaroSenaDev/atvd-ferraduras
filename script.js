function calcularFerraduras() {
    // Obter o número de cavalos inserido pelo usuário
    const numeroCavalos = parseInt(document.getElementById('numeroCavalos').value);
    
    // Verificar se o número de cavalos é válido
    if (isNaN(numeroCavalos) || numeroCavalos <= 0) {
        alert("Por favor, insira um número válido de cavalos.");
        return;
    }

    // Calcular a quantidade total de ferraduras necessárias
    const ferradurasPorCavalo = 4;
    const totalFerraduras = numeroCavalos * ferradurasPorCavalo;
    
    // Exibir o resultado
    document.getElementById('resultadoFerraduras').textContent = `Você precisará de ${totalFerraduras} ferraduras para equipar todos os cavalos.`;
}
