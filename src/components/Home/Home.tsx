import Navbar from '.././NavBar/NavBar';
import styles from '../../routes/HomePage/HomePage.module.css';
import videoSrc from '../../assets/5790148-hd_1920_1080_30fps.mp4';
import './Home.css';

const Home = () => {
	return (
		<div className={styles['home-container']}>
			<Navbar />
			<div className='hero-container'>
				<video src={videoSrc} autoPlay loop muted />
				<h1>Elevate with Advanced Wearables</h1>
				<p>Harness advanced data analytics and predictive models to reach your athletic potential across multiple sports disciplines.</p>
			</div>
		</div>
	);
};

export default Home;