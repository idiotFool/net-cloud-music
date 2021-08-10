import React, {
    useState
} from 'react';
import { Link } from  'react-router-dom';
import { top_tab, active as tab_active } from './index.module.sass';

export default function TopTab({ tabList }) {
    const [ state, setState ] = useState(0);
    const clickHandler = (id) => {
        setState(id)
    }
    
    return (
        <ul className={top_tab}>
            {
                tabList.map(item => {
                    return (
                        <li 
                            key={item.id}
                            className={item.id === state ? tab_active : ''}
                            onClick={() => {clickHandler(item.id)}}
                        >
                            <Link to={item.path}>{item.desc}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}