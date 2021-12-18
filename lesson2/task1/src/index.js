import { printProfile } from "./profile";

const userData = {
	name: 'John',
	age: '35',
};

const profile = {
	...userData,
	company: 'Averanges'
};

printProfile(profile);