import styles from '../styles/Home.module.css';

export default function APIcall() {
	const callAPI = async () => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/1`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className={styles.container}>

			<main>
				<button className={styles.card} onClick={callAPI}>
					<h2>Click me!</h2>
					</button>
			</main>
		</div>
	);
}