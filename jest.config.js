export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(tsx?|jsx?)$': 'babel-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
