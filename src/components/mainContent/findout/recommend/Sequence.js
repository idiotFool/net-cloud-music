import React, {
    Fragment
} from 'react';

export default function Sequence() {
    const clickHandler = () => {
        return;
    }
    return (
        <Fragment>
            <p className="bottom_desc">现在可以根据个人喜好，自由调整首页栏目顺序啦~</p>
            <button className="sequence_btn" onClick={clickHandler}>调整栏目顺序</button>
        </Fragment>
    );
}