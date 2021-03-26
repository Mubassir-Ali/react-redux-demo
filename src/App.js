import HooksCakeContainer from './components/HooksCakeContainer'
import {IceCreamContainer} from './components/IceCreamContainer'
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
		<IceCreamContainer/>
        <HooksCakeContainer/>
			</div>
		</Provider>
	);
}

export default App;
