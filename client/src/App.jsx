import { Header, Home } from './components';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const clientUrl = import.meta.env.VITE_CLIENT_URL;

function App() {
	return (
		<BrowserRouter>
			<GoogleOAuthProvider clientId={`${clientUrl}`}>
				<div className="font-Fira">
					<Header />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/auth" element={<h1>Auth</h1>} />
					</Routes>
				</div>
			</GoogleOAuthProvider>
		</BrowserRouter>
	);
}

export default App;
