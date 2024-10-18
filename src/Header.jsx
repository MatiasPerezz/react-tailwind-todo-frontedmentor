import { useEffect, useState } from "react";
import IconMoon from "./components/icons/IconMoon";
import IconSun from "./components/icons/IconSun";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
	const [darkMode, setDarkmode] = useState(inicialStateDarkMode);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "ligth");
		}
	}, [darkMode]);

	return (
		<header className="container mx-auto pax-4 pt-8">
			<div className="flex justify-between">
				<h1 className="uppercase text-white text-3xl  letter-spacing font-semibold tracking-[0.3em]">
					Todo
				</h1>
				<button onClick={() => setDarkmode(!darkMode)}>
					{darkMode ? <IconSun /> : <IconMoon />}
				</button>
			</div>
		</header>
	);
};
export default Header;
