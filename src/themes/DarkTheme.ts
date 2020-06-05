import {ThemeOptions} from '@material-ui/core/styles'

export const DarkTheme: ThemeOptions = {
    palette: {
        type: 'dark' as const,
        primary: {
            main: '#5c6fb1'
        },
        background: {
            default: '#36393f',
            paper: '#202225',
        },
    }
}