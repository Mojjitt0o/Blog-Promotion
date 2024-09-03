const { News } = require('../models');

// Get all news
// Contoh di news.controller.js
exports.getAllNews = async (req, res) => {
    try {
        const news = await News.findAll();
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan' });
    }
};


// Controller untuk membuat berita baru
exports.createNews = async (req, res) => {
    try {
        const { title, content } = req.body;
        const news = await News.create({ title, content });
        return res.status(201).json({ message: 'Berita berhasil ditambahkan', news });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan' });
    }
};

// Update news
exports.updateNews = async (req, res) => {
    const { title, content } = req.body;
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        news.title = title;
        news.content = content;
        await news.save();
        res.json(news);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete news
exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        await news.destroy();
        res.json({ message: 'News deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
