//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числ

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return
//   }
// if (a < b) {
//   return a
// }
// return b
//   return a < b ? a : b
// }

// console.log(min(10, 3))

// const fn = () =>

// const users = ['ajax', 'poly', 'mango']

// const resultMap = users.map((element) => {
//   return element.toLocaleUpperCase()
// })
// console.log(resultMap)

// const resultFilter = users.filter((element) => {
//   return null
// })
// console.log(resultFilter)

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ]

// const friends = [
//   { name: 'Alex', age: 21, specialty: 'Information Technology' },
//   { name: 'Marina', age: 22, specialty: 'Cybersecurity' },
//   { name: 'Igor', age: 20, specialty: 'Software Development' },
//   { name: 'Svetlana', age: 21, specialty: 'Artificial Intelligence' },
// ]

// const usersByAge = friends.filter(fn).map((element) => element.specialty)

// console.log(usersByAge)
// function fn(element, index, array) {
//   return element.age === 21
// }

// const planets = [
//   { name: 'Меркурий', radius: 2439.7 },
//   { name: 'Венера', radius: 6051.8 },
//   { name: 'Земля', radius: 6371 },
//   { name: 'Марс', radius: 3389.5 },
//   { name: 'Юпитер', radius: 69911 },
//   { name: 'Сатурн', radius: 58232 },
//   { name: 'Уран', radius: 25362 },
//   { name: 'Нептун', radius: 24622 },
// ];

// const updatedPlanets = planets.map((planet) => {
//   return {
//     name: planet.name,
//     radius: parseFloat((planet.radius * 1.1).toFixed(2)),
//   };
// });
// console.log(updatedPlanets);

// const reviews = [
//   { dish: 'Тирамису', rating: 5, comment: 'Восхитительно!' },
//   {
//     dish: 'Паста Карбонара',
//     rating: 4,
//     comment: 'Хорошо, но могло бы быть лучше.',
//   },
//   { dish: 'Маргарита', rating: 5, comment: 'Лучшая пицца!' },
//   { dish: 'Лазанья', rating: 3, comment: 'Слишком жирно для меня.' },
//   { dish: 'Ризотто с грибами', rating: 5, comment: 'Идеально!' },
// ];

// const getTopDishes = (reviews) => {
//   return reviews
//     .filter((review) => review.rating === 5)
//     .map((review) => review.dish);
// };

// const topDishes = getTopDishes(reviews);
// console.log(topDishes);

// const friends = [
//   { name: 'Алексей', age: 19 },
//   { name: 'Виктория', age: 17 },
//   { name: 'Михаил', age: 22 },
//   { name: 'Анна', age: 18 },
//   { name: 'Дмитрий', age: 21 },
//   { name: 'Ирина', age: 16 },
//   { name: 'Николай', age: 25 },
// ];

// function inviteFriendsOnParty() {
//   return friends
//     .filter((friend) => friend.age >= 18)
//     .map((friend) => friend.name)
//     .filter((_, index) => index % 2 === 0);
// }

// const friendOnParty = inviteFriendsOnParty();
// console.log(friendOnParty);

// const movies = [
//   { title: 'Большой куш', year: 2000, genres: ['Комедия', 'Криминал'] },
//   { title: 'Матрица', year: 1999, genres: ['Фантастика', 'Боевик'] },
//   { title: 'Шрек', year: 2001, genres: ['Комедия', 'Фэнтези'] },
//   {
//     title: 'Властелин колец: Братство Кольца',
//     year: 2001,
//     genres: ['Фэнтези', 'Приключения'],
//   },
// ];

// function movies21Centuries(movies) {
//   return movies
//     .filter((movie) => movie.year >= 2000)
//     .filter((movie) => movie.genres.includes('Комедия'))
//     .map((movie) => `${movie.title} ${movie.year} год`);
// }

// console.log(movies21Centuries(movies));

// const movies = [
//   { title: 'Фильм 1', rating: 7.9 },
//   { title: 'Фильм 2', rating: 8.5 },
//   { title: 'Фильм 3', rating: 9.0 },
//   { title: 'Фильм 4', rating: 8.1 },
// ];

// function moviesMaxRating(movies) {
//   return movies
//     .filter(({ rating }) => rating >= 8)
//     .map(({ title, rating }) => `${title} Rating: ${rating}`);
// }

// console.log(moviesMaxRating(movies));

// const products = [
//   { name: 'Ноутбук', category: 'Электроника', price: 1500 },
//   { name: 'Книга', category: 'Книги', price: 200 },
//   { name: 'Смартфон', category: 'Электроника', price: 800 },
//   { name: 'Наушники', category: 'Электроника', price: 1200 },
//   { name: 'Чехол для смартфона', category: 'Аксессуары', price: 300 },
// ];

// function filterProduct(products) {
//   return products
//     .filter(({ category }) => category === 'Электроника')
//     .map(
//       ({ name, price }) =>
//         `${name} ${price} ${price > 1000 ? 'Бесплатная доставка' : ''}`
//     );
// }

// console.log(filterProduct(products));

// const students = [
//   {
//     name: 'Алексей',
//     tests: [
//       { subject: 'Математика', score: 85 },
//       { subject: 'Литература', score: 74 },
//     ],
//   },
//   {
//     name: 'Мария',
//     tests: [
//       { subject: 'Математика', score: 88 },
//       { subject: 'Литература', score: 90 },
//     ],
//   },
//   {
//     name: 'Иван',
//     tests: [
//       { subject: 'Математика', score: 82 },
//       { subject: 'Литература', score: 78 },
//     ],
//   },
//   {
//     name: 'Светлана',
//     tests: [
//       { subject: 'Математика', score: 95 },
//       { subject: 'Литература', score: 91 },
//     ],
//   },
//   {
//     name: 'Дмитрий',
//     tests: [
//       { subject: 'Математика', score: 78 },
//       { subject: 'Литература', score: 85 },
//     ],
//   },
// ];

// function bestMathStudents(students) {
//   return students
//     .filter((student) => {
//       return student.tests.some(
//         (test) => test.subject === 'Математика' && test.score >= 80
//       );
//     })
//     .map((student) => {
//       const mathTest = student.tests.find(
//         (test) => test.subject === 'Математика'
//       );
//       return `${student.name} - ${mathTest.score}`;
//     });
// }

// console.log(bestMathStudents(students));

// const fruits = [
//   { name: 'Яблоко', available: false },
//   { name: 'Банан', available: true },
//   { name: 'Груша', available: false },
//   { name: 'Апельсин', available: true },
// ];

// function isFruitAvailable(fruits) {
//   return fruits.some((fruit) => fruit.available === true);
// }

// console.log(isFruitAvailable(fruits));

// const drinksMenu = [
//   { name: 'Эспрессо', type: 'кофе', price: 100 },
//   { name: 'Американо', type: 'кофе', price: 120 },
//   { name: 'Латте', type: 'кофе', price: 150 },
//   { name: 'Зеленый чай', type: 'чай', price: 80 },
//   { name: 'Черный чай', type: 'чай', price: 80 },
//   { name: 'Лимонад', type: 'сок', price: 90 },
//   { name: 'Апельсиновый сок', type: 'сок', price: 110 },
// ];

// function grinksFilter(drinksMenu) {
//   return drinksMenu
//     .filter(({ type, price }) => type === 'кофе' && price < 130)
//     .map(({ name, price }) => ({ name, price: price * 1.2 }));
// }

// console.log(grinksFilter(drinksMenu));

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  const trimmedValue = event.target.value.trim();

  if (trimmedValue === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = trimmedValue;
  }
});
