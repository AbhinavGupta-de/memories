import Logo from '../assets/ImageLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	const user = null;

	return (
		<div className="w-[85%] mx-auto my-5 p-2 items-center justify-between flex border border-solid rounded-md shadow-sm shadow-black gap-1">
			<div className="flex gap-1">
				<Link to="/">
					<div className="text-[28px] text-[#42c0f8] font-semibold">
						<h1>Memories</h1>
					</div>
					<div className="flex justify-center items-center">
						<img src={Logo} alt="Memories image logo" className="max-w-[35px]" />
					</div>
				</Link>
			</div>
			<div>
				{user ? (
					<div className="flex items-center justify-center">
						<img
							src={user.result.imageUrl}
							alt={user.result.name}
							className="rounded-full"
						/>
						<p className="text-[#42c0f8] font-semibold">{user.result.name}</p>
						<button className="text-[#42c0f8] font-semibold">Logout</button>
					</div>
				) : (
					<Link to="/auth">
						<button className="text-[#42c0f8] font-semibold text-[20px]">
							Sign In
						</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
