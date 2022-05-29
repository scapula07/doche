import {atom} from "recoil"
import { useReducer } from "react"

export const cartState = atom({
    key:"cartState",
    default:[]
})