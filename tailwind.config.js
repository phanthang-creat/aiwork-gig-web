/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				container: '1180px',
			},
			colors: {
				unset: 'unset',
				blue: {
					1: '#0D99FF',
					2: '#3DADFF',
					3: '#6EC2FF',
					4: '#9ED6FF',
					5: '#D5EDFF',
					6: '#E8F5FF',
				},
				gray: {
					1: '#252525',
					2: '#575757',
					3: '#AAAAAA',
					4: '#DCDCDC',
				},
				red: {
					2: '#BD3131',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
