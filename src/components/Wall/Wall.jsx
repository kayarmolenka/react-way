import React from "react";

function Wall({posts}) {
	const newPostElement = React.createRef();
	const addPost = () => {
		const text = newPostElement.current.value;
		alert(text);
	}

	const elements = posts.map(({id, message}) => {
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
				onClick={addPost}
			>Spend message</button>
		</article>
	)
}

export default Wall;