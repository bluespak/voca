import { useState } from "react";

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        setIsDone(!isDone);
    }    
    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" value={isDone} checked={isDone} onChange={toggleDone}/>
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleShow}>{isShow ?'hide':'view'}</button>
                <button className="btn_del">delete</button>
            </td>
        </tr>
    )
}