import React from "react";

function Wall(props) {
	const newPostElement = React.createRef();

	const MyPosts = () => {
		props.dispatch({type: 'ADD-POST'});
	}
	
	const elements = props.posts.map(({id, message}) => {
		return <li className='list-item' key={id}>{message}</li>
	})

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
	}

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
				onChange={onPostChange}
				value={props.newPostText}
			></input>
			<button
				onClick={MyPosts}
			>Spend message</button>
		</article>
	)
}

export default Wall;