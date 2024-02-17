import CrossIcon from './components/icons/CrossIcon';
import MoonIcon from './components/icons/MoonIcon';

const App = () => {
    return (
        <div
            className=" min-h-screen bg-gray-200  bg-[url('./assets/images/bg-mobile-light.jpg')] 
            bg-contain bg-no-repeat "
        >
            <header className="container mx-auto pax-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl  letter-spacing font-semibold tracking-[0.3em]">
                        TODO
                    </h1>
                    <button>
                        <MoonIcon />
                    </button>
                </div>
                <form className="flex bg-white rounded-md overflow-hidden mt-8 py-4 px-4 gap-4 items-center">
                    <span className="rounded-full border-2 inline-block h-5 w-5"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new ToDo"
                    />
                </form>
            </header>

            <main className="container mx-auto mt-6 ">
                <div className="bg-white rounded-md [&>article]:px-4">
                    <article className="flex gap-4 py-4  border-b-gray-300 border-b">
                        <button className="flex-none rounded-full border-2 h-5 w-5 inline-block"></button>
                        <p className="flex-none text-gray-500 grow">
                            Complete Online Javascript curse
                        </p>
                        <button className="">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 py-4  border-b-gray-300 border-b">
                        <button className="flex-none rounded-full border-2 h-5 w-5 inline-block"></button>
                        <p className="flex-none text-gray-500 grow">
                            Complete Online Javascript curse
                        </p>
                        <button className="">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 py-4  border-b-gray-300 border-b">
                        <button className="flex-none rounded-full border-2 h-5 w-5 inline-block"></button>
                        <p className="flex-none text-gray-500 grow">
                            Complete Online Javascript curse
                        </p>
                        <button className="">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 item left</span>
                        <button className="text-gray-400">Clear Completed</button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto pax-4">
                <div className=" flex gap-4 bg-white mt-8 p-4 rounded-md justify-center">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <section className="text-center">Drag and drop to reorder list</section>
        </div>
    );
};
export default App;
