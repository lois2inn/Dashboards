import { useState } from "react";
import useUsers from "../hooks/useUsers";
import useDebounce from "../hooks/useDebounce";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import LoadingTable from "../components/LoadingTable";

function Dashboard() {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [usersPerPage, setUsersPerPage] = useState(3);

  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = users.filter(user =>
    user.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortField) return 0;
  
    const aValue =
      sortField === "company"
        ? a.company.name
        : a[sortField];
  
    const bValue =
      sortField === "company"
        ? b.company.name
        : b[sortField];
  
    if (sortOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  function handleSort(field) {
    if (sortField === field) {
      setSortOrder(
        sortOrder === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  }

    const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const startIndex = indexOfFirstUser + 1;

    const endIndex = Math.min(
        indexOfLastUser,
        sortedUsers.length
    );

    if (loading) {
      return <LoadingTable />;
    }

    if (error) {
      return <p>Error: {error}</p>;  
    }

    if (!loading && currentUsers.length === 0) {
      return (
        <div>
          <h3>No Users Found</h3>
          <p>Try adjusting your search</p>
        </div>
      );
    }

  return (
    
    <div>

    <SearchBar
      search={search}
      setSearch={setSearch}
    />

    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="name">Name</option>
      <option value="company">Company</option>
    </select>
    
    <div style={{ marginBottom: "10px" }}>
      <label>Users per page: </label>

      <select
        value={usersPerPage}
        onChange={(e) => {
          setUsersPerPage(Number(e.target.value));
          setCurrentPage(1);
        }}
      >
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </div>

    <UserList
        users={currentUsers}
        handleSort={handleSort}
        sortField={sortField}
        sortOrder={sortOrder}
    />
    
    <p>
      Showing {startIndex}–{endIndex} of{" "}
      {sortedUsers.length} users
    </p>
    
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
    />

    <div className="ticks"></div>
  </div>
  );
}


export default Dashboard;