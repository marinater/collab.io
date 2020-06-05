import {atom} from 'recoil'

export const themeTypeAtom = atom({
    key: 'appThemeType',
    default: 'dark' as 'dark' | 'light',
})