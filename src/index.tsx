import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RecoilRoot} from 'recoil'
import * as serviceWorker from './serviceWorker'

import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRecoilState } from 'recoil'

import {themeTypeAtom} from 'atoms/AppTheme'
import { DarkTheme, LightTheme } from 'themes'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProjectLayout } from 'layouts/ProjectLayout'

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%'
	}
})

export const App = () => {
	const [themeType] = useRecoilState(themeTypeAtom)
	const theme = useMemo(() => {
		return createMuiTheme(themeType === 'dark' ? DarkTheme : LightTheme)
	}, [themeType])
	
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<div className={classes.root}>
				<Switch>
					<Route path="/project">
						<ProjectLayout/>
					</Route>
				</Switch>
			</div>
		</ThemeProvider>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<Router>
				<App/>
			</Router>
		</RecoilRoot>
	</React.StrictMode>
, document.getElementById('root'))

serviceWorker.unregister()