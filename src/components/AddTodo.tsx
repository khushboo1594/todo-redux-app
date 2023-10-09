import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import MyInput from "./MyInputField";
import MyButton from "./MyButton";
import DisplayTodo from "./DisplayTodo";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../redux/actions/actionsTypes";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const selectedData = useSelector((state: any) => state.todoReducers);
  console.log("selectedData: ", selectedData);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     console.log("todoDesc: ", todoDesc);
  //     console.log("todoTitle: ", todoTitle);
  //   }, [todoTitle, todoDesc]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("todoDesc: ", todoDesc);
    console.log("todoTitle: ", todoTitle);
    // set todo to store
    setTodoTitle("");
    setTodoDesc("");
    dispatch({
      type: ADD_TODO,
      payload: { title: todoTitle, description: todoDesc },
    });
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <h3>Add Todo !!</h3>
                <Form onSubmit={handleSubmit}>
                  {/* title */}
                  <MyInput
                    label="Todo Title"
                    type="text"
                    placeholder="Enter here"
                    value={todoTitle}
                    requiredField={true}
                    setValue={setTodoTitle}
                    minLength={1}
                    maxLength={50}
                    disabled={false}
                  />
                  {/* description */}
                  <MyInput
                    label="Todo Description"
                    type="textarea"
                    placeholder="Enter here"
                    value={todoDesc}
                    requiredField={true}
                    setValue={setTodoDesc}
                    minLength={1}
                    maxLength={50}
                    disabled={false}
                  />
                  <Container className="text-center my-3">
                    <MyButton btnText="Add Todo" type="submit" />
                  </Container>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTodo;
