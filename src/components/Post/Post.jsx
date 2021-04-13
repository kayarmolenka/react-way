function Post({text, avatar}) {
	return(
	<div className="post_item">
		<img src={avatar} alt="avatar" className="avatar"/>
		<p>{text}</p>
	</div>
	) 
}

export default Post;