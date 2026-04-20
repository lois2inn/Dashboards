function LoadingTable() {
    return (
        <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {[1,2,3,4,5].map(i => (
          <tr key={i}>
            <td>Loading...</td>
            <td>Loading...</td>
            <td>Loading...</td>
          </tr>
        ))}
      </tbody>

    </table>
    );
}

export default LoadingTable;