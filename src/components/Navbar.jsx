import React from 'react'
// import Image from 'react-bootstrap/Image';

function Navbar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#hero">
                        {/* <Image src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                            Accueil
                    </a>
                    <a className="navbar-brand" href="#about">
                        {/* <Image src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                            À propos
                    </a>
                    <a className="navbar-brand" href="#skills">
                        {/* <Image src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                            Compétences
                    </a>
                    <a className="navbar-brand" href="#projects">
                        {/* <Image src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                            Projets
                    </a>
                    <a className="navbar-brand" href="#contact">
                        {/* <Image src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                            Contact
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar