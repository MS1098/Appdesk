import styles from "./styles.module.css";
import Dashboard from "../Dashboard";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Hello!</h1>
				<h1>Appdesk</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Dashboard/>
		</div>
	);
};

export default Main;
