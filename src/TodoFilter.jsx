const TodoFilter = ({ changeFilter, filter }) => {
	return (
		<section className="container mx-auto mt-8">
			<div
				className=" flex gap-4 bg-white rounded-t-md mt-8 p-4 rounded-b-md justify-center dark:bg-gray-800 transition-all
			duration-1000"
			>
				<button
					className={`${filter === "all" ? "text-blue-600 hover:text-gray-500" : "text-gray-300 dark:text-gray-300 hover:text-blue-600"}`}
					onClick={() => {
						changeFilter("all");
					}}
				>
					All
				</button>
				<button
					className={`${filter === "active" ? "text-blue-600 hover:text-gray-500" : "text-gray-400 dark:text-gray-300 hover:text-blue-600"}`}
					onClick={() => {
						changeFilter("active");
					}}
				>
					Active
				</button>
				<button
					className={`${filter === "completed" ? "text-blue-600 hover:text-gray-500" : "text-gray-400 dark:text-gray-300 hover:text-blue-600"}`}
					onClick={() => {
						changeFilter("completed");
					}}
				>
					Completed
				</button>
			</div>
		</section>
	);
};
export default TodoFilter;
