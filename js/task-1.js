'use strict'

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
]

console.log('Задание 1')

const getUserNames = (users) => {
  const names = []
  users.forEach((element) => {
    names.push(element.name)
  })
  return names
}

console.log(getUserNames(users))

//
console.log('Задание 2')

const getUsersWithEyeColor = (users, color) =>
  users.filter((item) => item.eyeColor === color)

console.log(getUsersWithEyeColor(users, 'blue'))

//
console.log('Задание 3')

const getUsersWithGender = (users, gender) =>
  users.filter((item) => item.gender === gender)

console.log(getUsersWithGender(users, 'male'))

//
console.log('Задание 4')

const getInactiveUsers = (users) =>
  users.filter((item) => item.isActive === false)

console.log(getInactiveUsers(users))

//
console.log('Задание 5')

const getUserWithEmail = (users, email) =>
  users.find((item) => item.email === email)

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'))
console.log(getUserWithEmail(users, 'elmahead@omatom.com'))

//
console.log('Задание 6')

const getUsersWithAge = (users, min, max) =>
  users.filter((item) => item.age >= min && item.age <= max)

console.log(getUsersWithAge(users, 20, 30))
console.log(getUsersWithAge(users, 30, 40))

//
console.log('Задание 7')

const calculateTotalBalance = (users) =>
  users.reduce((total, item) => total + item.balance, 0)

console.log(calculateTotalBalance(users))

//
console.log('Задание 8')

const getUsersWithFriend = (users, friendName) => {
  const names = users
    .filter((obj) => obj.friends.includes(friendName))
    .map((obj) => obj.name)
  return names
}

console.log(getUsersWithFriend(users, 'Briana Decker'))
console.log(getUsersWithFriend(users, 'Goldie Gentry'))

//
console.log('Задание 9')

const getNamesSortedByFriendsCount = (users) => {
  const sortByFriends = (a, b) => a.friends.length - b.friends.length
  const names = users.sort(sortByFriends).map((obj) => obj.name)
  return names
}

console.log(getNamesSortedByFriendsCount(users))

//
console.log('Задание 10')

const getSortedUniqueSkills = (users) => {
  const allSkills = users.reduce(
    (allSkills, item) => [...allSkills, ...item.skills],
    [],
  )
  const skills = allSkills
    .filter((element, index) => allSkills.indexOf(element) === index)
    .sort()
  return skills
}

console.log(getSortedUniqueSkills(users))
