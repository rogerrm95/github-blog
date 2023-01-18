import { useContext } from "react";
import { GithubContext } from "../contexts/GithubUserContext";

export function useGithub(){
    return useContext(GithubContext) 
}