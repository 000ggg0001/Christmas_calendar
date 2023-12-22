var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shift(n) {
  let newalpha = '';

  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    newalpha += alphabet[offset];
  }

  return newalpha;
}

function encrypt(message, key) {
  let result = "";
  let newalpha = shift(key);

  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i]);
    if (index === -1) {
      result += message[i];
    } else {
      result += newalpha[index];
    }
  }

  return result;
}

function decrypt(message, key) {
  key = alphabet.length - (key % alphabet.length);

  return encrypt(message, key);
}

function encryptMessage() {
  input = document.getElementById("input");
  output = document.getElementById("output");

  output.value = encrypt(input.value, 10);
}

function decryptMessage() {
  input = document.getElementById("input");
  output = document.getElementById("output");

  output.value = decrypt(input.value, 10);
}