export function chatInterface(React, Component, render, socket, store) {
	class ChatInterface extends Component {
		constructor() {
		    super()
		    this.state = {
				record: [],
				//appState: store.getState()
			}
		}
		componentDidMount() {
			var that = this;
			socket.on('newMsg', msg => {
			    console.log(msg);
			    var record = this.state.record;
			    record.push(<li key={record.length}>{msg}</li>);
			    that.setState({record:record});
			});
		}
		sendMessage() {
			var textDom = document.getElementsByTagName('textarea')[0];
			var msg = textDom.value;
			if(msg) {
				socket.emit('postMsg', msg);
			}
			textDom.value = '';
		}
		render() {
			return (<div className='react-wrap'>
						<div className='interface-header'>
						</div>
						<div className='interface-body'>
							<ul ref="ul">
								{this.state.record}
							</ul>
						</div>
						<div className='interface-footer'>
							<textarea>
							</textarea>
							<button onClick={this.sendMessage.bind(this)}>send</button>
						</div>
					</div>)
		}
	}
	return ChatInterface;
}
