import { ChangeEvent, FormEvent, useState } from 'react'

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoApp = () => {
    const [newTask, setNewTask] = useState("");
    const [todo, setTodos] = useState<Todo[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    };

    const handleNewTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.preventDefault)

        if (!newTask.trim())
            return;
        setTodos(
            todo.concat({
                id: todo.length + 1,
                text: newTask,
                completed: false
            })
        );
        setNewTask('')
    }




    const toggleTodo = (id: number) => setTodos(todo.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo
    }))




    return (
        <div>
            <form onSubmit={handleNewTodo}>
                <input type="text"
                    value={newTask}
                    onChange={handleChange}
                    placeholder="What needs to be done" />
                <button>Add Todo</button>
            </form>
            <div>
                {todo.map((todo) => (
                    <div key={'todo_${todo.id}'}>
                        <input checked={todo.completed}
                            type="checkbox"
                            onChange={(e) => toggleTodo(todo.id)} />
                        <span>{todo.text}</span>
                        {todo.completed && <span>Completed</span>}
                        <button>delete</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TodoApp
