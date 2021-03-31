import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer'
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<UserContainer/>
			</div>
		</Provider>
	);
}

export default App;
