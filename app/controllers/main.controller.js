
// Functionality kept seperate here in controllers

module.exports = {

  // Show the homepage
  showHome: (req, res) => {
    // Render method to look at templates
    res.render('pages/home');
    res.send('Hello world!!!');
  }

};
