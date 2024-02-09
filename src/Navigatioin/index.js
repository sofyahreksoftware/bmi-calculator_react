import "./style.css";

const Navigation = ({ navHidden, setNavHidden }) => {
  const toggleNavigationVisible = () => {
    setNavHidden((navHidden) => !navHidden);
  };

  return (
    <div>
      <button
        className={"nav__menuButton"}
        onClick={() => {
          toggleNavigationVisible();
        }}
      >
        <div className="nav__menuBar"></div>
        <div className="nav__menuBar"></div>
        <div className="nav__menuBar"></div>
      </button>
      <nav className={`nav ${navHidden ? "nav__hidden" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#what-is-bmi">
              BMI - meaning
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#bmi-formula">
              BMI - formula
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#bmi-interpretation">
              BMI - interpretation
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#bmi-calculator">
              BMI - calculator
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
