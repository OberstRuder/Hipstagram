import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CRouting } from './components/routing';
import { CHeader } from './components/Header';
import { actionAboutMe } from './redux/actions/actionsMe';
import { actionAuthLogin } from './redux/actions/actionsAuth';
import { actionFullGetAllPosts } from './redux/actions/actionsPost';
import { store } from './redux/store';

function App() {

  if(localStorage.authToken) {
    store.dispatch(actionAboutMe())
    store.dispatch(actionAuthLogin(localStorage.authToken))
    store.dispatch(actionFullGetAllPosts())
  }
  return (
    <BrowserRouter>
      <CHeader />
      <CRouting />
    </BrowserRouter>
  );
}

export default App;
