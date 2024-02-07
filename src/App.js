import { useMathJaxFormula } from "./useMathJaxFormula";
import Navigation from "./Navigatioin";
import Form from "./Form";
import { Header } from "./Header";
import { Container } from "./Container";
import { Section } from "./Section";
import { Article } from "./Article";
import { BMIEndpoints } from "./bmiEndpoints";

function App() {
  const { BMIFormula } = useMathJaxFormula();

  return (
    <div className="App">
      <Navigation />

      <Header headerName="Unlocking Health Insights: Understanding Your BMI" />

      <Container>
        <Section
          sectionHeader="Understanding BMI: Your Body Mass Index"
          sectionBody={
            <div>
              <Article
                articleID="what-is-bmi"
                articleHeader="What is BMI?"
                articleParagraph={
                  <>
                    BMI, or <em>Body Mass Index</em>, is a fundamental tool used
                    to assess an individual's body weight in relation to their
                    height. It provides a numerical value that serves as an
                    indicator of a person's overall body composition.
                    Understanding your BMI can be essential in monitoring and
                    managing your health. In this article, we will delve into
                    the meaning and importance of BMI, and encourage you to use
                    the BMI calculator provided below to gain insights into your
                    own health status.
                  </>
                }
              />

              <Article
                articleID="bmi-formula"
                articleHeader="BMI formula"
                articleParagraph={
                  <>
                    BMI stands for Body Mass Index, and it is a simple yet
                    effective method to determine whether your weight falls
                    within a healthy range for your height. It is calculated
                    using a specific formula:
                    <strong
                      className="article__highlighted"
                      dangerouslySetInnerHTML={BMIFormula}
                    ></strong>
                  </>
                }
              />

              <Article
                articleID="bmi-interpretation"
                articleHeader="How is BMI interpreted?"
                articleParagraph={
                  <>
                    The result is a numerical value, and the interpretation of
                    this value is categorized into different ranges:
                  </>
                }
                articleList={<BMIEndpoints />}
              />

              <Article
                highlighted
                articleParagraph={
                  <>
                    <strong>
                      Keep in mind that while BMI is a useful screening tool, it
                      doesn't take into account other important factors such as
                      muscle mass, bone density, and distribution of fat. It is
                      a general guideline rather than a definitive measure of
                      your health.
                    </strong>
                  </>
                }
              />
            </div>
          }
        />

        <Section
          sectionID="bmi-calculator"
          sectionHeader="Calculate your BMI"
          sectionBody={
            <div>
              <Article
                articleParagraph={
                  <>
                    To find out your BMI, use the calculator below. Simply input
                    your weight and height, and it will instantly provide you
                    with your BMI value. Remember, while BMI is a valuable tool,
                    it's just one piece of the puzzle when it comes to your
                    health. Consult with a healthcare professional for a
                    comprehensive assessment and guidance on maintaining a
                    healthy lifestyle.
                  </>
                }
              />

              <Form></Form>
            </div>
          }
        />
      </Container>
    </div>
  );
}

export default App;
