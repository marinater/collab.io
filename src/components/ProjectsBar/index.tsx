import React from 'react'
import {Divider, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import {ProjectIcon} from './components/ProjectIcon'
import {useHistory} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import {projectDescriptionsAtom} from 'atoms/projectDescriptions'
import {OrderableList} from './components/OrderableList'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 12,
    },
    divider: {
        backgroundColor: theme.palette.divider,
        marginTop: 10,
        height: 2
    }
}))

export const ProjectsBar: React.FC<{className: string}> = ({className}) => {
    const classes = useStyles()
    const history = useHistory()
    const projectDescriptions = useRecoilValue(projectDescriptionsAtom)

    return (
        <Grid container direction='column' alignItems='center' className={classNames(className, classes.root)}>
            <Grid container direction='column'>
                <OrderableList
                    render={ProjectIcon}
                    data={projectDescriptions.map( desc => ({key: desc.label, description: desc, onClick: () => history.push(`/project/${desc.label}`)}))}
                />
            </Grid>
            <Divider className={classes.divider} flexItem/>
        </Grid>
    )
}

interface Position {
    top: number;
    height: number;
}