import { useNavigate } from "react-router-dom";

function UserRow({ user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${user.id}`);
  };
  
  return (
    <tr onClick={handleClick}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.company?.name || "N/A"}</td>
    </tr>
  );
}

export default UserRow;