// const express = require('express');
// const path = require('path');
// const session = require('express-session');
// const { userLogin, userRegister, verifyEmail, verifyAdminCode } = require('./controllers/user.controller');
// const controller = require('./controllers/order.controller');
// const itemController = require('./controllers/item.controller');
// const verifyToken = require('./middlewares/verifyToken');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 30 * 60 * 1000 }  // Sesi akan berakhir setelah 30 menit tidak aktif
// }));

// function requireLogin(req, res, next) {
//     if (req.session && req.session.user) {
//         next();
//     } else {
//         res.redirect('/login');
//     }
// };

// const dashboardRouter = require('./routers/index');
// const { isAdmin } = require('./middlewares');
// app.use('/', dashboardRouter);

// // Route untuk dashboard
// app.get('/', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
// });

// // Route untuk Contact Us
// app.get('/contactus', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
// });

// // Route untuk Produk
// app.get('/produk', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'produk.html'));
// });


// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });



// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });

// app.post('/login', userLogin);

// app.get('/user', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'user.html'));
// });


// app.get('/admin', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin.html'));
// });

// app.post('/admin');

// app.get('/admin-contactus', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin-contactus.html'));
// });

// app.post('/admin-contactus');

// app.get('/admin-product', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin-product.html'));
// });

// app.post('/admin-product');

// app.get('/add-product', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
// });

// app.post('/add-product');

// // app.get('/etalase.html', requireLogin, (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views', 'etalase.html'));
// // });

// // app.get('/items.html', requireLogin, (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views', 'items.html'));
// // });

// // app.post('/items', requireLogin, itemController.adminCreateItem);
// // app.put('/items/:id', requireLogin, itemController.adminUpdateItem);

// // app.get('/etalase.html', requireLogin, (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views', 'etalase.html'));
// // });

// // app.get('/cashier.html', requireLogin, (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views', 'cashier.html'));
// // });

// // app.get('/orders', verifyToken, controller.getOrders);

// app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'register.html'));
// });

// app.post('/register', userRegister);

// app.get('/verify-email', verifyToken, (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/verification-success.html'));
// });


// app.get('/admin-verification', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin-verification.html'));
// });

// app.post('/verify_admin', verifyAdminCode);

// app.get('/', (req, res) => {
//     res.send('Selamat datang di halaman utama');
// });

// app.use((req, res, next) => {
//     const error = new Error(`Tidak ada rute untuk ${req.path}`);
//     error.status = 404;
//     next(error);
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500).json({
//         message: err.message || 'Internal server error',
//         data: err.data || null
//     });
// });

// module.exports = app;


//---------------------------------------------------

// const express = require('express');
// const path = require('path');
// const session = require('express-session');
// const { userLogin, userRegister, verifyEmail, verifyAdminCode } = require('./controllers/user.controller');
// const controller = require('./controllers/order.controller');
// const itemController = require('./controllers/item.controller');
// const verifyToken = require('./middlewares/verifyToken');
// const is_admin = require('./middlewares')
// // const itemRouter = require('./routers/item.router')
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// // app.use('/api/items', itemRouter);

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 30 * 60 * 1000 }  // Sesi akan berakhir setelah 30 menit tidak aktif
// }));

// function requireLogin(req, res, next) {
//     if (req.session && req.session.user) {
//         next();
//     } else {
//         res.redirect('/login');
//     }
// }

// // Route untuk dashboard
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
// });

// // Route untuk Contact Us
// app.get('/contactus', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
// });

// // Route untuk Produk
// app.get('/produk', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'produk.html'));
// });

// // Route untuk Login
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });

// app.post('/login', userLogin); // Menggunakan controller userLogin

// // Route untuk User Dashboard
// app.get('/user', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'user.html'));
// });

// // Route untuk Admin Dashboard
// app.get('/admin', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin.html'));
// });

// // Route untuk Admin Contact Us
// app.get('/admin-contactus', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin-contactus.html'));
// });

// // Route untuk Admin Product
// app.get('/admin-product', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin-product.html'));
// });

// // Route untuk Add Product
// app.get('/add-product', requireLogin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
// });

// // Route untuk Register
// app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'register.html'));
// });

// app.post('/register', userRegister);

// // Route untuk Email Verification
// app.get('/verify-email', verifyToken, (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'verification-success.html'));
// });

// // Route untuk Admin Verification
// app.get('/admin-verification', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admin-verification.html'));
// });

// app.post('/verify_admin', verifyAdminCode);

// // Error Handling
// app.use((req, res, next) => {
//     const error = new Error(`Tidak ada rute untuk ${req.path}`);
//     error.status = 404;
//     next(error);
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500).json({
//         message: err.message || 'Internal server error',
//         data: err.data || null
//     });
// });

// module.exports = app;


//-----------------------------------------------


const express = require('express');
const path = require('path');
const session = require('express-session');
const { userLogin, userRegister, verifyEmail, verifyAdminCode } = require('./controllers/user.controller');
const controller = require('./controllers/order.controller');
const itemController = require('./controllers/item.controller');
const verifyToken = require('./middlewares/verifyToken');
const is_admin = require('./middlewares')
const itemRouter = require('./routers/item.router'); // Ganti dengan path yang sesuai
const newsRouter = require('./routers/news.router'); // Import newsRouter
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/items', itemRouter);
app.use('api/update-product', itemRouter); // Aktifkan router API produk
app.use('/api/news', newsRouter); // Tambahkan middleware untuk newsRouter

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 }  // Sesi akan berakhir setelah 30 menit tidak aktif
}));

function requireLogin(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

// Route untuk dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Route untuk Contact Us
app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
});

// Route untuk Produk
app.get('/produk', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'produk.html'));
});

// Route untuk Login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', userLogin); // Menggunakan controller userLogin

// Route untuk User Dashboard
app.get('/user', requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'user.html'));
});

// Route untuk Admin Dashboard
app.get('/admin', requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

// Route untuk Admin Contact Us
app.get('/admin-contactus', requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin-contactus.html'));
});

// Route untuk Admin Product
app.get('/admin-product', requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin-product.html'));
});

// Route untuk Add Product
app.get('/add-product', requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
});

// Route untuk Add Product
app.get('/add-news', requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add-news.html'));
});

// Route untuk Register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.post('/register', userRegister);

// Route untuk Email Verification
app.get('/verify-email', verifyToken, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'verification-success.html'));
});

// Route untuk Admin Verification
app.get('/admin-verification', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin-verification.html'));
});

app.post('/verify_admin', verifyAdminCode);

// Error Handling
app.use((req, res, next) => {
    const error = new Error(`Tidak ada rute untuk ${req.path}`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error',
        data: err.data || null
    });
});

module.exports = app;
