import { Student } from "../../types/student";
import { Column } from "../../types/table";

type TableProps = {
  columns?: Column[];
  dataSources?: Student[];
};

function Table({ columns = [], dataSources = [] }: TableProps) {
  return (
    <table>
      {/* title */}
      <thead>
        {columns.map((column) => (
          <th>{column.title}</th>
        ))}
      </thead>
      {/* content */}
      <tbody>
        {dataSources.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
