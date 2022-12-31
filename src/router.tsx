//React Router Dom
import {
	createBrowserRouter
} from 'react-router-dom';


//Components
import Template from './components/Template';


//Pages
import {
	HomePage
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Template />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			}
		],
	}
]);

export default router;
