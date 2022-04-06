import { Component } from 'react';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return <div>{<div>{monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)}</div>}</div>;
	}
}

export default CardList;
