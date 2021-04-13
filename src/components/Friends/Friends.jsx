import Post from '../Post/Post';

function Friends({persons}) {
	const name = persons.map(({name, id, avatar}) => {
		return <Post text={name} key={id} avatar ={avatar} />
	})

	return(
	<article id="article_window">
		{name}		
	</article>
	)
}

export default Friends;