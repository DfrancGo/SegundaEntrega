let altura = prompt('Cuánto mides? (metros)');
let peso = prompt('Cuánto pesas? (kilogramos)');
let altura1 = altura * altura;
let imc = peso/altura1;
alert ('Tu IMC es de: ' + imc)
    if (imc<25) {     
        alert ('Felicidas, estás dentro de tu peso ideal, si tienes pensado ponerte más fuerte que el vinagre contactanos: http://raionhato.infinityfreeapp.com')
    } else if (imc>32) {
        alert ('Tu salud se puede ver comprometida al tener un IMC tan alto, te recomendamos hablar con tu médico y mejorar lo antes posible tu condición. Visitano en: http://raionhato.infinityfreeapp.com')
        for ( let i =1; i<=3 ; i++) {
            alert ('Estes es un aviso, visita a tu médico y mejora tu vida. No es gordofobia, es salud cuidate porfi x' +i)
        }
    } else if (imc>25) {
        alert ('Estás por encima de tu peso ideal, consulta con un profesional de la salud para verificar que no corra riesgo tu salud. en Raionhato estaremos encantados de ayudarte a mejorar tu calidad de vida, visitanos: http://raionhato.infinityfreeapp.com')
    }
let opciones = ["entrenamiento funcional", "crosstraining"];
let seleccion = prompt("¿Qué tipo de entrenamiento prefieres? \n - Entrenamiento funcional \n - Crosstraining");
seleccion = seleccion.toLowerCase();
let valido = false;
    while (!valido) {
      if (seleccion == opciones[0]) {
        alert("Has elegido el entrenamiento funcional. Este tipo de entrenamiento se basa en ejercicios que imitan los movimientos naturales del cuerpo humano y que mejoran la fuerza, la resistencia, la flexibilidad y el equilibrio.");
        valido = true;
      } else if (seleccion == opciones[1]) {
        alert("Has elegido el crosstraining. Este tipo de entrenamiento combina diferentes disciplinas deportivas como el atletismo, la halterofilia, la gimnasia y el remo, y que busca mejorar el rendimiento físico general.");
        valido = true;
      } else {
        alert("Opción no válida. Por favor, introduce entrenamiento funcional o crosstraining.");
        seleccion = prompt("¿Qué tipo de entrenamiento prefieres? \n - Entrenamiento funcional \n - Crosstraining");
      }
    }
