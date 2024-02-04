import "./style.css";

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__element">
        <a className="navigation__link" href="#what-is-bmi">
          BMI - meaning
        </a>
      </li>
      <li className="navigation__element">
        <a className="navigation__link" href="#bmi-formula">
          BMI - formula
        </a>
      </li>
      <li className="navigation__element">
        <a className="navigation__link" href="#bmi-interpretation">
          BMI - interpretation
        </a>
      </li>
      <li className="navigation__element">
        <a className="navigation__link" href="#bmi-calculator">
          BMI - calculator
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
