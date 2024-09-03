const express = require('express');
const { isAuthenticated } = require('../middlewares');
const routers = express.Router();
const userRouter = require('./user.router');
const itemRouter = require('./item.router');
const orderRouter = require('./order.router');
const newsRouter = require('./news.router'); // Pastikan ini diimpor

// Import dashboard controller
const { dashboardController } = require('../controllers');

// Route for health check
routers.get('/healthcheck', (req, res) => setTimeout(() => res.sendStatus(200), 10000));

// Route for dashboard (initial landing page)
routers.get('/', dashboardController.showDashboard);

// Protected routes
routers.use('/items', isAuthenticated, itemRouter);
routers.use('/orders', isAuthenticated, orderRouter);
routers.use('/users', userRouter);
routers.use('/news', newsRouter); // Pastikan ini digunakan

module.exports = routers;
