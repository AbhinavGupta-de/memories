import Logo from '../assets/ImageLogo.png';

const Header = () => {
	return (
		<div className="w-4/5 mx-auto my-5 p-2 items-start justify-center flex border border-solid rounded-md shadow-sm shadow-black gap-1">
			<div className="text-[28px] text-[#42c0f8] font-semibold">
				<h1>Memories</h1>
			</div>
			<div className="flex justify-center items-center">
				<img src={Logo} alt="Memories image logo" className="max-w-[35px]" />
			</div>
		</div>
	);
};

export default Header;
