import { useEffect, useState } from 'react';
import { Form, Posts } from '../../components/';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null); // [1

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div className="max-w-[85%] mx-auto lg:grid grid-cols-3 gap-4 flex flex-col-reverse">
			<Posts currentId={currentId} setCurrentId={setCurrentId} />
			<Form currentId={currentId} setCurrentId={setCurrentId} />
		</div>
	);
};

export default Home;
