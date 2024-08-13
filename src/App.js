// src/App.js
import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Apis, { endpoints } from "./configs/Apis";
import MySpinner from "./components/MySpinner";

const App = () => {
  const [user, setUser] = useState({
    age: "",
    job: "",
    marital: "",
    education: "",
    default: "",
    balance: "",
    housing: "",
    loan: "",
    contact: "",
    day: "",
    month: "",
    duration: "",
    campaign: "",
    pdays: "",
    previous: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const register = (evt) => {
    evt.preventDefault();
    const process = async () => {
      setLoading(true);
      try {
        console.log(user);
        let res = await Apis.post(endpoints["predict"], {
          ...user,
        });
        console.log(res.data);
        setResult(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    process();
  };
  const change = (evt, field) => {
    setUser((current) => {
      return { ...current, [field]: evt.target.value };
    });
  };

  return (
    <>
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-md-offset-4">
              <div class="form-container">
                <h1 className="text-center text-info mt-2">
                  Customer Purchase Prediction
                </h1>

                <Form onSubmit={register}>
                  <Row>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "age")}
                        placeholder="Age"
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Job</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "job")}
                        placeholder="Job"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Marital</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "marital")}
                        placeholder="marital"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Education</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "education")}
                        placeholder="education"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Default</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "default")}
                        placeholder="default"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Balance</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "balance")}
                        placeholder="balance"
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Housing</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "housing")}
                        placeholder="housing"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Loan</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "loan")}
                        placeholder="loan"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Contact</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "contact")}
                        placeholder="contact"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Day</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "day")}
                        placeholder="day"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Month</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "month")}
                        placeholder="month"
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Duration</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "duration")}
                        placeholder="duration"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Campaign</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "campaign")}
                        placeholder="campaign"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Pdays</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "pdays")}
                        placeholder="pdays"
                      />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Previous</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => change(e, "previous")}
                        placeholder="previous"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} className="mb-3">
                      {loading === true ? (
                        <MySpinner />
                      ) : (
                        <Button variant="info" type="submit">
                          Prediction
                        </Button>
                      )}
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Text>
                      {result && result.prediction === true && (
                        <Alert variant="success">
                          Customer is likely to subscribe to financial services.
                        </Alert>
                      )}
                      {result && result.prediction === false && (
                        <Alert variant="danger">
                          Customer is not likely to subscribe to financial
                          services.
                        </Alert>
                      )}
                    </Form.Text>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
