import { useEffect, useState } from "react";
// Libs //
import { Link, useParams } from "react-router-dom";
import Markdown from 'react-markdown'
import axios from "axios";
import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
// Icons //
import { FaArrowLeft, FaCalendar, FaComment, FaGithub, FaLink } from "react-icons/fa";
// Components //
import { Header } from "../components/Header";

type Issue = {
    body: string
    title: string
    updatedAt: Date,
    number: number,
    comments: number,
    user: string,
    url: string
}

export function Post() {
    const { id } = useParams()

    const [issue, setIssue] = useState({} as Issue)

    async function loadIssueFromGithub() {
        await axios.get(`https://api.github.com/repos/rogerrm95/github-blog/issues/${id}`).then(res => {

            console.log(new Date(res.data.updated_at))
            setIssue({
                body: res.data.body,
                title: res.data.title,
                comments: res.data.comments,
                number: res.data.numbers,
                updatedAt: new Date(res.data.updated_at),
                user: res.data.user.login,
                url: res.data.html_url
            })
        })
    }

    useEffect(() => {
        loadIssueFromGithub()
    }, [])

    const updatedAtDateFormatted = issue.updatedAt ? format(issue.updatedAt, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR }) : ''
    const updatedAtDateRelativeToNow = issue.updatedAt ? formatDistanceToNow(issue.updatedAt, { locale: ptBR, addSuffix: true }) : ''

    return (
        <div className='h-screen w-full max-w-[1440px] mx-auto'>
            <Header />

            <main className='w-full max-w-[864px] mx-auto flex flex-col justify-center'>
                <section className='bg-zinc-700 py-8 px-10 mx-2 flex flex-col gap-8 rounded-lg relative top-[-65px] shadow-box'>
                    <header className="flex justify-between items-center w-full">
                        <Link className="text-blue-500 uppercase text-xs font-bold flex items-center gap-2" to='/'>
                            <FaArrowLeft size={12} />
                            Voltar
                        </Link>

                        <a className="text-blue-500 uppercase text-xs font-bold flex items-center gap-2" href={issue.url}>
                            Ver no Github
                            <FaLink size={12} />
                        </a>
                    </header>

                    <h2 className="text-zinc-50 font-bold text-2xl">
                        {issue.title}
                    </h2>

                    <footer className='mt-auto flex flex-col gap-2 md:flex-row md:gap-6'>
                        <div className='flex items-center gap-2'>
                            <FaGithub size={18} className='text-zinc-400' />
                            <span className='text-zinc-300'>{issue.user}</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaCalendar size={18} className='text-zinc-400' />
                            {
                                issue.updatedAt ? (
                                    <time dateTime={issue.updatedAt.toISOString()} title={updatedAtDateFormatted} className='text-zinc-300 first-letter:uppercase'>
                                        {updatedAtDateRelativeToNow}
                                    </time>
                                ) : (
                                    <span className='text-zinc-300'>
                                        -
                                    </span>
                                )
                            }
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaComment size={18} className='text-zinc-400' />
                            <span className='text-zinc-300'>{issue.comments} comentários</span>
                        </div>
                    </footer>
                </section>

                <Markdown linkTarget={"_blank"} className='px-8 leading-relaxed text-justify text-zinc-200 flex flex-col gap-6 mb-8'>
                    {issue.body}
                </Markdown>
            </main>
        </div>
    )
}