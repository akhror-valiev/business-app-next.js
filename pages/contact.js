import Circle from "../components/Circle";
import styles from "../styles/Contact.module.css";

const contact = () => {
	return (
		<div className={styles.container}>
			<Circle backgroundColor="orange" left="-40vh" top="-20vh" />
			<Circle backgroundColor="brown" right="-30vh" bottom="-60vh" />
			<h1 className={styles.title}>GET IN TOUCH</h1>
			<form className={styles.form}>
				<input className={styles.inputS} placeholder="sername" />
				<input className={styles.inputS} placeholder="Phone" />
				<input className={styles.inputL} placeholder="Email" />
				<input className={styles.inputL} placeholder="Subject" />
				<textarea className={styles.textarea} placeholder="Message" rows={6} />
				<button className={styles.button}>SUBMIT</button>
			</form>
		</div>
	);
};

export default contact;
