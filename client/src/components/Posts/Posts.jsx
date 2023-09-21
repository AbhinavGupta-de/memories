import { useSelector } from 'react-redux';
import { Post } from '..';

const Posts = () => {
	const posts = useSelector((state) => state.posts);
	console.log(posts);
	return (
		<div className="col-span-2">
			<Post />
		</div>
	);
};

export default Posts;
