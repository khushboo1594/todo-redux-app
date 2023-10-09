import { title } from "process";
import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import DisplayCounter from "./DisplayCounter";
import { useSelector } from "react-redux";
const DisplayTodo = () => {
  const [todos, setTodos] = useState([useSelector((state: any) => state)]);
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // console.log('todos: ', todos);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="mt-3 shadow-sm">
              <Card.Body>
                <h3>All todos are here</h3>
                <ListGroup>
                  {todos.map(
                    (obj: { title: string; desc: string }, index: number) => (
                      <ListGroup.Item key={index}>
                        <h4>{obj?.title}</h4>
                        <p>{obj?.desc}</p>
                      </ListGroup.Item>
                    )
                  )}
                </ListGroup>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>
      </Container>
      <DisplayCounter />{" "}
    </>
  );
};

export default DisplayTodo;
