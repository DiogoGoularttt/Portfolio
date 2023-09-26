import { FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
];

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <><a href="https://www.linkedin.com/in/c%C3%A9saro-trujillo-corr%C3%AAa-779117160/" className='social-btn' id={network.name} key={network.name} target="_blank">
                    {network.icon}
                </a><a href="https://www.linkedin.com/in/c%C3%A9saro-trujillo-corr%C3%AAa-779117160/" style={{ color: 'white', background: 'none', textDecoration: 'none', }} target="_blank">
                        LinkedIn
                    </a></>

            ))}
        </section>
    )
};

export default SocialNetworks