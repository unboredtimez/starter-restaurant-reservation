import { useHistory } from "react-router-dom";
import "../layout/Layout.css"

function Form({ formData, handleChange, handleSubmit }) {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50" noValidate={true} onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            required
            type="text"
            onChange={handleChange}
            value={formData.first_name}
            placeholder="First Name"
            className="form-control text-field"
            name="first_name"
          ></input>
          <input
            required
            type="text"
            onChange={handleChange}
            value={formData.last_name}
            placeholder="Last Name"
            className="form-control text-field"
            name="last_name"
          ></input>
        </div>
        <div className="mb-3 form-floating">
          <input
            required
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            maxLength="12"
            onChange={handleChange}
            value={formData.mobile_number}
            placeholder="Mobile Number"
            className="form-control text-field"
            name="mobile_number"
          ></input>
        </div>
        <div className="mb-3 form-floating">
          <input
            required
            type="date"
            onChange={handleChange}
            value={formData.reservation_date}
            placeholder="Reservation Date"
            className="form-control text-field"
            name="reservation_date"
          ></input>
        </div>{" "}
        <div className="mb-3 form-floating">
          <input
            required
            type="time"
            onChange={handleChange}
            value={formData.reservation_time}
            placeholder="Reservation Time"
            className="form-control text-field"
            name="reservation_time"
          ></input>
        </div>{" "}
        <div className="mb-3 form-floating">
          <input
            required
            type="number"
            min="1"
            onChange={handleChange}
            value={formData.people}
            placeholder="People"
            className="form-control text-field"
            name="people"
          ></input>
        </div>
        <button className="btn dark-green mx-2" type="submit">
          Submit
        </button>
        <button
          type="button"
          onClick={history.goBack}
          className="btn red-button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Form;
