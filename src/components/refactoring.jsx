// import { Component, useState } from "react";
// import Controls from "./controls";
// import Statistic from "./Statistic";
// import Section from "./Section";
// import Notifycation from "./Notifycation";


// export default function refactoring() {

//      const[good, setGood] = useState(0);
//     const[neutral, setNeutral] = useState(0);
//     const [bad, setBad] = useState(0);

   

//     const onIncrement = () => {
//         setGood(prev => prev + 1);
//         setNeutral(prev => prev + 1);
//         setBad(prev => prev + 1);
//     };
//     const countTotalFeedback = () => { 
//         return good + neutral + bad
//     };

//       const countPositiveFeedbackPercentage = () => {
//         const total = countTotalFeedback();
//         if (!total) {
//             return 0;
//         };
//         const value = good
//         const result = (value / total) * 100;
//         return Number(result.toFixed())
//     };

//     return (
//          <>
//               <Section title="Please leave feedback">
//                    <Controls onIncrement={onIncrement} options={{good, neutral, bad}} />
//                   {total ? <Statistic good={good} neutral={neutral} bad={bad} total={total} totalPercent={totalPercent} /> :
//                            <Notifycation message={"There is no feedback"} />}
//               </Section>
            
//           </>
//     );
// };
