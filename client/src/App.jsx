import { Form, Header, Posts } from './components/index';

function App() {
	return (
		<div className="font-['Fira']">
			<Header />
			<div className="max-w-[60%] mx-auto items-center justify-center grid-cols-2 grid">
				<Posts />
				<Form />
			</div>
		</div>
	);
}

export default App;
