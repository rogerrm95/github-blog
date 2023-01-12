import { FaArrowLeft, FaCalendar, FaComment, FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Post() {
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

                        <Link className="text-blue-500 uppercase text-xs font-bold flex items-center gap-2" to='/'>
                            Ver no Github
                            <FaLink size={12} />
                        </Link>
                    </header>

                    <h2 className="text-zinc-50 font-bold text-2xl">
                        JavaScript data types and data structures
                    </h2>

                    <footer className='mt-auto flex flex-col gap-2 md:flex-row md:gap-6'>
                        <div className='flex items-center gap-2'>
                            <FaGithub size={18} className='text-zinc-400' />
                            <span className='text-zinc-300'>rogerrm95</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaCalendar size={18} className='text-zinc-400' />
                            <span className='text-zinc-300'>Há 3 dias</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaComment size={18} className='text-zinc-400' />
                            <span className='text-zinc-300'>4 comentários</span>
                        </div>
                    </footer>
                </section>

                <article className="px-8 leading-relaxed text-justify text-zinc-200 flex flex-col gap-6">
                    <p>
                        Programming languages all have built-in data structures, but these often differ from one language to another.
                        This article attempts to list the built-in data structures available in JavaScript and what properties they have.
                        These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    </p>

                    <p>
                        <span className="text-blue-500 underline">Dynamic typing</span> <br />
                        JavaScript is a loosely typed and dynamic language.
                        Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                    </p>

                    <pre className="bg-zinc-600 rounded-lg p-4">
                        let foo = 42;   // foo is now a number <br />
                        foo = ‘bar’;    // foo is now a string <br />
                        foo = true;     // foo is now a boolean <br />
                    </pre>
                </article>
            </main>
        </div>
    )
}