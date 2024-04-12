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
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  function handleInputChange(event) {
    // event => event này của ai || Kích hoạt trong ô input
    //Lấy giá trị người dùng nhập => setTaskName Luư giá trị vào đấy
    setTaskName(event.target.value);
  }
  function handleAddNewTask() {
    //trước khi mà nhập vào thì cần biết lấy giá trị ô input ở đâu => taskName
    setTasks([...tasks, taskName]); // lấy lại danh sách cũ task ở trên , và gán giá trị mới vào taskName
    setTaskName(""); // reset lại ô trống ban đầu
  }
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
          value={taskName} //Gắn giá trị của taskName
          onChange={handleInputChange}
        />
        <button type="button" class="btn btn-dark" onClick={handleAddNewTask}>
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
          {/* Mỗi 1 task là con của 1 tasks */}
          {/* Index đếm count cho id do react hỗ trợ */}
          {tasks.map((task, index) => (
            <tr key={task}>
              <th scope="row">{index + 1}</th>
              <td>{task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoApp;
