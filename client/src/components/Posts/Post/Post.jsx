import { deletePost, likePost } from '../../../actions/posts';
import TimeAgo from './TimeAgo';
import { useDispatch } from 'react-redux';

const Post = ({ post, currentId, setCurrentId }) => {
	const dispatch = useDispatch();

	const handleLike = () => {
		dispatch(likePost(post._id));
	};

	const handleDelete = () => {
		dispatch(deletePost(post._id));
	};

	const handleEdit = () => {
		setCurrentId(post._id);
	};

	return (
		<div className="flex flex-col justify-start items-start m-2 h-fit shadow-lg rounded-xl">
			{/* Background Image the one that was posted by the user */}
			<div className="-z-10 rounded-xl border-t-2 border-solid">
				<img
					src={post.selectedFile}
					alt={post.title}
					className="filter brightness-50 rounded-t-xl"
				/>
			</div>
			{/* Heading and time to be displayed on top of the image*/}
			<div className="absolute p-2 text-white text-[25px]">{post.creator}</div>
			<div className="absolute mt-10 text-white p-2 text-[14px]">
				<TimeAgo date={post.createdAt} />
			</div>

			{/* Tags and other content*/}
			<div className="text-gray-500 p-2 text-[15px]">
				{post.tags.map((tags) => `#${tags} `)}
			</div>

			<div className="ml-3 text-[26px]">{post.title}</div>
			<div className="ml-2 text-[16px] font-Lato">{post.message}</div>
			<div className="flex justify-between w-full p-2">
				<button
					className="flex gap-1 justify-center items-center"
					onClick={handleLike}
				>
					<i className="fa-solid fa-thumbs-up" />
					<span>Like</span>
					<span>{post.likeCount}</span>
				</button>
				<div>
					<button
						onClick={handleDelete}
						className=" text-[#e51c1c] flex items-center gap-1"
					>
						Delete
					</button>

					<button
						className="flex items-center justify-center gap-1"
						onClick={handleEdit}
					>
						<i className="fa-solid fa-pen-to-square" style={{ color: '#000000' }}></i>
						<span>Edit</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Post;
