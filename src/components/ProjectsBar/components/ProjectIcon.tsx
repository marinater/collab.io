import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography, Tooltip, Avatar } from '@material-ui/core'
import {AvatarGroup} from '@material-ui/lab'
import { motion } from "framer-motion"
import {Project} from 'atoms/projectDescriptions'
import { lightBlue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
        paddingTop: '100%',
        backgroundColor: '#36393f',
		// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		// boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: theme.palette.text.primary,
		position: 'relative',
        marginTop: 10,
        cursor: 'pointer'
    },
	textContainter: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
    avatar: {
        color: theme.palette.getContrastText(lightBlue[500]),
        backgroundColor: lightBlue[500],
        border: 0,
        height: 30,
        width: 30
    },
}))

const useToolTipStyles = makeStyles(theme => ({
	arrow: {
		color: theme.palette.common.black,
	},
	tooltip: {
		backgroundColor: theme.palette.common.black,
	},
}))

export const ProjectIcon: React.FC<ProjectIconProps> = ({description, onClick, variant}) => {
	const classes = useStyles()
	const toolTipClasses = useToolTipStyles()

	const [borderRadius, setBorderRadius] = useState('50%')

	return (
		<Tooltip
            classes={toolTipClasses}
            placement='right'
            arrow
			title={
				<React.Fragment>
					<Typography color="inherit" variant="h6" noWrap> {description.label} </Typography>
					<AvatarGroup>
						{
							description.collaborators.map((name, index) => (
								<Avatar key={name} className={classes.avatar } src={`https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg`}>
									{name[0].toUpperCase()}
								</Avatar>
							))
						}
					</AvatarGroup>
				</React.Fragment>
            }
		>
			<motion.div
				className={classes.root}
                onClick={onClick}
                whileHover={{ backgroundColor: '#5c6fb1', transition: { duration: 0 }}}
				animate={{ borderRadius }}
				onMouseEnter={ () => setBorderRadius('15%') }
				onMouseLeave={ () => setBorderRadius('25%')}
			>
				<Typography className={classes.textContainter} variant={variant || 'h6'} noWrap>
					{description.abbreviation.substr(0, 3)}
				</Typography>
			</motion.div>
		</Tooltip>
	)
}

interface ProjectIconProps {
	description: Project,
	onClick?: () => void,
	variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "srOnly"
}