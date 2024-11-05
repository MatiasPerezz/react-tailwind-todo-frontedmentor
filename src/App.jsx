import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TodoComputed from "./TodoComputed";
import TodoCreate from "./TodoCreate";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

// const initialStateTodos = [
// 	{
// 		id: 1,
// 		title: "Complete the fucking curse",
// 		completed: true,
// 	},
// 	{
// 		id: 2,
// 		title: "Go to the Gym again",
// 		completed: true,
// 	},
// 	{
// 		id: 3,
// 		title: "10 minutes meditation",
// 		completed: true,
// 	},
// 	{
// 		id: 4,
// 		title: "Pick up groseries",
// 		completed: false,
// 	},
// 	{
// 		id: 5,
// 		title: "Complete Todo FrontendMentor",
// 		completed: false,
// 	},
// ];
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
	const result = [...list];
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const App = () => {
	const [todos, setTodos] = useState(initialStateTodos);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const createTodo = (title) => {
		const newTodo = {
			id: Date.now(),
			title: title.trim(),
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const updateTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? {
							...todo,
							completed: !todo.completed,
						}
					: todo
			)
		);
	};

	const computedItemLeft = todos.filter((todo) => !todo.completed).length;

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	const [filter, setFilter] = useState("all");

	const changeFilter = (filter) => setFilter(filter);

	const filterTodos = () => {
		switch (filter) {
			case "all":
				return todos;
			case "active":
				return todos.filter((todo) => !todo.completed);
			case "completed":
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	};

	const handleDragEnd = (result) => {
		const { destination, source } = result;
		if (!destination) return;
		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		)
			return;

		setTodos((prevTasks) =>
			reorder(prevTasks, source.index, destination.index)
		);
	};
	return (
		<div className=" min-h-screen bg-gray-200  md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 transition-all duration-1000  ">
			<Header />
			<main className="container mx-auto mt-8 md:max-w-xl">
				<TodoCreate createTodo={createTodo} />

				<DragDropContext onDragEnd={handleDragEnd}>
					<TodoList
						todos={filterTodos()}
						removeTodo={removeTodo}
						updateTodo={updateTodo}
					/>
				</DragDropContext>
				<TodoComputed
					computedItemLeft={computedItemLeft}
					clearCompleted={clearCompleted}
				/>
				<TodoFilter changeFilter={changeFilter} filter={filter} />
			</main>
			<Footer />
		</div>
	);
};
export default App;
