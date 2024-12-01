import React, { useState } from 'react';
import './Settings.css';

interface Settings {
  theme: string;
  notifications: {
    email: boolean;
    sms: boolean;
    app: boolean;
  };
  password: string;
  twoFactorAuth: boolean;
}

const SettingsPage: React.FC = () => {
	const [settings, setSettings] = useState<Settings>({
		theme: 'light',
		notifications: {
			email: true,
			sms: false,
			app: true,
		},
		password: '',
		twoFactorAuth: false,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSettings({ ...settings, [name]: value });
	};

	const handleToggle = (name: string) => {
		setSettings({ ...settings, [name]: !settings[name as keyof Settings] });
	};

	const handleNotificationToggle = (type: string) => {
		setSettings({
			...settings,
			notifications: {
				...settings.notifications,
				[type]: !settings.notifications[type as keyof Settings['notifications']],
			},
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Settings saved:', settings);
		alert('Settings saved!');
	};

	return (
		<div className="settings-container">
			<h1 className="settings-title">Settings</h1>
			<div className="overview-section">
				<h2>Overview</h2>
				<p>Current Theme: <strong>{settings.theme}</strong></p>
				<p>
          Notifications:{' '}
					{Object.values(settings.notifications).some((v) => v)
						? 'Enabled'
						: 'Disabled'}
				</p>
				<p>Two-Factor Auth: {settings.twoFactorAuth ? 'On' : 'Off'}</p>
			</div>
			<form onSubmit={handleSubmit} className="settings-form">
				{/* Preferences Section */}
				<div className="settings-section">
					<h2>Preferences</h2>
					<div className="form-group">
						<label>Theme:</label>
						<select
							name="theme"
							value={settings.theme}
							onChange={(e) =>
								setSettings({ ...settings, theme: e.target.value })
							}
						>
							<option value="light">Light</option>
							<option value="dark">Dark</option>
							<option value="system">System Default</option>
						</select>
						<div className={`theme-preview ${settings.theme}`}>
							<p>Preview of {settings.theme} theme</p>
						</div>
					</div>
				</div>

				{/* Security Section */}
				<div className="settings-section">
					<h2>Security Settings</h2>
					<div className="form-group">
						<label>Change Password:</label>
						<input
							type="password"
							name="password"
							value={settings.password}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>
            Enable Two-Factor Authentication
							<input
								type="checkbox"
								checked={settings.twoFactorAuth}
								onChange={() => handleToggle('twoFactorAuth')}
							/>
						</label>
					</div>
				</div>

				{/* Notifications Section */}
				<div className="settings-section">
					<h2>Notifications</h2>
					<div className="form-group">
						<label>
							<input
								type="checkbox"
								checked={settings.notifications.email}
								onChange={() => handleNotificationToggle('email')}
							/>
              Email Notifications
						</label>
					</div>
					<div className="form-group">
						<label>
							<input
								type="checkbox"
								checked={settings.notifications.sms}
								onChange={() => handleNotificationToggle('sms')}
							/>
              SMS Notifications
						</label>
					</div>
					<div className="form-group">
						<label>
							<input
								type="checkbox"
								checked={settings.notifications.app}
								onChange={() => handleNotificationToggle('app')}
							/>
              App Notifications
						</label>
					</div>
				</div>

				{/* Account Activity */}
				<div className="settings-section">
					<h2>Recent Activity</h2>
					<ul>
						<li>Login from new device: 2 hours ago</li>
						<li>Password changed: 3 days ago</li>
						<li>Two-Factor Auth enabled: 1 week ago</li>
					</ul>
				</div>

				<div className="form-actions">
					<button type="submit">Save Settings</button>
				</div>
			</form>
		</div>
	);
};

export default SettingsPage;



