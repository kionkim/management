const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => {
// 	res.send({ message: 'Hello Express!' });
// });

app.get('/api/customers', (req, res) => {
	res.send([
		{
			id: 1,
			name: 'kionkim',
			image: 'https://placeimg.com/64/64/any',
			birthday: '961222',
			gender: 'male',
			job: 'student'
		},
		{
			id: 2,
			name: 'kionkim',
			image: 'https://placeimg.com/64/64/any',
			birthday: '961221',
			gender: 'male',
			job: 'programmer'
		},
		{
			id: 3,
			name: 'kionkim',
			image: 'https://placeimg.com/64/64/any',
			birthday: '961220',
			gender: 'male',
			job: 'student'
		}
	]);
});

app.get('/api/chart_data', (req, res) => {
	res.send({
		title: {
			text: 'My chart'
		},
		series: [
			{
				data: [ 1, 2, 3, 4, 5 ]
			}
		]
	});
});

app.get('*', (req, res) => {
	res.send('aaaaa');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
