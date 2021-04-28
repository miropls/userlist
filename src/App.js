import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(data => setUsers(data.data))
    }, [])

  return (
    <div className="App">
      <table>
        <tbody>
          {
            users.map((user, index) =>
            <tr key={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} alt="kuva"></img></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
