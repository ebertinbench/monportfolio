import React from "react";


import '../assets/styles/Project.scss';
import juniper from '../assets/images/juniper.jpg';
import cisco from '../assets/images/cisco1.jpg';
import AD from '../assets/images/activedirectory.jpg';
import pentesting from '../assets/images/pentesting.png';
import nemu from '../assets/images/NEmu.jpg';
import clientmail from '../assets/images/clientmail.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1 className="center">Mes projets personnels / universtitaires</h1>
        <h1>Administration systèmes et réseaux / Cybersécurité</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ebertinbench.github.io/portfolio?id=1" target="_blank" rel="noreferrer"><img src={juniper} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ebertinbench.github.io/portfolio?id=1" target="_blank" rel="noreferrer"><h2>Infrastructure Juniper</h2></a>
            </div>
            <div className="project">
                <a href="https://ebertinbench.github.io/portfolio?id=2" target="_blank" rel="noreferrer"><img src={cisco} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ebertinbench.github.io/portfolio?id=2" target="_blank" rel="noreferrer"><h2>Infrastructures Cisco</h2></a>
            </div>
            <div className="project">
                <a href="https://ebertinbench.github.io/portfolio?id=3" target="_blank" rel="noreferrer"><img src={AD} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ebertinbench.github.io/portfolio?id=3" target="_blank" rel="noreferrer"><h2>Active Directory</h2></a>
            </div>
            <div className="project">
                <a href="https://ebertinbench.github.io/portfolio?id=4" target="_blank" rel="noreferrer"><img src={clientmail} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ebertinbench.github.io/portfolio?id=4" target="_blank" rel="noreferrer"><h2>Client mail POP3</h2></a>
            </div>
            <div className="project">
                <a href="https://ebertinbench.github.io/portfolio?id=5" target="_blank" rel="noreferrer"><img src={pentesting} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ebertinbench.github.io/portfolio?id=5" target="_blank" rel="noreferrer"><h2>Pentesting web</h2></a>
            </div>
            <div className="project">
                <a href="https://ebertinbench.github.io/portfolio?id=6" target="_blank" rel="noreferrer"><img src={nemu} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ebertinbench.github.io/portfolio?id=6" target="_blank" rel="noreferrer"><h2>Reseau Virtuel NEmu</h2></a>
            </div>
            
        </div>
        <h1>Développement full-stack-DevOps</h1>
        <div className="projects-grid">

        </div>
    </div>
    );
}

export default Project;