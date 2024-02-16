import './style.css';
import Navbar from '../Navbar';

const Layout = ({nickname, avatarUrl, id, children}) => {
    return (
        <div className='cnLayoutRoot'>
            <Navbar nickname={nickname} avatarUrl={avatarUrl} id={id}/>
            <div className='cnLayoutBody'>{children}</div>
        </div>
    );
};

export default Layout;