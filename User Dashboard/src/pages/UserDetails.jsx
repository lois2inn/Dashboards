import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading user...</p>;


  return (
    <div className="user-details">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <UserCard user={user} />
    </div>
  );
}


export default UserDetails;