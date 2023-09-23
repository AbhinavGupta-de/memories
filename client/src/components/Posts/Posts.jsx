import { useSelector } from 'react-redux';
import { Post } from '..';

const Posts = ({ currentId, setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	console.log(posts);
	return !posts.length ? (
		<div className="col-span-2 max-h-fit">
			<div className="flex justify-center items-center">
				<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
			</div>
		</div>
	) : (
		<div className="col-span-2 grid grid-cols-2 gap-3 max-h-fit">
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
