import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
    // let like = 10;
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    return (
        <div>
            <Badge badgeContent={like} color="primary">
                <IconButton aria-label="like" onClick={() => setLike(like + 1)} color="primary">
                    👍
                </IconButton>
            </Badge>
            
            <Badge badgeContent={dislike} color="error">
                <IconButton aria-label="like" onClick={() => setDislike(dislike + 1)} color="error">
                👎
                </IconButton>
            </Badge>
        </div>
    );
}
