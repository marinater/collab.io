import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
		flexBasis: 50,
		backgroundColor: '#292b2f'
	},
})

export const Controls = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}/>
    )
}