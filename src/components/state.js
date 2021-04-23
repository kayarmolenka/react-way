let renderPage = () => {
	console.log('sad')
}

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
	newPostText: ''
}

export const addPost = () => {
	const newPost = {
		id: 3, 
		message: state.newPostText,
		likesCount: 0
	};
	state.posts.push(newPost);
	state.newPostText = '';
	renderPage(state);
}

export const updateTextPost = (newText) => {
	state.newPostText = newText;
	renderPage(state);
}

export const subscribe = (observer) => {
	renderPage = observer;
}
export default state;