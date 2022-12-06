import styles from '../styles/Home.module.css';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

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

			<main className={styles.main}>
				<h1 className={styles.title}>
					Will it <a href="../">Rain?</a>
				</h1>
				<br></br>
				<Button onClick={callAPI}>
					<h2>Click me!</h2>
				</Button>
			</main>
		</div>
	);
}