const { faker } = require("@faker-js/faker");

const generateUsers = (num) => {
  let users = [];
  for (let i = 0; i < num; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      messages: faker.number.int({ min: 10, max: 100 }),
      lastActive: faker.date.recent({ days: 2 }),
    });
  }
  return users;
};

const generateMessages = (users) => {
  let messages = [];
  users.forEach((user) => {
    for (let i = 0; i < user.messages; i++) {
      messages.push({
        userId: user.id,
        timestamp: faker.date.recent(),
      });
    }
  });
  return messages;
};

module.exports = { generateUsers, generateMessages };
