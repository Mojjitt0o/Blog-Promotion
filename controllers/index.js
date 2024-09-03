const { showDashboard } = require('./dashboard.controller');

module.exports = {
    userController: require('./user.controller'),
    itemController: require('./item.controller'),
    socketController: require('./socket.controller'),
    dashboardController: require('./dashboard.controller'),
    newsController: require('./news.controller')
}