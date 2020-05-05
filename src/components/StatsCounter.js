import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClockLoader from "react-spinners/ClockLoader";
import NumberFormat from "react-number-format";

// import App from "../App.js";

const StatsCounter = () => {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .all([
        axios.get("https://disease.sh/v2/all"),
        axios.get("https://disease.sh/v2/countries"),
      ])
      .then((resonseArr) => {
        setLatest(resonseArr[0].data);
        setResults(resonseArr[1].data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();
  // const newLastDate = date.toLocaleString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.includes(searchCountries)
      : item;
  });

  //Reusuable Component
  const countries = filterCountries.map((data, i) => {
    return (
      <Card
        key={i}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's Cases {data.todayCases}</Card.Text>
          <Card.Text>Today's Deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  //responsive columns for countries
  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ClockLoader size={50} color={"blue"} loading={loading} />
      </div>
      <CardDeck>
        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              <NumberFormat
                displayType={"text"}
                value={latest.cases}
                thousandSeparator={true}
                style={{ fontSize: "35px" }}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              <NumberFormat
                displayType={"text"}
                value={latest.deaths}
                thousandSeparator={true}
                style={{ fontSize: "35px" }}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              <NumberFormat
                displayType={"text"}
                value={latest.recovered}
                thousandSeparator={true}
                style={{ fontSize: "35px" }}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Form>
        <div class="container mt-5">
          <Form.Group controlId="formGroupSearch">
            <Form.Control
              type="text"
              placeholder="Search a country"
              onChange={(e) => setSearchCountries(e.target.value)}
            />
          </Form.Group>
        </div>
      </Form>
      <Container>
        <Row>
          <Col>
            <div class="columns-scroll">
              <Columns queries={queries}>{countries}</Columns>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatsCounter;
