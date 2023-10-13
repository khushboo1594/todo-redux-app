import { title } from "process";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import DisplayCounter from "./DisplayCounter";
import { useSelector, useDispatch } from "react-redux";
import { ITodo } from "../interfaces";
import { RootState } from "../redux/store";
import { delTodo, updateTodo } from "../redux/actions/todo";
import MyInput from "./MyInputField";

const DisplayTodo = () => {
  const storeTodo = useSelector((state: any) => state.todoReducers);
  console.log("storeTodo: ", storeTodo);
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState<{
    title: string;
    desc: string;
    id: string;
  }>({ title: "", desc: "", id: "" });
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  useEffect(() => {
    console.log("editTodo: ", editTodo);
    setTodoTitle(editTodo?.title);
    setTodoDesc(editTodo?.desc);
  }, [editTodo]);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="mt-3 shadow-sm">
              <Card.Body>
                <h3>All todos are here</h3>
                <ListGroup>
                  {storeTodo.map(
                    (
                      obj: { title: string; desc: string; id: string },
                      index: number
                    ) => (
                      <ListGroup.Item key={obj?.id}>
                        <h4>{obj?.title}</h4>
                        <p>{obj?.desc}</p>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => dispatch(delTodo(obj?.id))}
                        >
                          Delete
                        </Button>
                        {/* <Button
                          variant="primary"
                          size="sm"
                          className="w-auto"
                          style={{ marginLeft: "5px" }}
                          onClick={() =>
                            setEditTodo({
                              title: obj?.title,
                              desc: obj?.desc,
                              id: obj?.id,
                            })
                          }
                        >
                          Edit
                        </Button> */}
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
