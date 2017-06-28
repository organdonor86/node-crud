const mongoose = require('mongoose');
  Schema = mongoose.Schema;

// Create a Schema
const eventSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  description: String
});

// Middleware to make sure the slug is created from the name
eventSchema.pre('save', function(next) {
  // Didn't use arrow function as we need to reference this, arrow function changes how this works.
  this.slug = slugify(this.name);
  next();
});


// Create the model
const eventModel = mongoose.model('Event', eventSchema);


// Export the model
module.exports = eventModel;



// function to slugify a name
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
