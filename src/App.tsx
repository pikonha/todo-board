import React from "react";

import Header from "./Header";
import TodoBoard from "./TodoBoard";
import useTodo from "./useTodo";

function App() {
  useTodo();

  return (
    <main style={{ height: "100%" }}>
      <Header />
      <TodoBoard />
    </main>
  );
}

export default App;
