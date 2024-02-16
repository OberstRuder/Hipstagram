import { useNavigate } from 'react-router-dom';
import './style.css'
 
const UserBadge = ({nickname, avatarUrl, id}) => {
    const navigate = useNavigate();
    const onOserBadgeClick = () => {
        navigate(`/${id}`)
    };

    return (
        <div className='cnUserBadgeRoot' onClick={onOserBadgeClick}>
            {avatarUrl ? <img src={avatarUrl} alt='avatar' className='cnUserBadgeAvatar'/> : <div className='cnUserBadgePlaceholder'/>}
            <span className='cnUserBadgeName'>{nickname}</span>
        </div>
    );
};

export default UserBadge;