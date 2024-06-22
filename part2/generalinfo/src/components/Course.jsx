import './Course.css'

const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {
                parts.map((eachPart) => (
                    <Part key={eachPart.id} part={eachPart} />
                ))
            }
        </div>
    )
}

const TotalCourse = ({ parts }) => {
    const total = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)
    return <p className="total">Total exercises: {total}</p>
}

const Course = ({ courses }) => {
    return (
        <div>
            {
                courses.map((eachCourse, i) => {
                    return (
                        <div key={i}>
                            <Header name={eachCourse.name} />
                            <Content parts={eachCourse.parts} />
                            <TotalCourse parts={eachCourse.parts} />
                        </div>
                    )
                })
            }

        </div>
    )

}


export default Course
