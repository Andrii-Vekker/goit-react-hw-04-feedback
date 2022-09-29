import { Component } from "react";
import Controls from "./controls";
import Statistic from "./Statistic";
import Section from "./Section";
import Notifycation from "./Notifycation";

export class Feedback extends Component {
  
    state = {
        good: 0,
        neutral: 0,
        bad: 0, 
    };

    onIncrement = ({ target }) => {
        this.setState((prev) => {
            const { name } = target;
            return { [name]: prev[name] + 1 }
            
        });
    };

countTotalFeedback() {
         const {good, neutral, bad} = this.state   
        return good + neutral + bad
    };

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        };
        const value = this.state.good;
        const result = (value / total) * 100;
        console.log(result)
        return Number(result.toFixed())
    };

    render() {
        const { onIncrement } = this
        const total = this.countTotalFeedback();
        const totalPercent = this.countPositiveFeedbackPercentage();
        const {good, neutral, bad} = this.state
      return (
          <>
              <Section title="Please leave feedback">
                   <Controls onIncrement={onIncrement} options={Object.keys(this.state)} />
                  {total ? <Statistic good={good} neutral={neutral} bad={bad} total={total} totalPercent={totalPercent} /> :
                           <Notifycation message={"There is no feedback"} />}
              </Section>
            
          </>
      );
    };
};

  

