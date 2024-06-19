const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }


  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }

  const Content = () => {
    return (
      <div>
        {
          course.parts.map((part, index) => {
            return (
              <Part part={part} key={index} />
            )
          })
        }
      </div>
    )
  }

  const Total = (props) => {
    let count = 0;
    props.parts.map((part) => {
      count += part.exercises
      return count;
    })
    return (
      <p>Number of exercises {count}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total parts={course.parts} />
    </div>
  )
}

export default App