import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
	const [title, setTitle] = useState("");
	const handleSubmitAddTodo = (e) => {
		e.preventDefault();
		if (!title.trim()) {
			return setTitle("");
		}
		createTodo(title);
		setTitle("");
	};
	return (
		<form
			onSubmit={handleSubmitAddTodo}
			className="flex bg-white rounded-md overflow-hidden mt-8 py-4 px-4 gap-4 items-center dark:bg-gray-800 transition-all
			duration-1000"
		>
			<span className="rounded-full border-2 inline-block h-5 w-5"></span>
			<input
				className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all
			duration-1000"
				type="text"
				placeholder="Create a new ToDo"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</form>
	);
};
export default TodoCreate;
