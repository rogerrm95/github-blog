import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface GithubContextData {
    user: User,
    issues: Issues
    loadGitHubUserInfo: (username: string) => Promise<void>
}

type User = {
    name: string
    username: string
    bio: string
    company: string
    followers: number
    avatarURL: string,
}

export type Issues = {
    totalCount: number,
    items: Item[]
}

type Item = {
    body: string
    title: string
    updatedAt: Date,
    number: number
}


export const GithubContext = createContext<GithubContextData>({} as GithubContextData)

interface GithubContextProviderData {
    children: ReactNode
}

export function GithubContextProvider({ children }: GithubContextProviderData) {
    const [user, setUser] = useState({} as User)
    const [issues, setIssues] = useState({} as Issues)

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

                const items = res.data.items.map((item: any) => {
                    return {
                        body: item.body,
                        title: item.title,
                        updatedAt: item.updated_at,
                        number: item.number
                    }
                })

                setIssues({
                    items: items,
                    totalCount: res.data.total_count
                })
            })
        } catch (error) {
            alert("Error !!")
        }
    }

    return (
        <GithubContext.Provider value={{ user, issues, loadGitHubUserInfo }}>
            {children}
        </GithubContext.Provider>
    )
}