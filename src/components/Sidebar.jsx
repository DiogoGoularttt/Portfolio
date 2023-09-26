import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/foto-de-perfil.png'

import "../styles/components/sidebar.sass"


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Césaro Trujillo Corrêa'></img>
            <p className='complete-name'>Césaro Trujillo Corrêa</p>
            <p className="title">Engenheiro Civil</p>
            <SocialNetworks/>
            <InformationContainer/>
        </aside>
    )
}

export default Sidebar;