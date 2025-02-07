// import React from "react";

// function AddCalendar() {
//   return (
//     <div>
//       <h6>Asignar Horario</h6>
//       <div className="Hours">
//         <label htmlFor="horaInicio">
//           <h6>inicio:</h6>
//         </label>
//         <input
//           type="time"
//           id="horaInicio"
//           name="horaInicio"
//           value={""}
//           onChange={""}
//         />

//         <label htmlFor="horaFin">
//           <h6>fin:</h6>
//         </label>
//         <input
//           type="time"
//           id="horaFin"
//           name="horaFin"
//           value={""}
//           onChange={""}
//         />
//         <button type="submit" className="btn btn-primary btn-sm">
//           Asignar
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddCalendar;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCalendar } from "../../../Store/CreateCalendarSlice";

function AddCalendar({ barberId }) {
  const [start, setStart] = useState("");
  const [final, setFinal] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createCalendar({
        id: barberId,
        start,
        final,
      })
    );
    setStart("");
    setFinal("");
  };

  return (
    <div>
      <h6>Asignar Horario</h6>
      <form onSubmit={handleSubmit}>
        <div className="Hours">
          <label htmlFor="horaInicio">
            <h6>inicio:</h6>
          </label>
          <input
            type="time"
            id="horaInicio"
            name="horaInicio"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />

          <label htmlFor="horaFin">
            <h6>fin:</h6>
          </label>
          <input
            type="time"
            id="horaFin"
            name="horaFin"
            value={final}
            onChange={(e) => setFinal(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            Asignar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCalendar;
