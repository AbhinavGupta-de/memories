import Logo from '../assets/ImageLogo.png';
import { Link } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '../auth/Auth';

const Header = ({ user, setUser }) => {
	const handleLogout = () => {
		googleLogout();
		setUser(null);
	};

	return (
		<div className="w-[85%] mx-auto my-5 p-2 items-center justify-between flex lg:flex-row flex-col  border border-solid rounded-md shadow-sm shadow-black gap-1">
			<Link to="/">
				<div className="flex gap-1">
					<div className="text-[28px] text-[#42c0f8] font-semibold">
						<h1>Memories</h1>
					</div>
					<div className="flex justify-center items-center">
						<img src={Logo} alt="Memories image logo" className="max-w-[35px]" />
					</div>
				</div>
			</Link>
			<div className="flex flex-col lg:flex-row">
				{user ? (
					<div className="flex items-center justify-center gap-1">
						<div className="flex flex-col justify-center items-center">
							<img
								src={user.picture}
								alt={user.name}
								className="rounded-full w-[28px]"
							/>
							<p className="text-[#42c0f8] font-normal">{user.name}</p>
						</div>
						<button className="text-[#42c0f8] font-semibold" onClick={handleLogout}>
							Logout
						</button>
					</div>
				) : (
					<GoogleLogin
						auto_select={true}
						onSuccess={(response) => {
							const result = createOrGetUser(response);
							result.then((res) => {
								setUser(res);
							});
						}}
						onError={() => console.log('Error')}
						useOneTap={true}
					/>
				)}
			</div>
		</div>
	);
};

export default Header;
