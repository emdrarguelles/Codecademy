export default function TasksList({ allTasks, handleDelete }) {
    return (
      <ul>
        {allTasks.map(({ title, description, id, date }) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button onClick={() => handleDelete(id)}>X</button>
            </div>
            {!description ? null : <p>{description}</p>}
            <p>Due Date: {date}</p>
          </li>
        ))}
      </ul>
    );
  }
  