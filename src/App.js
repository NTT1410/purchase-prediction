// src/App.js
import React, { useState } from "react";
import axios from "axios";
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
  const [err, setErr] = useState(null);
  const register = (evt) => {
    evt.preventDefault();

    const process = async () => {
      setLoading(true);
      try {
        let res = await Apis.post(endpoints["predict"], user);
        console.log(res.data);
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
              <div class="form-container form-signup">
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
                        // onChange={(e) => change(e, "lastName")}
                        placeholder="Job"
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
