//1. Create a new component about the todo app
//2. write rfce generate to component file

import { useState } from "react";

function ToDoApp() {
  //re-render: Khi mà 1 STATE bị thay đổi
  // => Biến number thành 1 state của react
  // Suy ra mỗi lần number thay đổi react sẽ re-render và người dùng sẽ thấy giá trị mới
  // const [number, setNumber] = useState(1);
  // function handleClick() {
  //   setNumber(number + 1);
  // }
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

  return (
    <div className="container">
      {/* <h1>{number}</h1>
      <button onClick={handleClick}>Tăng 1 đơn vị</button> */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button type="button" class="btn btn-dark">
          Primary
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {/* Cứ mỗi task nằm trong tasks chuyển thành 1 <tr></tr> */}
          {/* Map */}
          {tasks.map((task) => (
            <tr key={task}>
              <th scope="row">1</th>
              <td>{task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoApp;
