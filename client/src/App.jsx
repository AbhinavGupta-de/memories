import { useEffect } from 'react';
import { Form, Header, Posts } from './components/index';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div className="font-Fira">
			<Header />
			<div className="max-w-[60%] mx-auto grid grid-cols-3 gap-4">
				<Posts />
				<Form />
			</div>
		</div>
	);
}

export default App;
