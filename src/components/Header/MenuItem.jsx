import { Link } from "react-router-dom";
import './header.css'

export default function MenuItem(props) {
    return (
        <div className='menu-item'>
            <Link to={props.link}> {props.text} </Link>
        </div>
    )
}