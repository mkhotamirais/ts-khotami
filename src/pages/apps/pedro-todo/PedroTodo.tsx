import React, { useState } from "react";

type tTask = { taskName: string; deadline: number };

export default function PedroTodo() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<tTask[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === "task" ? setTask(e.target.value) : setDeadline(Number(e.target.value));
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };
  const deleteTask = (p: string) => {
    setTodoList(todoList.filter((t) => t.taskName !== p));
  };

  return (
    <div className="border rounded p-2">
      Todo
      <div>
        <input
          type="text"
          placeholder="task name"
          value={task}
          name="task"
          onChange={handleChange}
          className="border rounded"
        />
        <input
          type="number"
          placeholder="deadline"
          value={deadline}
          name="deadline"
          onChange={handleChange}
          className="border rounded"
        />
        <button type="button" onClick={addTask}>
          add task
        </button>
      </div>
      <div>
        {todoList.map((task: tTask, i: number) => (
          <TodoTask key={i} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  task: tTask;
  // deleteTask(): void
  deleteTask: (p: string) => void;
};

function TodoTask({ task, deleteTask }: Props) {
  return (
    <div>
      {task.taskName} - {task.deadline}
      <button type="button" onClick={() => deleteTask(task.taskName)}>
        delete
      </button>
    </div>
  );
}
