import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';
import './static/main.scss';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        // eslint-disable-next-line no-undef
        document.getElementById('App'),
    );
};

render();
if (module.hot) {
    module.hot.accept(render);
}
