import { useState, useEffect } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import IHome from '../interfaces/IHome'

const HomePage = () => {
    const [query, setQuery] = useState("london")
    const [city, setCity] = useState<IHome | undefined>(undefined)


    useEffect(() => {
        fetchApi(query)
    }, [query])

    const fetchApi = async (query: string) => {
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=5354ab076f4e9b97cdd7f40012ab5e96`)
            if (response.ok) {
                let data = await response.json()
                setCity(data)
            }
            else {
                console.log('fetching error')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Row>
                <Col md={8}>

                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>

                </Col>
            </Row>
            <Row>
                <Col id='city-info'>
                
                <div><strong>{query.toUpperCase()}</strong></div>
                <div>
                    {city?.main.temp} F
                </div>
                <div>feels like {city?.main.feels_like}</div>
                <div>Humidity: {city?.main.humidity}%</div>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage