import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
//users.js is our own file we can name it anything, better to choose something descriptive

const app= express();
const PORT= 5000; //frontend port is usually 3000

app.use(bodyParser.json()); //just says we'll be using json data object


app.use('/users',usersRoutes);

app.get('/', (req,res)=> {
	console.log('[TESTsdfs]!');	
	res.send('Hello from homepage.');
}); 
// this makes a get request. browser only make get requests. in this case it was made to the home root route due to the slash. we sent hello from homepage as a response to the get request.

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));


