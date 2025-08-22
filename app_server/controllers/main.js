// app_server/controllers/main.js

// Home page controller
const home = (req, res) => {
  res.render('home', { title: 'SmartSpend - Home' });
};

// Expenses page controller
const expenses = (req, res) => {
  res.render('expenses', { title: 'Track Expenses' });
};

// Budget page controller
const budget = (req, res) => {
  res.render('budget', { title: 'Manage Budget' });
};

// Login page controller
const login = (req, res) => {
  res.render('login', { title: 'Login - SmartSpend' });
};

module.exports = {
  home,
  expenses,
  budget,
  login
};

