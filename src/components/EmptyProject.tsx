import React from 'react'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/core/styles'
import {ReactComponent as EmptyClipboard} from './EmptyClipboard.svg'
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        flexBasis: 50,
        paddingLeft: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        boxShadow: '0px 2px 0px 0px rgba(0,0,0,0.2)',
    },
    content: {
        flexGrow: 1,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    headerIcon: {
        color: theme.palette.text.hint,
        marginRight: 15
    }
}))

export const EmptyProject: React.FC<{className: string}> = ({className}) => {
    const classes = useStyles()

    return (
        <div className={classNames(classes.root, className)}>
            <div className={classes.header}>
                <WhatshotOutlinedIcon className={classes.headerIcon}/>
                <Typography variant='h5' noWrap> Project 1 </Typography>
            </div>
            <div className={classes.content}>
                <EmptyClipboard style={{ maxHeight: 300 }}/>
                <Typography variant={'subtitle1'}> Select a project from the Projects Bar to start working! </Typography>
            </div>
        </div>
    )
}