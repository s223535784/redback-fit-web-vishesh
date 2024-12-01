import { useState } from 'react';
import AboutVideo from '../../assets/Homepage Video.mp4'; 
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io'; 
import styles from '../../routes/HomePage/HomePage.module.css';


const About = () => {
	const [showVideo, setShowVideo] = useState(false);

	const handleWatchVideo = () => {
		setShowVideo(true);
	};

	const handleCloseVideo = () => {
		setShowVideo(false);
	};

	return (
		<div className={styles['about-section-container']}>
			<div className={styles['about-section-image-container']}>
				<img src="https://media.istockphoto.com/id/1174864719/photo/close-up-of-male-athlete-getting-ready-to-start-running-on-track-focus-on-sneakers.jpg?s=612x612&w=0&k=20&c=wN3qQpl17mnmHySM8qqFjkgGfWkD8Yb9mc9fmubXXfU=" alt="" />
			</div>
			<div className={styles['about-section-text-container']}>
				<h1 className={styles['primary-heading']}>What We Do</h1>
				<p className={styles['primary-text']}>
					We combine the power of wearable technology and advanced analytics to
					offer athletes personalized insights and predictive tools.
				</p>
				<p className={styles['primary-text']}>
					Whether you’re a runner, cyclist, or swimmer, our platform provides
					the data you need to optimize your training and performance.
				</p>
				<div className={styles['about-buttons-container']}>
					<button className={styles['secondary-button']}>Learn more by watching the video!</button>
					<button
						className={styles['watch-video-button']}
						onClick={handleWatchVideo}
					>
						<BsFillPlayCircleFill /> Watch Video
					</button>
				</div>
			</div>
			{showVideo && (
				<div className={styles['video-container']}>
					<div className={styles['close-button']} onClick={handleCloseVideo}>
						<IoMdClose size={30} />
					</div>
					<video
						className={styles['video-player']}
						controls
						autoPlay
						src={AboutVideo}
					/>
				</div>
			)}
		</div>
	);
};

export default About;
