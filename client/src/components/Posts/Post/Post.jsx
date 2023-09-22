import TimeAgo from './TimeAgo';

const Post = ({ post }) => {
	return (
		<div className="flex flex-col justify-start items-start m-2 h-">
			<div>
				<img src={post.selectedFile} alt={post.title} />
			</div>
			<div>{post.creator}</div>
			<div>{post.title}</div>
			<div>
				<TimeAgo date={post.createdAt} />
			</div>
			<div>{post.tags}</div>
			<div>{post.message}</div>
			<div>
				<button>Like</button>
				<button>Delete</button>
			</div>
		</div>
	);
};

export default Post;
