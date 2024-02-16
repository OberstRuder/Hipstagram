import UserBadge from '../UserBadge';
import './style.css';

const Navbar = ({nickname, avatarUrl, id}) => {
    return (
        <div className='cnNavbarRoot'>
            <div className='cnNavbarWrapper'>
                <span>Hipstagram</span>
                <UserBadge  nickname={nickname} avatarUrl={avatarUrl} id={id}/>
            </div>
        </div>
    );
};

export default Navbar;