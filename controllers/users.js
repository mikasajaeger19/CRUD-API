import {v4 as uuidv4} from 'uuid';

let users = [];

export const getUsers = (req,res)=>{
	res.send(users);
	//res.send('Hello');
	
}

export const createUser= (req,res)=>{
	const user= req.body;
	const userId= uuidv4();
	//if you want you can just create a new object const userWithId and then add the id to it and then push it into users
	users.push({ ...user, id: userId});
	//... is spread property;
	res.send(`User with name ${user.name} added to the database!`);
}


export const getUser = (req, res)=> {

	const {id}= req.params;

	const foundUser= users.find((user)=> user.id=== id);

	res.send(foundUser);

}

export const deleteUser= (req,res)=>{

	const {id}= req.params;
	users= users.filter((user)=> user.id !== id);
	res.send(`User with the id ${id} deleted from the database`);

}

export const updateUser= (req,res)=>{
	const {id} = req.params;
	const {name, surname, age}= req.body;
	const user = users.find((user)=> user.id === id);

	if(name){
		user.name= name;
	}
	if(surname){
		user.surname= surname;
	}	
	if(age){
		user.age= age;
	}

	res.send(`User with id ${id} has been updated`);
	
}


