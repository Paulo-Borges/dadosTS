import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form
      className="bg-white gap-4 rounded-sm flex p-4 "
      onSubmit={(e) => e.preventDefault()}
    >
      <DateInput
        label="Inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
        className="border rounded"
      />

      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
        className="border rounded"
      />
    </form>
  );
};

export default DateRange;
