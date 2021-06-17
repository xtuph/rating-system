import '../App.css';
import { Link } from "react-router-dom";
import { useGlobalStore } from '../GlobalStore';

// used for booking page with button to add a review
export const HomeScreen = () => {
  // declare state variables
  const [state, dispatch] = useGlobalStore();
  // get all ratings which are stored in the global state variable
  const ratings = state.ratings;

  // calculate average of all ratings given to this booking
  var total = 0;
  for (var i = 0; i < ratings.length; i++){
    total += ratings[i]
  }
  const avgRating = total/ratings.length;

  // return component with title "booking" and the average rating plus number of ratings
  return (
    <div>
      <h1>Booking</h1>
      <p>{avgRating ? avgRating.toFixed(1) : 0}/5 stars ({ratings.length} ratings)</p>
      <div className="btn-row">
        <Link to="/rating-system/rating"><button className="btn">RATE</button></Link>
      </div>
    </div>
  )
}
