import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">BMI-calculator</legend>

      <label className="form__label">
        <span className="form__labelText">Enter your height:</span>
        <span className="form__valueUnit">
          <input
            className="form__input"
            name="height"
            type="number"
            step="0.01"
            placeholder="1,64"
            required
          />
          m
        </span>{" "}
      </label>
      <br />

      <label className="form__label">
        <span className="form__labelText">Enter your weight:</span>
        <span className="form__valueUnit">
          <input
            className="form__input"
            required
            name="weight"
            type="number"
            step="0.001"
            placeholder="70,000"
          />
          kg
        </span>
      </label>
    </fieldset>
    <button className="form__button">Calculate!</button>
  </form>
);

export default Form;
