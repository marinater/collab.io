import React, { useState } from 'react'
import { makeStyles, Typography, Tooltip, Avatar } from "@material-ui/core"
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import className from 'classnames'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		flexShrink: 1,
		paddingTop: 20,
		color: theme.palette.text.hint,
	},
	channelGroupHeading: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: 'space-between',
		alignItems: 'center',
		'& > *:hover': {
			color: 'white'
		},
		cursor: 'pointer'
	},
	channelGroup: {
		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 20
	},
	channel: {
		// display: 'flex',
		// flexDirection: 'row',
		// alignItems: 'center',
		// justifyContent: 'space-between',

		borderRadius: 4,
		paddingTop: 4,
		paddingBottom: 4,
		paddingLeft: 8,
		paddingRight: 8,
		'&:hover': {
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.background.default,
		},
		'&:hover > .invitePersonIcon': {
			display: 'inline-block',
		}
	},
	active: {
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.background.default,
	},
	invitePersonIcon: {
		height: 20,
		verticalAlign: 'center',
		float: 'right',
		display: 'none',
		cursor: 'pointer'
	},
	chevron: {
		height: 16,
	},
	participantGroup: {
		paddingLeft: 38,
		paddingRight: 4,
	},
	participant: {
		height: 30,
		paddingLeft: 12,
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: 'space-between',
		alignItems: 'center',
		'&:hover': {
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.background.default
		},
		borderRadius: 4,
	},
	avatar: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        border: 0,
        height: 24,
		width: 24,
		marginRight: 8
	}
}))

const useToolTipStyles = makeStyles(theme => ({
	arrow: {
		color: theme.palette.common.black,
	},
	tooltip: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.text.primary
	},
}))

interface ChannelProps {
	channel: string,
	onClick: () => void,
	isActive: boolean,
	autoHighlightActive: boolean,
	participants?: string[],
	icon: any
}

const Channel: React.FC<ChannelProps> = ({channel, onClick, isActive, autoHighlightActive, participants, icon: ChannelIcon }) => {
	const classes = useStyles()
	const tooltipClasses = useToolTipStyles()

	return (
		<>
			<div className={className(classes.channel, isActive && autoHighlightActive && classes.active)} onClick={onClick}>
				<div style={{ display: 'inline-block'}}>
					<ChannelIcon
						style={{ height: 20, marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }}
					/>
					<Typography style={{ fontSize: 16, fontWeight: 'lighter', display: 'inline-block', verticalAlign: 'middle'}} variant='body2'> {channel} </Typography>
				</div>
				<Tooltip
					classes={tooltipClasses}
					arrow placement='top'
					title={
						<Typography variant='caption' style={{ fontSize: 14, fontWeight: 'lighter' }}> Create Invite </Typography>
					}
				>
					<PersonAddIcon className={className('invitePersonIcon', classes.invitePersonIcon)}/>
				</Tooltip>
			</div>
			{
				participants && (
					<div className={classes.participantGroup}>
						{
							participants.map( participant => (
								<div key={participant} className={classes.participant}>
									<Avatar className={classes.avatar} src={`https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg`}/>
									<Typography style={{ fontSize: 14, fontWeight: 'normal' }} noWrap> {participant} </Typography>
								</div>
							))
						}
					</div>
				)
			}
		</>
	)
}

interface ChannelGroupProps {
	name: string,
	channels: string[],
	autoHighlightActive?: boolean,
	participants?: string[],
	icon: React.ReactNode
}

const ChannelGroup: React.FC<ChannelGroupProps> = ({ name, channels, autoHighlightActive, participants, icon }) => {
	const classes = useStyles()
	const [isOpen, setIsOpen] = useState(false)
	const [activeChannel, setActiveChannel] = useState<string | null>(null)

	return (
		<>
			<div className={classes.channelGroupHeading} onClick={() => setIsOpen(!isOpen)}>
				<KeyboardArrowDownIcon className={classes.chevron}/>
				<Typography variant='button' style={{ fontSize: 12, fontWeight: 'initial' }}> {name} </Typography>
			</div>
			<div className={classes.channelGroup}> 
				{
					isOpen && channels.map((channel)=> (
						<Channel
							key={channel}
							channel={channel}
							onClick={() => setActiveChannel(channel)}
							autoHighlightActive={!!autoHighlightActive}
							participants={participants}
							isActive={channel === activeChannel}
							icon={icon}
						/>))
				}
				{
					!isOpen && activeChannel && (
						<Channel
							key={activeChannel}
							channel={activeChannel}
							onClick={() => setActiveChannel(activeChannel)}
							autoHighlightActive={!!autoHighlightActive}
							participants={participants}
							isActive={true}
							icon={icon}
						/>
					)
				}
			</div>
		</>
	)
}

export const Channels = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<ChannelGroup
				name='Text Channels'
				channels={['abcd', 'efgh', 'ijkl']}
				autoHighlightActive
				icon={ChatBubbleOutlineIcon}
			/>
			<ChannelGroup
				name='Voice Channels'
				channels={['1234', '567', '8910']}
				participants={['Samarth#3439', 'Derek#1984']}
				icon={VolumeUpIcon}
			/>
		</div>
	)
}