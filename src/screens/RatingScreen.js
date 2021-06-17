import '../App.css';
import { useState } from 'react';
import { useGlobalStore } from '../GlobalStore';
import star_black_24dp from '../assets/star_black_24dp.svg';
import star_outline_black_24dp from '../assets/star_outline_black_24dp.svg';
import { Link } from "react-router-dom";

// 0: 'experience'
// 1: 'communication'
// 2: 'accuracy'
// 3: 'timeliness'
// 4: 'stewardship'
const messages = {
  0: "Please rate your overall experience you had with your booking.",
  1: "Did this person use clear language and explain exactly what they were requesting? Are they responding to follow-up questions in a timely manner?",
  2: "Did this person accurately describe what they were planning to do during land access? Was the party size correct or exceeded? Did they undertake activities they did not specify in the request?",
  3: "Did this user keep to the timelines of the access request? Did they check-in and check out at the appropriate time?",
  4: "How did this recreational user leave things on your land after the trip? Were instructions followed? Did they cause damage and leave a mess or did they clean up after themselves?",
  noRating: "Please select a rating!",
}

const ratingNames = {
  0: "Experience",
  1: "Communication",
  2: "Accuracy",
  3: "Timeliness",
  4: "Stewardship",
  5: "Summary",
}

// store 5 rating inputs from user
const allRatings = [];

// rating screen that asks for 5 different rating inputs for booking from user
export const RatingScreen = (props) => {
  // declare state variables
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [screen, setScreen] = useState(0);
  const [showNoRatingMessage, setShowNoRatingMessage] = useState(false);
  const [state, dispatch] = useGlobalStore();

  // get the current mess/question for the current screen
  const message = messages[screen];
  // set no rating message if user does not select a rating before clicking next
  const noRatingMessage = showNoRatingMessage ? messages.noRating : "";

  // get the previously store ratings
  const prevRatings = state.ratings;

  // determine if it is the last screen (summary screen)
  const isLastScreen = screen >= 5 ? true : false;

  // calculate the average of the 5 ratings if it is the last screen
  let avg = 0;
  if (isLastScreen) {
    let total = 0;
    for (var i = 0; i < allRatings.length; i++){
      total += allRatings[i]
    }
    avg = total/allRatings.length;
  }

  return (
    <div>
       <h1>Rate your experience</h1>   
       <h2>{ratingNames[screen]}</h2>     
        {isLastScreen ? (
          <div>
            <div className="rating-row">
              <div>{ratingNames[0]}</div>
              <div>{allRatings[0]}</div>
            </div>
            <div className="rating-row">
              <div>{ratingNames[1]}</div>
              <div>{allRatings[1]}</div>
            </div>
            <div className="rating-row">
              <div>{ratingNames[2]}</div>
              <div>{allRatings[2]}</div>
            </div>
            <div className="rating-row">
              <div>{ratingNames[3]}</div>
              <div>{allRatings[3]}</div>
            </div>
            <div className="rating-row">
              <div>{ratingNames[4]}</div>
              <div>{allRatings[4]}</div>
            </div>
            <div className="btn-row">
              <Link to="/rating-system/"><button className="btn" onClick={() => {
                prevRatings.push(avg)
                dispatch({ratings: prevRatings})
                }}>SUBMIT</button></Link>
            </div>
          </div>
          
        ) : (
          <div>
            <p className="message">{message}</p>
            <div className="star-row">
              <img src={rating >= 1 ? star_black_24dp : (hover >= 1 ? star_black_24dp : star_outline_black_24dp)} alt="star1" className="star" onClick={() => setRating(1)} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}/>
              <img src={rating >= 2 ? star_black_24dp : (hover >= 2 ? star_black_24dp : star_outline_black_24dp)} alt="star2" className="star" onClick={() => setRating(2)} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)}/>
              <img src={rating >= 3 ? star_black_24dp : (hover >= 3 ? star_black_24dp : star_outline_black_24dp)} alt="star3" className="star" onClick={() => setRating(3)} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}/>
              <img src={rating >= 4 ? star_black_24dp : (hover >= 4 ? star_black_24dp : star_outline_black_24dp)} alt="star4" className="star" onClick={() => setRating(4)} onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)}/>
              <img src={rating >= 5 ? star_black_24dp : (hover >= 5 ? star_black_24dp : star_outline_black_24dp)} alt="star5" className="star" onClick={() => setRating(5)} onMouseEnter={() => setHover(5)} onMouseLeave={() => setHover(0)}/>
            </div>
            <p>{noRatingMessage}</p>
            <div className="btn-row">
              <button type="button" className="btn" onClick={() => {
                if (rating > 0) {
                  allRatings.push(rating);
                  setScreen(screen+1);
                  setRating(0);
                  setShowNoRatingMessage(false);
                } else {
                  setShowNoRatingMessage(true);
                }
                }}>NEXT</button>
            </div>
          </div>
        )} 
    </div>
  );
}
