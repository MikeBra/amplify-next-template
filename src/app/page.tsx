"use client"

import { Amplify } from "aws-amplify"
import outputs from "../../amplify_outputs.json"
import "@aws-amplify/ui-react/styles.css"
import TodoList from "./components/TodoList"

Amplify.configure(outputs)

export default function Home() {
	return (
		<main className="container">
			<TodoList />
			<div className="info">
				<p>🥳 App successfully hosted. Try creating a new todo.</p>
				<a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
					Review next steps of this tutorial.
				</a>
			</div>
		</main>
	)
}
