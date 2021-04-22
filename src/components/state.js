import { renderPage } from "../render";

const state = {
	persons: [
		{id: 1, name:'Nastya', avatar: '/img/nastya.jpg'},
		{id: 2, name:'Koly', avatar: '/img/no_avatar.png'},
		{id: 3, name:'Maxim', avatar: '/img/no_avatar.png'},
		{id: 4, name:'Nikita', avatar: '/img/no_avatar.png'},
		{id: 5, name:'Alina', avatar: '/img/no_avatar.png'},
		{id: 6, name:'Anna', avatar: '/img/no_avatar.png'}
	],
	dialogs: [
		{id: 1, message: `What's your name?`, avatar: '/img/nastya.jpg'}
	],
	posts: [
		{id: 1, message: 'Bring coffee mother and father', likesCount: 3},
		{id: 2, message: 'I want to speak English very well, correctly and fluently', likesCount: 3},
	],
}

export const addPost = (postMessage) => {
	const newPost = {
		id: 3, 
		message: postMessage,
		likesCount: 0
	};
	state.posts.push(newPost);
	renderPage(state);
}

export default state;