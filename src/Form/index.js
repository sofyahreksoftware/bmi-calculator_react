import "./style.css";

const Form = ({
  weight,
  height,
  setWeight,
  setHeight,
  BMIResult,
  setBMIResult,
}) => {
  const calculateBMI = () => {
    let result;
    result = weight / height ** 2;
    setBMIResult(result.toFixed(2));

    setWeight("");
    setHeight("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateBMI();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">BMI-calculator</legend>

        <label className="form__label">
          <span className="form__labelText">Enter your height:</span>
          <span className="form__valueUnit">
            <input
              className="form__input"
              required
              name="height"
              type="number"
              step="0.01"
              placeholder="1,64"
              value={height}
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            />
            m
          </span>
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
              value={weight}
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
            kg
          </span>
        </label>
      </fieldset>
      <button className="form__button">Calculate!</button>
    </form>
  );
};

export default Form;
