export const useBMICategory = (BMIResult) => {
  const result = Number(BMIResult);
  let category;
  
  switch (true) {
    case result < 18.5:
      category = "underweight";
      break;
    case result >= 18.5 && result < 24.9:
      category = "normal weight";
      break;
    case result >= 24.9 && result < 29.9:
      category = "overweight";
      break;
    case result >= 29.9 && result < 34.9:
      category = "obesity class I (Moderate obesity)";
      break;
    case result >= 34.9 && result < 39.9:
      category = "obesity class II (Severe obesity)";
      break;
    case result >= 39.9:
      category = "obesity class III (Very severe obesity)";
      break;

    default:
      category = "indefinite category";
  }

  return { category };
};
