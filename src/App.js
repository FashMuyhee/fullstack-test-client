import { Row, Col, Container, } from 'react-bootstrap';
import './App.css';
import { Header } from './components';
import man from './asset/images/man.png'
import { Button } from './components/Styled'
import { useEffect, useState } from 'react';
import { fetchInfo, downloadCv } from './api/api';

function App() {
  const [data, setData] = useState({ })

  const handleDownload = async () => {
    const res = await downloadCv()
    console.log(res)
  }

  const loadInfo = async () => {
    const result = await fetchInfo()
    setData(result)
  }
  useEffect(() => {
    loadInfo()
  }, [])

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={6} className="left">
            <div className="wrapper">
              <div className="greeting">
                <p className="hi">{data?.greeting} I'm</p>
                <h1 className="name">
                  {data?.name}
                </h1>
                <h5>i'm a {data?.title}</h5>
                <p className="desc">Database done. Server done. Now it's time for the Server API endpoint. Let's start by creating a routes folder and adding record.js in it </p>
              </div>
              <Button onClick={handleDownload}>Download CV</Button>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <img src={man} className="man" alt="smiling-man" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
