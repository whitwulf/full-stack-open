const Course = ({ course }) => {
  return course.map((el) => (
    <div key={el.id}>
      <Header name={el.name} />
      <Content parts={el.parts} />
    </div>
  ));
};

const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} key={part.id} />
      ))}
      <Total parts={parts} />
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {parts.map((part) => part.exercises).reduce((a, b) => a + b)}
      </p>
    </>
  );
};

export default Course;
