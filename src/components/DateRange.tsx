import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form
      className="bg-white gap-4 rounded flex"
      onSubmit={(e) => e.preventDefault()}
    >
      <DateInput
        label="Inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
        className="ml-2 border rounded"
      />
      {inicio}
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
        className="ml-2 border rounded"
      />
      {final}
    </form>
  );
};

export default DateRange;
