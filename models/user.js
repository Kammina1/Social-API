const { Schema, model } = require("mongoose")
const thought = require('./thought')

// Define the schema
const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Enter a Username."],
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Add your Email." ],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "thought",
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      ]
    },
    {
    toJSON: {
        getters: true,
     },
    }
);
//create the virtual
userSchema.virtual("friendCount").get(function() {
  return this.friends.length
})
//assign to a variable & then export
const User = model('user', userSchema);

module.exports = User;
