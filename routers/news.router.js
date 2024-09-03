const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

// Define routes for news
router.get('/', newsController.getAllNews);
router.post('/', newsController.createNews);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

module.exports = router;
