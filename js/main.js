const NAMES = [
  'Алексей',
  'Алина',
  'Иван',
  'Ольга',
  'Виктор',
  'Марина',
  'Григорий',
  'Яна',
  'Николай',
  'Наталья',
  'Андрей',
  'Елизавета',
  'Евгений',
  'Екатерина',
  'Мирон',
  'Мирослава',
  'Ярослав',
  'Вероника',
  'Владимир',
  'Ольга',
  'Мирослав',
  'Маргарита',
  'Сергей',
  'Юлия',
  'Лев',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_DESCRIPTIONS = [
  'Пляж отеля на берегу моря',
  'Указатель к пляжу',
  'Берег моря',
  'Девушка с фотоаппаратом на берегу моря',
  'Блюдо «Человек в ванной»',
  'Машина в матовом окрасе с ламбодверью',
  'Блюдо с клубникой',
  'Напиток из ягод',
  'Самолет над пляжем',
  'Обувница',
  'Проход к морю',
  'Купе Ауди',
  'Салат для веганов',
  'Котосуши',
  'Приятный отдых',
  'Горы с высоты полёта самолета',
  'Хор',
  'Ретроавтомобиль',
  'Тапочки с фонариком',
  'Гостиничный комплекс',
  'Салат',
  'Закат на берегу моря',
  'Краб',
  'Шоу',
  'Кормление бегемота',
];

// Тестовые значения
const TEST_MIN_COMMENT_LIKES = 15;
const TEST_MAX_COMMENT_LIKES = 200;
const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 10000;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_COMMENTS_SENTENSE = 1;
const MAX_COMMENTS_SENTENSE = 2;
const POSTS_ARRAY = 25;


const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(MIN_PHOTO_ID, MAX_PHOTO_ID);
const generateCommentId = createRandomIdFromRangeGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID);

const generateMessageSentence = () => {
  const sentenceLength = getRandomInteger(MIN_COMMENTS_SENTENSE, MAX_COMMENTS_SENTENSE);
  const sentence = [];

  for (let i = 0; i < sentenceLength; i++) {
    let currentSentence = getRandomArrayElement(MESSAGES);
    while (sentence.includes(currentSentence)) {
      currentSentence = getRandomArrayElement(MESSAGES);
    }
    sentence.push(currentSentence);
  }

  return sentence.join(' ');
};


const createComment = () => ({
  id: generateCommentId(),
  name: getRandomArrayElement(NAMES),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
  message: generateMessageSentence(),
});


const createPostInformation = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: PHOTO_DESCRIPTIONS[photoId - 1], likes: getRandomInteger(TEST_MIN_COMMENT_LIKES, TEST_MAX_COMMENT_LIKES),
    comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComment),
  };
};

const postInformationArray = Array.from({length: POSTS_ARRAY}, createPostInformation);

// console.log(postInformationArray);

export {postInformationArray};
