import React, { useRef, useState } from 'react'
import { Typography, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Divider, lighten, makeStyles } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import SecurityIcon from '@material-ui/icons/Security';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
	header: {
		flexBasis: 50,
		boxShadow: '0px 2px 0px 0px rgba(0,0,0,0.2)',
		'&:hover': {
			backgroundColor: lighten('#2f3136', 0.015)
		},
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 20,
        paddingRight: 20,
        cursor: 'pointer',
        zIndex: 10,
	},
	menuDivider: {
		marginLeft: 3,
		marginRight: 3,
		marginTop: 4,
		marginBottom: 4,
	},
	popperMenu: {
		backgroundColor: '#18191c',
		color: '#acaeb0',
		padding: 8,
		borderRadius: 3,
		'& > *': {
			borderRadius: 2,
			paddingLeft: 10,
			paddingRight: 10,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between'
		},
		'& > .primary': {
			color: theme.palette.primary.main
		},
		'& > .purple:hover': {
			backgroundColor: theme.palette.primary.main,
			color: 'white'
		},
		'& > .danger': {
			color: theme.palette.error.main
		},
		'& > .danger:hover': {
			backgroundColor: theme.palette.error.main,
			color: 'white'
		}
	}
}))

export const Header = () => {
	const classes = useStyles()
	const [popperState, setPopperState] = useState(false)
    const popperAnchor = useRef(null)

    return (
        <>
			<div ref={popperAnchor} className={classes.header} onClick={() => setPopperState(!popperState)}>
				<Typography variant='body1' noWrap> Academically Honest </Typography>
				<KeyboardArrowDownIcon/>
			</div>
			<Popper open={popperState} anchorEl={popperAnchor.current} role={undefined} transition disablePortal style={{ width: 240, padding: 8 }}>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
					>
						<Paper style={{ width: '100%' }}>
							<ClickAwayListener onClickAway={() => setPopperState(false)}>
								<MenuList autoFocusItem={popperState} id="project-popper-menu" onKeyDown={() => {}} className={classes.popperMenu}>
									<MenuItem className='purple primary' onClick={() => setPopperState(false)}>
										<Typography variant='body2'> Invite People </Typography>
										<PersonAddIcon/>
									</MenuItem>
									<Divider className={classes.menuDivider}/>
									<MenuItem className='purple' onClick={() => setPopperState(false)}>
										<Typography variant='body2'> Notification Settings 
										</Typography>
										<NotificationsIcon/>
									</MenuItem>
									<MenuItem className='purple' onClick={() => setPopperState(false)}>
										<Typography variant='body2'>
											Privacy Settings
										</Typography>
										<SecurityIcon/>
									</MenuItem>
									<Divider className={classes.menuDivider}/>
									<MenuItem className='purple' onClick={() => setPopperState(false)}>
										<Typography variant='body2'>
											Change Nickname
										</Typography>
										<CreateIcon/>
									</MenuItem>
									<MenuItem className='purple' onClick={() => setPopperState(false)}>
										<Typography variant='body2'>
											Hide Muted Channels
										</Typography>
										<CheckBoxOutlineBlankIcon/>
									</MenuItem>
									<Divider className={classes.menuDivider}/>
									<MenuItem className='danger' onClick={() => setPopperState(false)}>
										<Typography variant='body2'>
											Leave Project
										</Typography>
										<ExitToAppIcon/>
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
        </>
    )
}