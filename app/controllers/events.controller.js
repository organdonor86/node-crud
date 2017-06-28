const Event = require('../models/event');

module.exports = {
  showEvents: showEvents,
  showSingle: showSingle,
  seedEvents: seedEvents
}

/*******************

  Show All Events

*******************/
function showEvents(req, res) {

    let Event = mongoose.connection;
    const events = Event.event.find({});

    res.render('pages/events', {events: events});
}

// Show a single event
function showSingle(req, res) {

  // Get a single event
  const event = { name: 'Swimming', slug: 'swimming', description: 'Fish Impressionzzz' };

  res.render('pages/single', {event: event});

}

// Seed our database
function seedEvents(req, res) {
  // Create some events
  const events = [
    {name: 'Cheese Fighting', description: '???'},
    {name: 'Swimming', description: 'Fish impressions.'},
    {name: 'Pipe Smoking', description: 'Smoke a pipe like.'},
    {name: 'Running Down Stairs', description: 'Fast and dangerous.'}
  ];
  // Use the event model to insert / save

  // Empty object will match everything and delete everything - seed database in callback function.
  Event.remove({}, () => {
    for (event of events) {
      var newEvent = new Event(event);
      newEvent.save();
    }
    // Seeded!
    res.send('Database seeded!');
  });
}
