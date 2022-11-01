import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import App from './components/App/App'

import './index.css'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
