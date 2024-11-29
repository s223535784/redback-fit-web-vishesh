import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileAvatar.css';
import ProfilePic from '../../assets/ProfilePic.png';

const ProfileAvatar: React.FC = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(true); // Login state
	const navigate = useNavigate();
	const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Simulate login check (replace with real API)
	// useEffect(() => {
	// 	const token = localStorage.getItem('authToken'); // Check token in localStorage
	// 	setIsLoggedIn(!!token); // Set login state based on token existence
	// }, []);

	const handleMouseEnter = () => {
		if (hideTimeoutRef.current) {
			clearTimeout(hideTimeoutRef.current);
		}
		setIsPopupVisible(true);
	};

	const handleMouseLeave = () => {
		hideTimeoutRef.current = setTimeout(() => {
			setIsPopupVisible(false);
		}, 1000); // Delay before hiding
	};

	const handleLogout = () => {
		localStorage.removeItem('authToken'); // Clear token
		setIsLoggedIn(false); // Update state

	};
	const handleChangeAccount=()=>{
		handleLogout();
		navigate('/login');
	};

	return (
		<div
			className="profile-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* User avatar */}
			<img src={ProfilePic} alt="User Avatar" className="profile-avatar" />

			{/* Popup menu */}
			{isPopupVisible && (
				<div
					className="profile-popup"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{isLoggedIn ? (
						<>
							<p> Username</p>
							<button
								className="profile-button"
								onClick={() => navigate('/settings')}
							>
								Settings
							</button>
							<button
								className="profile-button"
								onClick={() => navigate('/profile')}
							>
								Profile
							</button>
							<button className="profile-button" onClick={handleChangeAccount}>
								Change Account
							</button>
							<button className="profile-button" onClick={handleLogout}>
								Logout
							</button>
							
						</>
					) : (
						<>
							<p> Please Login</p>
							<button
								className="profile-button"
								onClick={() => navigate('/login')}
							>
							Login
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default ProfileAvatar;
