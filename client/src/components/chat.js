import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logo from '../logo.svg';
import 'react-chat-widget/lib/styles.css';

class ChatApp extends Component {
	componentDidMount() {
		addResponseMessage('Welcome to this awesome chat!');
	}
	handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
	};
	render() {
		return (
			<div className="App">
				<Widget
					handleNewUserMessage={this.handleNewUserMessage}
					profileAvatar={logo}
					title="My new awesome title"
					subtitle="And my cool subtitle"
					saenderPlaceHolder="Type a message..."
				/>
			</div>
		);
	}
}

export default ChatApp;
