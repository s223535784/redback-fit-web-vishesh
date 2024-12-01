import styles from '../../routes/HomePage/HomePage.module.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

const Work = () => {
	const workInfoData = [
		{
			image: icon1,
			title: 'Predictive Tools Support',
			text: 'Utilize VO2 Max, FTP, and Race Prediction models to forecast your performance.',
		},
		{
			image: icon2,
			title: 'Custom Training Programs',
			text: 'Generate personalized training plans based on your unique data and goals.',
		},
		{
			image: icon3,
			title: 'Comprehensive Dashboard',
			text: 'Visualize your progress and metrics through an intuitive, user-friendly interface.',
		},
	];

	return (
		<div className={styles['work-section-wrapper']}>
			<div className={styles['work-section-top']}>
				<h1 className={styles['primary-heading']}>Key Features</h1>
				<p className={styles['primary-text']}>
          Get detailed analysis of your performance in running, cycling, and swimming
				</p>
			</div>
			<div className={styles['work-section-bottom']}>
				{workInfoData.map((data) => (
					<div className={styles['work-section-info']} key={data.title}>
						<div className={styles['info-boxes-img-container']}>
							<img src={data.image} alt={data.title} />
						</div>
						<h2>{data.title}</h2>
						<p>{data.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
