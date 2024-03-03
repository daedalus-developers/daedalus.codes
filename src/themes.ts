// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const artifex: CustomThemeConfig = {
	name: 'artifex',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #7dcfff
		'--color-primary-50': '236 248 255', // #ecf8ff
		'--color-primary-100': '229 245 255', // #e5f5ff
		'--color-primary-200': '223 243 255', // #dff3ff
		'--color-primary-300': '203 236 255', // #cbecff
		'--color-primary-400': '164 221 255', // #a4ddff
		'--color-primary-500': '125 207 255', // #7dcfff
		'--color-primary-600': '113 186 230', // #71bae6
		'--color-primary-700': '94 155 191', // #5e9bbf
		'--color-primary-800': '75 124 153', // #4b7c99
		'--color-primary-900': '61 101 125', // #3d657d
		// secondary | #bb9af7
		'--color-secondary-50': '245 240 254', // #f5f0fe
		'--color-secondary-100': '241 235 253', // #f1ebfd
		'--color-secondary-200': '238 230 253', // #eee6fd
		'--color-secondary-300': '228 215 252', // #e4d7fc
		'--color-secondary-400': '207 184 249', // #cfb8f9
		'--color-secondary-500': '187 154 247', // #bb9af7
		'--color-secondary-600': '168 139 222', // #a88bde
		'--color-secondary-700': '140 116 185', // #8c74b9
		'--color-secondary-800': '112 92 148', // #705c94
		'--color-secondary-900': '92 75 121', // #5c4b79
		// tertiary | #7aa2f7
		'--color-tertiary-50': '235 241 254', // #ebf1fe
		'--color-tertiary-100': '228 236 253', // #e4ecfd
		'--color-tertiary-200': '222 232 253', // #dee8fd
		'--color-tertiary-300': '202 218 252', // #cadafc
		'--color-tertiary-400': '162 190 249', // #a2bef9
		'--color-tertiary-500': '122 162 247', // #7aa2f7
		'--color-tertiary-600': '110 146 222', // #6e92de
		'--color-tertiary-700': '92 122 185', // #5c7ab9
		'--color-tertiary-800': '73 97 148', // #496194
		'--color-tertiary-900': '60 79 121', // #3c4f79
		// success | #9ece6a
		'--color-success-50': '240 248 233', // #f0f8e9
		'--color-success-100': '236 245 225', // #ecf5e1
		'--color-success-200': '231 243 218', // #e7f3da
		'--color-success-300': '216 235 195', // #d8ebc3
		'--color-success-400': '187 221 151', // #bbdd97
		'--color-success-500': '158 206 106', // #9ece6a
		'--color-success-600': '142 185 95', // #8eb95f
		'--color-success-700': '119 155 80', // #779b50
		'--color-success-800': '95 124 64', // #5f7c40
		'--color-success-900': '77 101 52', // #4d6534
		// warning | #e0af68
		'--color-warning-50': '250 243 232', // #faf3e8
		'--color-warning-100': '249 239 225', // #f9efe1
		'--color-warning-200': '247 235 217', // #f7ebd9
		'--color-warning-300': '243 223 195', // #f3dfc3
		'--color-warning-400': '233 199 149', // #e9c795
		'--color-warning-500': '224 175 104', // #e0af68
		'--color-warning-600': '202 158 94', // #ca9e5e
		'--color-warning-700': '168 131 78', // #a8834e
		'--color-warning-800': '134 105 62', // #86693e
		'--color-warning-900': '110 86 51', // #6e5633
		// error | #f7768e
		'--color-error-50': '254 234 238', // #feeaee
		'--color-error-100': '253 228 232', // #fde4e8
		'--color-error-200': '253 221 227', // #fddde3
		'--color-error-300': '252 200 210', // #fcc8d2
		'--color-error-400': '249 159 176', // #f99fb0
		'--color-error-500': '247 118 142', // #f7768e
		'--color-error-600': '222 106 128', // #de6a80
		'--color-error-700': '185 89 107', // #b9596b
		'--color-error-800': '148 71 85', // #944755
		'--color-error-900': '121 58 70', // #793a46
		// surface | #24283b
		'--color-surface-50': '250 250 250', // #ffffff
		'--color-surface-100': '211 212 216', // #d0d4d8
		'--color-surface-200': '200 201 206', // #c8c9ce
		'--color-surface-300': '167 169 177', // #a7a9b1
		'--color-surface-400': '102 105 118', // #666976
		'--color-surface-500': '36 40 59', // #24283b
		'--color-surface-600': '32 36 53', // #202435
		'--color-surface-700': '27 30 44', // #1b1e2c
		'--color-surface-800': '22 24 35', // #161823
		'--color-surface-900': '18 20 29' // #12141d
	}
};

export const daedalus: CustomThemeConfig = {
	name: 'daedalus',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #1be3ee
		'--color-primary-50': '221 251 252', // #ddfbfc
		'--color-primary-100': '209 249 252', // #d1f9fc
		'--color-primary-200': '198 248 251', // #c6f8fb
		'--color-primary-300': '164 244 248', // #a4f4f8
		'--color-primary-400': '95 235 243', // #5febf3
		'--color-primary-500': '27 227 238', // #1be3ee
		'--color-primary-600': '24 204 214', // #18ccd6
		'--color-primary-700': '20 170 179', // #14aab3
		'--color-primary-800': '16 136 143', // #10888f
		'--color-primary-900': '13 111 117', // #0d6f75
		// secondary | #8c4be7
		'--color-secondary-50': '238 228 251', // #eee4fb
		'--color-secondary-100': '232 219 250', // #e8dbfa
		'--color-secondary-200': '226 210 249', // #e2d2f9
		'--color-secondary-300': '209 183 245', // #d1b7f5
		'--color-secondary-400': '175 129 238', // #af81ee
		'--color-secondary-500': '140 75 231', // #8c4be7
		'--color-secondary-600': '126 68 208', // #7e44d0
		'--color-secondary-700': '105 56 173', // #6938ad
		'--color-secondary-800': '84 45 139', // #542d8b
		'--color-secondary-900': '69 37 113', // #452571
		// tertiary | #0EA5E9
		'--color-tertiary-50': '219 242 252', // #dbf2fc
		'--color-tertiary-100': '207 237 251', // #cfedfb
		'--color-tertiary-200': '195 233 250', // #c3e9fa
		'--color-tertiary-300': '159 219 246', // #9fdbf6
		'--color-tertiary-400': '86 192 240', // #56c0f0
		'--color-tertiary-500': '14 165 233', // #0EA5E9
		'--color-tertiary-600': '13 149 210', // #0d95d2
		'--color-tertiary-700': '11 124 175', // #0b7caf
		'--color-tertiary-800': '8 99 140', // #08638c
		'--color-tertiary-900': '7 81 114', // #075172
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #263341 
		"--color-surface-50": "222 224 227", // #dee0e3
		"--color-surface-100": "212 214 217", // #d4d6d9
		"--color-surface-200": "201 204 208", // #c9ccd0
		"--color-surface-300": "168 173 179", // #a8adb3
		"--color-surface-400": "103 112 122", // #67707a
		"--color-surface-500": "38 51 65", // #263341
		"--color-surface-600": "34 46 59", // #222e3b
		"--color-surface-700": "29 38 49", // #1d2631
		"--color-surface-800": "23 31 39", // #171f27
		"--color-surface-900": "19 25 32", // #131920
	}
};
