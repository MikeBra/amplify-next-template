"use client"

import { useState, useEffect } from "react"
import "./app.css"
import { Amplify } from "aws-amplify"
import outputs from "../../amplify_outputs.json"
import "@aws-amplify/ui-react/styles.css"
import { Todo } from "@/types/todo"

Amplify.configure(outputs)

export default function App() {
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
		<main>
			<h1>My todos</h1>
			<button onClick={createTodo}>+ new</button>
			<ul>
				{todos.map((todo) => (
					<li onClick={() => deleteTodo(todo.id)} key={todo.id}>
						{todo.title}
					</li>
				))}
			</ul>
			<div>
				🥳 App successfully hosted. Try creating a new todo.
				<br />
				<a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
					Review next steps of this tutorial.
				</a>
			</div>
		</main>
	)
}
