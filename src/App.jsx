import { useState } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import ResetButton from './components/ResetButton';

import './App.css';

const texts = [
	'click me-1',
	'click me-2',
	'click me-3',
	'click me-4',
	'click me-5',
];

function App() {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	const resetCount = () => {
		setCount(0);
	};

	return (
		<div className="App">
			<Counter count={count} />
			{texts.map((text, index) => {
				return <Button onClick={incrementCount} text={text} key={index} />;
			})}
			{count > 0 && <ResetButton resetCount={resetCount} />}
		</div>
	);
}

export default App;
