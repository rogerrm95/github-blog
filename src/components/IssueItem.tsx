import { Link } from "react-router-dom"
import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface IssueProps {
    data: Issue
}

type Issue = {
    body: string
    title: string
    updatedAt: Date,
    number: number
}

export function Issue({ data }: IssueProps) {
    const formattedDate = new Date(data.updatedAt)

    const updatedAtDateFormatted = format(formattedDate, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR })
    const updatedAtDateRelativeToNow = formatDistanceToNow(formattedDate, { locale: ptBR, addSuffix: true })

    return (
        <Link className='bg-zinc-700 h-[260px] p-8 flex flex-col gap-5 rounded-[10px]' to={`/post/${data.number}`} key={data.title}>
            <header className='flex items-center justify-between gap-6'>
                <h3 className='text-zinc-50 text-xl font-bold'>
                    {
                        data.title
                    }
                </h3>
            </header>

            <p className='text-zinc-100 leading-relaxed line-clamp select-none'>
                {data.body}
            </p>

            <footer className="flex justify-end">
                <time dateTime={formattedDate.toISOString()} title={updatedAtDateFormatted} className='text-zinc-300 text-xs text-center first-letter:uppercase'>
                    {updatedAtDateRelativeToNow}
                </time>
            </footer>
        </Link>
    )
}