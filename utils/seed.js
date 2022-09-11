const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomEmail, getRandomThought, getRandomUsername } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the Users
  const users = [];

  // Loop 8 times -- add users to the users array
  for (let i = 0; i < 8; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const username = getRandomUsername()
    const email = getRandomEmail()
    const thought = getRandomThought()

    users.push({
     username,
     email,
     thought    
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add a thought to a the user collection and await the results
  await Thought.collection.insertOne({
    username: [...users]
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
