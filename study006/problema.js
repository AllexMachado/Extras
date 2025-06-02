/*Elaborar um programa para um Cinema, onde o Usuário possa digitar o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos*/

function algoritmo() {
    const titulo = document.getElementById("titulo").value;
    const duracao =  document.getElementById("duracao").value;

    const horas = Math.floor(duracao / 60);
    const minutos = duracao - horas * 60;

    document.getElementById("titulosaida").textContent = titulo.toUpperCase();
    document.getElementById("duracaosaida").textContent = `${horas} horas e ${minutos} minutos`;
}

