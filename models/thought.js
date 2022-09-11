const { Schema, model } = require("mongoose")
const reaction = require("./reaction")

// Define the schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toDateString(),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reaction],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    timestamps: true,
    id: false,
  }
);

//creating the virtual
thoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length
})

const Thought = model("thought", thoughtSchema)
module.exports = Thought