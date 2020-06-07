import React from 'react'
import { makeStyles, Avatar, Typography, lighten } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles( theme => ({
	root: {
		flexBasis: 52,
		backgroundColor: '#292b2f',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
        padding: 8,
        paddingTop: 10,
        paddingBottom: 10
	},
	nameContainer: {
		display: 'flex',
		flexDirection: 'column',
        marginRight: 'auto',
        flexGrow: 1,
        cursor: 'pointer',
	},
	controlsContainer: {
        color: lighten('#000000', 0.8),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        '& div': {
            cursor: 'pointer',
            // display: 'inline-block',
            borderRadius: 4,
            width: 32,
            height: 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& div:hover': {
            backgroundColor: lighten('#2f3136', 0.1)
        },

    },
	avatar: {
		color: theme.palette.getContrastText(theme.palette.grey[100]),
		backgroundColor: theme.palette.grey[600],
		border: 0,
		height: 32,
		width: 32,
        marginRight: 8,
        cursor: 'pointer'
	},
	nameText: {
		fontSize: 13,
		fontWeight: 'bold',
        lineHeight: 1,
        paddingTop: 3,
        paddingBottom: 3,
		color: 'white'
    },
	nameTextID: {
        lineHeight: 1,
		fontSize: 11.4,
        color: lighten('#000000', 0.7),
	}
}))

const StatusAvatar: React.FC<{className: string, src: string, name: string}> = ({ className, src, name }) => {
    return (
        <div style={{ position: 'relative' }}>
            <Avatar className={className} src={src}>
                {name[0]}
            </Avatar>
            <div style={{ position: 'absolute', backgroundColor: '#43b581', width: 16, height: 16, right: 5, bottom: -3, borderRadius: '50%', borderWidth: 3, borderStyle: 'solid', borderColor: '#292b2f' }}/>
        </div>
    )
}
export const Controls: React.FC<{ name: string, id: string }> = ({ name, id }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
            <StatusAvatar className={classes.avatar} src='https://cdn.discordapp.com/avatars/196397053356539904/b1dc721a7a3e1b82ac5cec5458d33a29.png?size=128' name='marinater#6555'/>
			<div className={classes.nameContainer}>
				<Typography className={classes.nameText}>
					{name}
				</Typography>
				<Typography className={classes.nameTextID}>
					{id}
				</Typography>
			</div>

			<div className={classes.controlsContainer}>
                <div>
                   <MicIcon fontSize='small' />
                </div>
                <div>
                    <HeadsetIcon fontSize='small'/>
                </div>
                <div>
                    <SettingsIcon fontSize='small'/>
                </div>
			</div>
		</div>
	)
}