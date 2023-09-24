import { useEffect, useState } from 'react';
import { Form, Posts, Welcome } from '../../components/';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = ({ user, setUser }) => {
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null); // [1

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div>
			{user ? (
				<div className="max-w-[85%] mx-auto lg:grid grid-cols-3 gap-4 flex flex-col-reverse">
					<Posts currentId={currentId} setCurrentId={setCurrentId} />
					<Form currentId={currentId} setCurrentId={setCurrentId} />
				</div>
			) : (
				<Welcome user={user} setUser={setUser} />
			)}
		</div>
	);
};

export default Home;
