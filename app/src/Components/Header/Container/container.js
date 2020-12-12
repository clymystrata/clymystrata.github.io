import './container.scss'
import Content from '../Content'
import Menu from '../Menu'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function MenuContainer (props) {
    
    return <div  className="header-container">
            <Container>
            <Row>
                <Col md={8} lg={6}>
                    <Content Title="Clymystrata" 
                    SubTitle="Nothing's been settled." 
                    Text="The world is a better place now that we've moved on from before." />
                </Col>
                <Col md={4} lg={6}>
                    <Menu />
                </Col>
            </Row>
        </Container>
        </div>
}

export default MenuContainer