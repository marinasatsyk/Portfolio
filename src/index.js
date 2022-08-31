import reportWebVitals from './reportWebVitals';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
function AppLoader() {
    return (
        <Suspense fallback={<div className="loading">Loading...</div>}>
            <App />
        </Suspense>
    );
}
root.render(
    <React.StrictMode>
        <AppLoader />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
