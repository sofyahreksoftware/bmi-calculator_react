import "./style.css";

export const Section = ({ sectionHeader, sectionBody, sectionID }) => (
  <section id={sectionID} className="section">
    <h2 className="section__header">{sectionHeader}</h2>
    <div>{sectionBody}</div>
  </section>
);
