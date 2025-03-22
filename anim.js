// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I met you in the dark, you lit me up", time: 9 },
  { text: "You made me feel as though I was enough", time: 14 },
  { text: "We danced the night away, we drank too much", time: 19 },
  { text: "I held your hair back when you were throwing up", time: 24 },
  { text: "Then you smiled over your shoulder", time: 27 },
  { text: "For a minute, I was stone-cold sober", time: 29 },
  { text: "I pulled you closer to my chest", time: 34 },
  { text: "And you asked me to stay over", time: 37 },
  { text: "I said, I already told ya", time: 39 },
  { text: "I think that you should get some rest", time: 43 },
  { text: "I knew I loved you then", time: 47 },
  { text: "But you'd never know", time: 49 },
  { text: "'Cause I played it cool when I was scared of letting go", time: 53 },
  { text: "I know I needed you", time: 58 },
  { text: "But I never showed", time: 59 },
  { text: "But I wanna stay with you until we're grey and old", time: 63 },
  { text: "Just say you won't let go", time: 69 },
  { text: "Just say you won't let go", time: 73 },
  { text: "I'll wake you up with some breakfast in bed", time: 79 },
  { text: "I'll bring you coffee with a kiss on your head", time: 84 },
  { text: "And I'll take the kids to school, wave them goodbye", time: 89 },
  { text: "And I'll thank my lucky stars for that night", time: 95 },
  { text: "When you looked over your shoulder", time: 98 },
  { text: "For a minute, I forget that I'm older", time: 99 },
  { text: "I wanna dance with you right now", time: 104 },
  { text: "Oh, and you look as beautiful as ever", time: 107 },
  { text: "And I swear that everyday'll get better", time: 111 },
  { text: "You make me feel this way somehow", time: 112 },
  { text: "I'm so in love with you", time: 119 },
  { text: "And I hope you know", time: 120 },
  { text: "Darling your love is more than worth its weight in gold", time: 124 },
  { text: "We've come so far my dear, look how we've grown", time: 130 },
  { text: "And I wanna stay with you until we're grey and old", time: 135 },
  { text: "Just say you won't let go", time: 139 },
  { text: "Just say you won't let go", time: 144 },
  { text: "I wanna live with you, even when we're ghosts", time: 150 },
  { text: "'Cause you were always there for me when I needed you most", time: 155 },
  { text: "I'm gonna love you till my lungs give out", time: 160 },
  { text: "I promise till death we part like in our vows", time: 165 },
  { text: "So I wrote this song for you, now everybody knows", time: 170 },
  { text: "Finally it's just you and me till we're grey and old", time: 175 },
  { text: "Just say you won't let go", time: 180 },
  { text: "Just say you won't let go", time: 185 },
  { text: "Just say you won't let go", time: 190 },
  { text: "Oh, just say you won't let go", time: 194 }
];




// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);