import { useSelector } from 'react-redux';
import { Post } from '..';

const Posts = ({ currentId, setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	return !posts.length ? (
		<div className="lg:col-span-2 max-h-fit flex flex-col">
			<div className="flex justify-center items-center">
				<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
			</div>
		</div>
	) : (
		<div className="lg:col-span-2 lg:grid lg:grid-cols-2 gap-3 max-h-fit flex flex-col">
			{posts.map((post) => (
				<Post
					key={post._id}
					post={post}
					currentId={currentId}
					setCurrentId={setCurrentId}
				/>
			))}
		</div>
	);
};

export default Posts;
