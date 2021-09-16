import "./styles.css";
import StudentsCard from "../StudentsCard";

const Students = ({ characters }) => {
  return (
    <>
      <div className="containerStudents">
        {characters.map((stud) => (
          <li>
            <StudentsCard key={stud.name} students={stud} />{" "}
          </li>
        ))}
      </div>
    </>
  );
};

export default Students;
