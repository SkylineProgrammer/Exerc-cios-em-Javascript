let contadora;

contadora = 1;

do {
  if (contadora % 2 == 0) {
    contadora++;
  } else {
    console.log(contadora + " é impar.")
    contadora++;
  }
} while (contadora <= 50);

