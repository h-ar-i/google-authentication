import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const data = JSON.parse(sessionStorage.getItem("user"))
    console.log(data);

    const handleLogout = () => {
        sessionStorage.removeItem("user")
        navigate('/')
    }
    return (
        < >
            <Navbar bg="primary" >
                <Container>
                    <Navbar.Brand href="#home"><i class="fa-solid fa-l"></i> <i class="fa-duotone fa-m"></i> <i class="fa-solid fa-litecoin-sign"></i> <input type="text" className='formcontrol' placeholder='click here to search' /></Navbar.Brand>

                    <button onClick={handleLogout} className='ms-auto btn btn-danger rounded border border-white border-5'>Logout</button>
                </Container>
            </Navbar>
            <div className='log d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh" }}>
                <div className='d-flex align-items-center'>
                    <h1 style={{ fontSize: "80px" }} className='me-2 mb-0  fw-bolder'><span className='fw-bolder'>Hello</span> <span className='text-danger'>{data.name.toUpperCase()}</span></h1>
                </div>
                <h5 style={{ fontSize: "40px" }} className='mt-3'><span className='text-danger fw-bolder'>Welcome</span > To Our Website</h5>
                <img className='img-fluid' src="https://t3.ftcdn.net/jpg/00/87/97/06/360_F_87970620_Tdgw6WYdWnrZHn2uQwJpVDH4vr4PINSc.jpg" alt="" />
           
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore dolores quo expedita ullam quas. Dolores adipisci aliquam alias recusandae officiis. Veritatis praesentium possimus officia blanditiis rerum cumque sed debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis nesciunt non earum repellat quam, eos recusandae eaque dolor? In non veritatis reiciendis ipsum beatae dolor, optio ipsa consequuntur ratione.</p>
            </div>
        </>
    )
}

export default Home