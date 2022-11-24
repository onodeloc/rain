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

			<main className={styles.main2}>
				<button className={styles.button} onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	);
}