let express = require('express');
let app = express();

app.set('view engine', 'pug');


app.use('/contact', function (request, response) {
	response.render('contact.pug', {
		title: 'Мои контакты',
		emailsVisible: true,
		emails: ['may@mycorp.com', 'gavgavmycorp.com'],
		phone: 1321421421,
	})
});


app.use('/home', function (request, response) {
	response.render('home.pug');
});

app.use('/about', function (request, response) {
	response.render('about.pug');
});
app.listen(3000);