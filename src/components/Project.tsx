export default function Project({ data }) {
    return (
        <>
            <h4>{data.name}</h4>
            <p>{data.description}</p>
            <ul>
                {data.technologies.map((tech, j) => (
                    <li key={j}>{tech}</li>
                ))}
            </ul>
        </>
    )
}