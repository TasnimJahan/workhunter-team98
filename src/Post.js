import React from 'react'
import './Post.css';
import {Avatar} from "@material-ui/core"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import InputOption from './InputOption';

function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="grey" />
            </div>
        </div>
    )
}

export default Post
