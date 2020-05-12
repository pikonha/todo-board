import React, { useState } from "react";
import styled from "styled-components";

import useTodo from "./useTodo";

const Header: React.FC = () => {
  const [description, descriptionSet] = useState("");

  const { addTodo } = useTodo();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addTodo({ description });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={(e) => descriptionSet(e.target.value)}
          placeholder="Description"
          required
          rows={3}
        />
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #aed8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding: 0 2rem;

  @media screen and (min-width: 450px) {
    padding: 0;
  }

  > * {
    padding: 0.5rem;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    color: #595959;
    outline: none;

    & + * {
      margin-top: 0.7rem;
    }
  }

  > input,
  > textarea {
    width: 100%;
    resize: none;
  }

  > button {
    background: white;
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
    }
  }
`;
