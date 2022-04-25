import './App.css';
import Greet from './components/Greet';
// import Message from './components/message';
import ClickHandler from './components/ClickHandler';

import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import { NameList } from './components/NameList';
import { Form } from './components/Form';

const App = () => {
	return (
		<div>
			{/*	<Greet name="Bruce" heroName="Batman" />
			<Greet name="Klark" heroName="Superman">
				<button>Action</button>
			</Greet>
			<Greet name="Diana" heroName="Wonder Woman">
				This is children props
  </Greet>

  <Message />
  <ClickHandler /> 
  <ParentComponent /> 
<UserGreeting />
  <NameList />*/}
			<Form />
		</div>
	);
};

export default App;
