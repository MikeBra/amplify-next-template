"use client"

import { useState, useEffect } from "react"
import { Todo } from "@/types/todo"

export default function TodoList() {
	const [todos, setTodos] = useState<Todo[]>([])

	useEffect(() => {
		listTodos()
	}, [])

	function listTodos() {
		// For now, just return the current todos from state
		return todos
	}

	function createTodo() {
		const title = window.prompt("Todo title")
		if (!title) return

		const now = new Date().toISOString()
		const todo: Todo = {
			id: crypto.randomUUID(),
			title: title,
			completed: false,
			createdAt: now,
			updatedAt: now,
		}

		// Update state with the new todo
		setTodos((prevTodos) => [...prevTodos, todo])
	}

	function deleteTodo(id: string) {
		// Update state by filtering out the todo with the matching id
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
	}

	return (
		<div className="todo-list">
			<h1>My todos</h1>
			<button onClick={createTodo}>+ new</button>
			<ul>
				{todos.map((todo) => (
					<li onClick={() => deleteTodo(todo.id)} key={todo.id}>
						{todo.title}
					</li>
				))}
			</ul>
		</div>
	)
}
