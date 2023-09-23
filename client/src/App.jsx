import { useEffect, useState } from 'react';
import { Form, Header, Posts } from './components/index';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

function App() {
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null); // [1

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div className="font-Fira">
			<Header />
			<div className="max-w-[85%] mx-auto lg:grid grid-cols-3 gap-4 flex flex-col-reverse">
				<Posts currentId={currentId} setCurrentId={setCurrentId} />
				<Form currentId={currentId} setCurrentId={setCurrentId} />
			</div>
		</div>
	);
}

export default App;
