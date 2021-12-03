import { useState, useEffect } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import IHome from '../interfaces/IHome'

const HomePage = () => {
    const [query , setQuery] = useState('')
    const [city, setCity] = useState<IHome | string | string[] | undefined>('')


    useEffect(() => {
        fetchApi()
      }, [query])

      const fetchApi = async () => {
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=5354ab076f4e9b97cdd7f40012ab5e96`)
            if (response.ok) {
                let data = await response.json()
                setCity(data.data)
            }
            else{
                console.log('fetching error')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <Container>
            <Row>
            <Col md={8}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={e => setCity(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <div>
                    {city}
                </div>
            </Row>
        </Container>
    )
}

export default HomePage