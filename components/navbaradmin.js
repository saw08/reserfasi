import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-bootstrap';

function navbarAdmin() {
    return (
        < Navbar id="header" className="navbar-dark d-flex align-items-cente" expand="lg">
            <Container className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                <Navbar.Brand href="#home">

                    <img
                        className='logo me-auto me-lg-0'
                        alt=""
                        src="/logo.png"
                        width="50"
                        height="50"
                    />{'  '}
                    {/* <h4 className='text-white text-start p-2'>Warung kemarang</h4> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-header " >
                        <Nav.Link className='nav-link scrollto' href="../">
                            <h4 className='text-white text-center'><u>Warung kemarang</u></h4>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/home">
                            <h5 className='text-white text-start'>Home</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/pesanan">
                            <h5 className='text-white text-start'>Pesanan</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/data-pesanan">
                            <h5 className='text-white text-start'>Data Pesanan</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-ruang">
                            <h5 className='text-white text-start'>Ruang</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-paket">
                            <h5 className='text-white text-start'>Paket</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-hiburan">
                            <h5 className='text-white text-start'>Hiburan</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-album">
                            <h5 className='text-white text-start'>Album</h5>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbarAdmin;