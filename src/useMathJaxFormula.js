import { useEffect } from "react";

export const useMathJaxFormula = () => {
  const BMIFormula = {
    __html: `\\[ \\text{formula} = \\frac{\\text{weight(kg)}}{\\text{height(m)}^2}\\]`,
  };

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return { BMIFormula };
};

