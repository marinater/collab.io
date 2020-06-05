import {atom} from 'recoil'

export const projectDescriptionsAtom = atom<Project[]>({
    key: 'projectDescriptions',
    default: [
        {
            label: 'Project #1',
            abbreviation: 'P1',
            collaborators: ['samarth#1024', 'derek#1021']
        },
        {
            label: 'Project #2',
            abbreviation: 'P2',
            collaborators: ['samarth#1024', 'derek#1021']
        },
        {
            label: 'Project #3',
            abbreviation: 'P3',
            collaborators: ['samarth#1024', 'derek#1021']
        },
        {
            label: 'Project #4',
            abbreviation: 'P4',
            collaborators: ['samarth#1024', 'derek#1021']
        }
    ]
})

export interface Project {
    label: string,
    abbreviation: string,
    collaborators: string[]
}