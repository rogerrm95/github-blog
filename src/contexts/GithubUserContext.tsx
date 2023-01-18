import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface GithubContextData {
    user: User,
    issues: Issues
    loadGitHubUserInfo: (username: string) => void
}

type User = {
    name: string
    username: string
    bio: string
    company: string
    followers: number
    avatarURL: string,
}

type Issues = {
    totalCount: number,
    items: Item[]
}

type Item = {
    // body title updatedAt comments
    body: string
    title: string
    updatedAt: string
}


export const GithubContext = createContext<GithubContextData>({} as GithubContextData)

interface GithubContextProviderData {
    children: ReactNode
}

export function GithubContextProvider({ children }: GithubContextProviderData) {
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('@github-blog:user')

        if (userData) {
            return JSON.parse(userData)
        }

        return {} as User
    })
    const [issues, setIssues] = useState(() => {
        const issuesData = localStorage.getItem('@github-blog:issues')

        if (issuesData) {
            return JSON.parse(issuesData)
        }

        return {} as Issues
    })

    async function loadGitHubUserInfo(username: string) {
        try {
            await axios.get(`https://api.github.com/users/${username}`).then(res => {
                setUser({
                    ...res.data,
                    username: res.data.login,
                    avatarURL: res.data.avatar_url
                })
            })

            const queryString = 'q=' + encodeURIComponent(`user:rogerrm95 is:issue`)
            await axios.get(`https://api.github.com/search/issues?${queryString}`).then(res => {
                setIssues({
                    items: res.data.items,
                    totalCount: res.data.total_count
                })
            })

            saveGithubInfoInLocalStorage(user, issues)
        } catch (error) {
            alert("Error !!")
        }
    }

    function saveGithubInfoInLocalStorage(user: User, issues: Issues) {
        const userJSON = JSON.stringify(user)
        const issuesJSON = JSON.stringify(issues)

        localStorage.setItem('@github-blog:user', userJSON)
        localStorage.setItem('@github-blog:issues', issuesJSON)
    }

    return (
        <GithubContext.Provider value={{ user, issues, loadGitHubUserInfo}}>
            {children}
        </GithubContext.Provider>
    )
}