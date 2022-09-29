import { useState } from "react";
import Controls from "./controls";
import Statistic from "./Statistic";
import Section from "./Section";
import Notifycation from "./Notifycation";

export default function Feedback() {

     const[good, setGood] = useState(0);
    const[neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onIncrement = (e) => {
        const {name} = e.target
        switch (name) {
            case "good":
               setGood(prev => prev + 1); 
                break;
         case "neutral":
               setNeutral(prev => prev + 1); 
                break;
             case "bad":
               setBad(prev => prev + 1); 
                break;
            default:
                break;
        };
    };
    
    const countTotalFeedback = () => { 
        return good + neutral + bad
    };

      const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        };
        const value = good
        const result = (value / total) * 100;
        return Number(result.toFixed())
    };
    return (
         <>
              <Section title="Please leave feedback">
                   <Controls onIncrement={onIncrement} options={Object.keys({good, neutral, bad})} />
                  {countTotalFeedback() ? <Statistic good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} totalPercent={countPositiveFeedbackPercentage()} /> :
                           <Notifycation message={"There is no feedback"} />}
              </Section>
            
          </>
    );
};
