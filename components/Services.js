import styles from "../styles/Services.module.css";
import Link from "next/link";
import Image from "next/image";

const Services = ({ services }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>What We Can Do?</h1>
			<h1 className={styles.subtitle}>Services we can help you with</h1>
			<div className={styles.services}>
				{services.map((service) => (
					<Link key={service.id} href={`/products/${service.name}`} passHref>
						<div className={styles.service}>
							<div className={styles.desc}>{service.desc}</div>
							<span className={styles.cat}>{service.title}</span>
							<div className={styles.media}>
								{service.video ? (
									<video
										src={`/img/${service.video}`}
										autoPlay
										muted
										loop
										className={styles.video}
									/>
								) : (
									<Image
										src={`/img/${service.photo}`}
										width="100%"
										height="100%"
										layout="responsive"
										objectFit="cover"
										alt=""
									/>
								)}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Services;
