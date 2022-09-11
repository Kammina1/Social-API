// filler data for usernames, emails, and thoughts
const usernames = [
    'Kammina1',
    'KamminIsSmart',
    'KamminsDad',
    'KamminsSib',
    'GraderIsNice'
]

const emails = [
    'Isanyonethere@mail.com',
    'Ofcourseimhere@mail.com',
    'Justopenyourears@mail.com',
    'okayiwasjustwondering@mail.com',
    'thankssomuch@mail.com'
]

const thoughts = [
    'early morning thoughts:',
    'I slept great!',
    'I NEED to finish this assignment',
    'I hope my code will work first time LOL',
    'Will the grader laugh at these'
]

// Random generator functions
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomUsername = () => `${getRandomArrItem(usernames)}`
const getRandomThought = () => `${getRandomArrItem(thoughts)}`
const getRandomEmail = () => `${getRandomArrItem(emails)}`

module.exports = { getRandomUsername, getRandomEmail, getRandomThought }