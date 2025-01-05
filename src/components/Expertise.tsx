import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const labelsFirst = [
    "React",
    "Symfony",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Java",
    "Python",
    "PHP",
    "SQL",
    "PL/SQL",
    "Oracle DB",
    "MySQL",
    "git",
    "C",
    "C++",
    "C#",
    "Docker",
    "Graphes",
    "Analyse de données",
    "Algorithmie avancée",
    "structures de données",
];

const labelsSecond = [
    "ffuf",
    "nmap",
    "Burp Suite",
    "Wireshark",
    "Metasploit", 
    "Kali Linux",
    "OWASP",
    "Injections SQL",
    "Cross Site Scripting (XSS)",
    "Cross Site Request Forgery (CSRF)",
    "manipulation de cookies",
    "Reverse Shell",
    "Enumeration Active Directory",
];

const labelsThird = [
    "Controleurs de domaines Active Directory",
    "VMware ESXi",
    "Infrastructures Cisco",
    "Infrastructures Juniper Networks",
    "Serveurs Dell powerEdge",
    "Cisco CCNA 200-301 (en cours)",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Développement full-stack / DevOps</h3>
                    <p>Ma formation actuelle est un BUT informatique orienté développement d'applications. J'ai donc l'opportunité de toucher à divers domaines du développement
                    et à de nombreuses technologies. Les projets menés, que ce soit seul ou en équipe, me font me sentir confiant professionnellement pour travailler en tant que Développeur full-stack</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cybersécurité</h3>
                    <p>Bien qu'étudiant en tant que développeur full-stack, la branche de l'informatique qui me passionne le plus est la cybersécurité, particulièrement en blue
                        team. Le fait d'operer sur des systèmes d'informations et sur des infrastructures afin que celles-ci soient sécurisées m'apporte une grande satisfaction.
                        J'ai donc décidé de me former en autodidacte sur les techniques et outils de sécurité informatique.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Administration systèmes et réseaux</h3>
                    <p>En tant que passionnée de cybersécurité, je me sens obligé d'acquérir un maximum de compétences sur les systèmes et réseaux. Je me forme donc en parallèle
                     des cours et des projets, notamment récemment en visant d'obtenir ma certification Cisco CCNA 200-301 d'ici fin 2025 </p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;