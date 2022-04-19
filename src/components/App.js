import React from "react";
import Header from "./Header";
import ProduceControl from "./ProduceControl";
import ScheduleControl from "./ScheduleControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ProduceControl />
      <ScheduleControl />
    </React.Fragment>
  );
}

export default App;
