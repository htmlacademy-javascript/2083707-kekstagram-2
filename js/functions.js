//Функция для проверки длины строки

const checkStringLength = (string, checkLength) => string.length <= checkLength;

// Проверка
const testString = 'Проверка длины строки';
checkStringLength(testString, 10);

// Функция проверки на палиндром

const checkPalindrome = (string) => {
  const checkString = string.replaceAll(' ', '').toLowerCase();
  let compareString = '';
  for (let i = checkString.length - 1; i >= 0; i--) {
    compareString += checkString[i];
  }
  return checkString === compareString;
};

// Проверка
const palindrome = 'Шалаш';
checkPalindrome(palindrome);

// Фунция для извлечения цифр из строки

const stringToNumber = (string) => {
  const number = string.toString();
  let checkNumber = '';
  for (let i = 0; i < number.length; i++) {
    const currentNumber = parseInt(number[i], 10);
    if (!Number.isNaN(currentNumber)) {
      checkNumber += currentNumber;
    }
  }
  return parseInt(checkNumber,10);
};

// Проверка
const testStringToNumber = '1 кефир, 0.5 батона';
stringToNumber(testStringToNumber);
