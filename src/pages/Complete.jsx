import React, { useState, useEffect } from "react";
import goals from "../data/goals";
import Completed from "../components/Completed";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";


const Complete = () => {
const {
  isLoading,
  data: { goals },
} = useFetch ("https://teewhygoalon.onrender.com/api/goals");
const Goals = isLoading ? [] : goals.filter((g) => g.progress === 100);

return (
  <div className="container mt-2">
    <GoalHeader heading="Completed" />
    {isLoading && <Loading /> }
    
    <div>
      {Goals &&
      Goals.map((g) => {
        return <Completed key={g._id} {...g} />;
      })}
    </div>
  </div>
);
};

export default Complete;





//   const [Goals, setGoals] = useState([]);
//   const [isLoading, setIsLoading] =useState(true);
//   const getGoals = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/api/goals");
//     const data = await res.json()
//     setIsLoading(false);
//     const ongoingGoals = data.goals.filter((g) => g.progress < 100);
//     setGoals(ongoingGoals);
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   getGoals();
// },[]);


 