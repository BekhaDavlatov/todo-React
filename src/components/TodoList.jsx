import TodoItem from "./TodoItem";
const TodoList = (props) => {
    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,

    } = props

    const hasTasks = true;
    if (!hasTasks) {
        return <div className="todo__empty-message"></div>
    } return (
        <ul className="todo__list">
            {tasks.map((tasks) => (
                <TodoItem
                    className="todo__item"
                    id={tasks.id}
                    title={tasks.title}
                    isDone={tasks.isDone}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                />
            ))}
        </ul>
    )

}

export default TodoList;