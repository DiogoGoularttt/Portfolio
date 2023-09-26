import { FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
];

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <div key={network.name}>
                    <a href="https://www.linkedin.com/in/c%C3%A9saro-trujillo-corr%C3%AAa-779117160/" className='social-btn' id={network.name} target="_blank">
                        {network.icon}
                    </a>
                    <a href="https://www.linkedin.com/in/c%C3%A9saro-trujillo-corr%C3%AAa-779117160/" className='social-link' style={{ color: 'white', background: 'none', textDecoration: 'none', }} target="_blank">
                        LinkedIn
                    </a>
                </div>
            ))}
        </section>
    );
};

export default SocialNetworks