const Welcome = ({ user }) => {
	return (
		<div className="flex mx-auto flex-col w-[85%] gap-2">
			<div className="text-[28px]">
				<h1>Welcome!</h1>
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam enim minima
				repudiandae est beatae assumenda, doloremque quis aut consequatur
				consectetur, fuga quas ducimus tenetur fugiat maiores quod. Dolores, sint
				animi!
			</div>
			<div>
				<p>Image to be added here</p>
				<img />
			</div>

			<div className="p-3 rounded-lg text-[20px] bg-sky-500 w-fit">
				Join the Community!
			</div>

			<footer className="text-[22px]">
				This is page is a work in progress. Please check back later.
			</footer>
		</div>
	);
};

export default Welcome;
