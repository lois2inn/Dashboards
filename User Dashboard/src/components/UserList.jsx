import UserRow from "./UserRow";

function UserList({
  users,
  handleSort,
  sortField,
  sortOrder
}) {
  function arrow(field) {
    if (sortField !== field) return "";
    return sortOrder === "asc" ? "↑" : "↓";
  }

  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        width: "100%",
        marginTop: "20px"
      }}
    >
      <thead>
        <tr>
          <th
            onClick={() =>
              handleSort("name")
            }
          >
            Name {arrow("name")}
          </th>

          <th
            onClick={() =>
              handleSort("email")
            }
          >
            Email {arrow("email")}
          </th>

          <th
            onClick={() =>
              handleSort("company")
            }
          >
            Company {arrow("company")}
          </th>

        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
