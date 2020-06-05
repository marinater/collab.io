import React from 'react'
import {Button} from '@material-ui/core'
import {useRecoilState} from 'recoil'
import {themeTypeAtom} from '../atoms/AppTheme'

export const ThemeToggle = () => {
	const [themeType, setThemeType] = useRecoilState(themeTypeAtom)

	return (
		<Button variant="contained" color="primary" onClick={ () => setThemeType(themeType === 'dark' ? 'light' : 'dark') }>
			{themeType}
		</Button>
	)
}
