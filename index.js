import {AppRegistry, LogBox} from 'react-native';
import App from './src/navigators';
import {name as appName} from './app.json';
import configureStore from  './src/store';
import {Provider} from 'react-redux';


const store=configureStore();
LogBox.ignoreAllLogs();
const AppContainer = () => (
    <Provider store={store}>
      <App />
    </Provider>
    )
AppRegistry.registerComponent(appName, () => AppContainer);
