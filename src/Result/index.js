import "./style.css";
import { useBMICategory } from "./useBMICategory";

const Result = ({ BMIResult }) => {
  const { category } = useBMICategory(BMIResult);

  return (
    BMIResult && (
      <div className="result">
        <p>
          Your BMI is{" "}
          <strong>{`${Number(BMIResult).toLocaleString("Pl-pl")}`}</strong>
        </p>
        <p>
          You are <strong>{category}</strong>
        </p>
      </div>
    )
  );
};

export default Result;
