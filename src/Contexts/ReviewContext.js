// import React, { useEffect, useState } from "react";

// const ReviewContext = React.createContext();

// const ReviewProvider = ({ children }) => {
//   const [reviews, setReviews] = useState(undefined);

//   const userReviews = [{
//     type: "Restaurant",
//     title: "Poot Place",
//     details: ["great service", "tasty appetizers", "cheap drinks"],
//     review: "I love this place!",
//     date: 1
//   },
//   {
//     type: "Product",
//     title: "iPad",
//     details: ["love the screen", "light and portable", "great for drawing and graphic design"],
//     review: "I love this iPad!",
//     date: 2
//   }]

//   useEffect(() => {

//     window.localStorage.setItem("reviews", JSON.stringify(userReviews))
//   }, [userReviews])

//   return (
//     <ReviewContext.Provider value={reviews}>{children}</ReviewContext.Provider>
//   );
// };

// export { ReviewContext, ReviewProvider };