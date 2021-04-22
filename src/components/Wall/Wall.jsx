import React from "react";

function Wall(props) {
	const newPostElement = React.createRef();

	const MyPosts = () => {
		const text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}
	
	const elements = props.posts.map(({id, message}) => {
		return <li className='list-item' key={id}>{message}</li>
	})

	return(
		<article id='all-posts'>
			<ul className='app-list-item'>
				{elements}
			</ul>
			<h2>Spend message:</h2>
			<input
				ref={newPostElement}
				type='text'
				placeholder='What is new?'
			></input>
			<button
				onClick={MyPosts}
			>Spend message</button>
		</article>
	)
}

export default Wall;