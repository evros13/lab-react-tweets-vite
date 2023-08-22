import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {

  const {user, timestamp, message} = props.tweet


  return (
    <div className="tweet">
     <ProfileImage user={user}/>

      <div className="body">
        <div className="top">
          <User user={user} handle={user}/>
          <Timestamp timestamp={timestamp}/>
          
        </div>

        <Message message={message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
