import React from 'react'
import {ProjectsBar} from '../components/ProjectsBar'
import {ProjectBar} from '../components/ProjectBar'
import {EmptyProject} from '../components/EmptyProject'
import {makeStyles} from '@material-ui/core/styles'
import { Switch, Route } from 'react-router'

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch'
	},
	header: {
		flexBasis: 10,
		flexGrow: 0,
		flexShrink: 0,
		backgroundColor: theme.palette.background.paper
	},
	content: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	sidebar: {
		backgroundColor: theme.palette.background.paper,
		display: 'flex'
	},
	projectsBar: {
		width: 70,
		height: '100%'
	},
	projectBar: {
		width: 240,
		borderTopLeftRadius: 10,
		backgroundColor: '#2f3136',
	},
	project: {
		flexGrow: 1,
		flexShrink: 1 
	}
}))

export const ProjectLayout = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className={classes.header}>

			</div>
			<div className={classes.content}>
				<div className={classes.sidebar}>
					<ProjectsBar className={classes.projectsBar}/>
					<ProjectBar className={classes.projectBar}/>
				</div>
				<Switch>
					<Route path="/">
						<EmptyProject className={classes.project}/>
					</Route>
				</Switch>
			</div>
		</div>
	)
}