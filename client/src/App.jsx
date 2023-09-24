import { Header, Home } from './components';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	const clientUrl = import.meta.env.VITE_CLIENT_URL;
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<GoogleOAuthProvider clientId={`${clientUrl}`}>
				<div className="font-Fira">
					<Header user={user} setUser={setUser} />
					<Routes>
						<Route path="/" element={<Home user={user} setUser={setUser} />} />
					</Routes>
				</div>
			</GoogleOAuthProvider>
		</BrowserRouter>
	);
}

export default App;
