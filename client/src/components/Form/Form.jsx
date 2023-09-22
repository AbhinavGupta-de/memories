import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
	const [postData, setPostData] = useState({
		creator: '',
		title: '',
		message: '',
		tags: '',
		selectedFile: '',
	});

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createPost(postData));
	};
	const clear = () => {
		setPostData({
			creator: '',
			title: '',
			message: '',
			tags: '',
			selectedFile: '',
		});
	};

	return (
		<div className="flex flex-col items-end w-full col-span-1 bg-[#f5f5ef]">
			{/*  Heading */}
			<div className="w-full flex items-center justify-center mt-2 font-Fira">
				<span className="text-[20px]">Creating a Memory</span>
			</div>

			{/*  Input fields */}
			<div className="flex flex-col gap-[1rem] w-full p-5">
				<div>
					<input
						className="p-2 rounded-md border-solid border-2 border-black w-full"
						type="text"
						placeholder="Creator"
						value={postData.creator}
						onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
					/>
				</div>
				<div>
					<input
						className="p-2 rounded-md border-solid border-2 border-black w-full"
						type="text"
						placeholder="Title"
						value={postData.title}
						onChange={(e) => setPostData({ ...postData, title: e.target.value })}
					/>
				</div>
				<div>
					<input
						className="p-2 rounded-md border-solid border-2 border-black w-full"
						type="text"
						placeholder="Message"
						value={postData.message}
						onChange={(e) => setPostData({ ...postData, message: e.target.value })}
					/>
				</div>
				<div>
					<input
						className="p-2 rounded-md border-solid border-2 border-black w-full"
						type="text"
						placeholder="Tags"
						value={postData.tags}
						onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
					/>
				</div>
			</div>

			{/*  File input */}
			<div className="flex text-[12px] p-1">
				<FileBase
					type="file"
					multiple={false}
					value={postData.selectedFile}
					onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
				/>
			</div>

			{/*  Buttons */}
			<div className="flex flex-col w-full p-5 gap-1">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
					type="submit"
					onClick={handleSubmit}
				>
					Submit
				</button>

				<button
					className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 rounded"
					type="button"
					onClick={clear}
				>
					Clear
				</button>
			</div>
		</div>
	);
};

export default Form;
