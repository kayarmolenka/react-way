import Post from '../Post/Post';

function Message({dialogs}) {
	const dialog = dialogs.map(({id, message, avatar}) => {
		return <Post key={id} text={message} avatar ={avatar}/> 
	})

	return(
	<article id="article_window">
		{dialog}
	</article>
	)
}

export default Message;