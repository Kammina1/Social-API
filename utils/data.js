// filler data for usernames, emails, and thoughts
let usernames = [
  "Kammina1",
  "KamminIsSmart",
  "KamminsDad",
  "KamminsSib",
  "GraderIsNice",
];

let emails = [
  "Kammin.avery@mail.com",
  "kammin@mail.com",
  "kammin.a@mail.com",
  "Kammin.ave@mail.com",
  "workpls@mail.com",
];

const thoughts = [
  "early morning thoughts:",
  "I slept great!",
  "I NEED to finish this assignment",
  "I hope my code will work first time LOL",
  "Will the grader laugh at these",
];

// Random generator functions
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomUsername = () => { 
  let un = getRandomArrItem(usernames)
  console.log(un)
  let index = usernames.indexOf(un)
  console.log(index)
  if (index !== -1 ) {
    usernames.splice(index, 1)
    console.log('in the if block')
  } 
  return un
} 
const getRandomThought = () => `${getRandomArrItem(thoughts)}`;
const getRandomEmail = () =>  { 
  let uEmail = getRandomArrItem(emails)
  let index = emails.indexOf(uEmail)
  if (index !== -1 ) {
    emails.splice(index, 1)
  } 
  return uEmail
} 

module.exports = { getRandomUsername, getRandomEmail, getRandomThought };
