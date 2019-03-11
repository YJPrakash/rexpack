import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		// this.props = {
		//     name: "React WebPage"
		// };
		this.state = {
			name: "React Webpage"
		};

	}
	render() {
		return (
		<div>
			About me<span>{this.state.name}</span>
		</div>);
	}
}

export default App;