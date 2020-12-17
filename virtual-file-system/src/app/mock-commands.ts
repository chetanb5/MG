import {command} from "./command.interface"

export const COMMANDS : command[] = [
    {commandname: 'mkdir [file name]', commandDescription: 'create a directry'},
    {commandname: 'cd', commandDescription: 'change directry'},
    {commandname: 'mf [file name]', commandDescription: 'change directry'},
    {commandname: 'dir', commandDescription: 'list the directories'},

];