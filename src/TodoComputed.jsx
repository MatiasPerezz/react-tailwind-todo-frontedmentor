const TodoComputed = ({ computedItemLeft, clearCompleted }) => {
	return (
		<div>
			<section
				className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all
			duration-1000"
			>
				<span className="text-gray-400 dark:text-gray-300">
					{computedItemLeft} item left
				</span>
				<button
					className="text-gray-400 dark:text-gray-300"
					onClick={clearCompleted}
				>
					Clear Completed
				</button>
			</section>
		</div>
	);
};
export default TodoComputed;
