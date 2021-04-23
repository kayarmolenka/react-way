import React from 'react';
import { Route } from 'react-router-dom';
import Friends from '../Friends/Friends';
import Message from '../Message/Message';
import Setting from '../Setting/Setting';
import Main from '../Main/Main';
import Wall from '../Wall/Wall';


function Content(props) {
	return( 
		<React.Fragment>
			<Route path="/friends" render={() => <Friends persons={props.state.persons}/>} />
			<Route path="/message" render={() => <Message dialogs={props.state.dialogs}/>} />
			<Route path="/wall" render={() => <Wall posts={props.state.posts} addPost={props.addPost} newPostText={props.state.newPostText} updateTextPost={props.updateTextPost}/>} />
			<Route path="/setting" component={Setting} />
			<Route path="/main" component={Main} />
		</React.Fragment>

	)
}

export default Content;