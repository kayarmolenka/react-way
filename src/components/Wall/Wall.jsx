import React from "react";

function Wall() {

	const newPostElement = React.createRef();

	const addPost = () => {
		const text = newPostElement.current.value;
		alert(text);
	}
	return(
		<article>
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