let frase = prompt('Escribe una frase');



for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i)=='a' || frase.charAt(i)=='e' || frase.charAt(i)=='i' || frase.charAt(i)=='o' || frase.charAt(i)=='u'){
        document.write(frase.charAt(i));
    }
}