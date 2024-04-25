/* Helpers and Actions */
import { data } from './adminSideBarHelper';

/* Style */
import './adminSideBar.css';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {

    // setPath(window.location.pathname);
    return (
        <div className="admin_side_bar_container">
            {
                data?.map((i, index) => {
                    return (
                        <div key={index}>
                            {i?.name === "header" && 
                                <div className='admin_side_bar_header'>
                                    <span>{i?.data}</span>
                                </div>
                            }
                            <ul className='admin_side_bar_list'>
                                {i?.name !== 'header' && 
                                    <li>
                                        <Link className='admin_side_bar_links' to={i?.url}>{i?.data}</Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AdminSideBar;