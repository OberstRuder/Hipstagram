import React from 'react';
import { Link } from "react-router-dom";
import DefaultAvatar from "../Avatar/DefaultAvatar";
import Avatar from "../Avatar/Avatar";
import { getDate } from "../DateFormating";

const Comment = ({ text, createdAt, owner }) => {

    return (
        <div>
            <div className='comment-info'>
                <div>
                    <Link to={`/profile/${owner?._id}`}>
                        {owner?.avatar === null ? (
                            <DefaultAvatar className='small-ava avatarPic' />
                        ) : (
                            <Avatar url={owner?.avatar?.url} className='small-ava avatarPic' />
                        )}
                        <h3>{'@' + owner.login}</h3>
                    </Link>
                </div>
                <div style={{ color: '#959292', fontSize: '18px' }}>
                    {getDate(createdAt)}
                </div>
            </div>
            <p style={{ textAlign: 'center' }}>{text}</p>
        </div>
    );
};

export default Comment;