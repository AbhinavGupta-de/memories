import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const createOrGetUser = async (response, addUser) => {
	const decodedToken = jwtDecode(response.credential);
	const user = {
		uid: decodedToken.sub,
		email: decodedToken.email,
		name: decodedToken.name,
		picture: decodedToken.picture,
	};
	return user;
	// console.log(response);
};
