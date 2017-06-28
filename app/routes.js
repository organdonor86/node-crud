// Create a new express router
const express = require('express'),
  router = express.Router();
  mainController = require('./controllers/main.controller');
  eventsController = require('./controllers/events.controller');

// Export router
module.exports = router;

// Define routes
router.get('/', mainController.showHome);

// Event routes
router.get('/events', eventsController.showEvents);

// Seed events
router.get('/events/seed', eventsController.seedEvents);

// Show a single event
router.get('/events/:slug', eventsController.showSingle);
