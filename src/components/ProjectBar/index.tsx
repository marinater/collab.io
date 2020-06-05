import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import { Header } from './components/header'
import { Controls } from './components/controls'
import { Channels} from './components/channels'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		width: 240,
		overflow: 'hidden'
	},
}))

export const ProjectBar: React.FC<{className: string}> = ({ className }) => {
	const classes = useStyles()

	return (
		<div className={classNames(className, classes.root)}>
			<Header/>
			<Channels/>
			<Controls/>
		</div>
	)
}
