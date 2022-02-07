import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
	return (
		<div className={styles.container}>
			<Circle backgroundColor="yellow" top="-50vh" left="-50vh" />
			<Circle backgroundColor="brown" right="-40vh" />
			<div className={styles.card}>
				<h1 className={styles.title}>
					<span className={styles.brand}>CINNAMON</span> MODERN BUSINESS
					CONSULTING
				</h1>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<button className={styles.button}>DISCOVER</button>
			</div>
			<div className={styles.card}>
				<Image
					src="/img/logoCin.png"
					alt=""
					width="100%"
					height="100%"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
};

export default Intro;
