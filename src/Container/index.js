import "./style.css";

export const Container = ({ children, navHidden }) => (
  <main className={`container ${!navHidden ? "container--dispaced" : ""}`}>
    {children}
  </main>
);
