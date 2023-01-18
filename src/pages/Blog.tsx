import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGithub } from '../hooks/useGithub'

// Icons //
import { FaGithub, FaUsers, FaBuilding, FaLink } from 'react-icons/fa'
// Componente //
import { Header } from '../components/Header'

export function Blog() {
  const { issues, user, loadGitHubUserInfo } = useGithub()

  useEffect(() => {
    loadGitHubUserInfo('rogerrm95')
  }, [])

  return (
    <div className='h-screen w-full max-w-[1440px] mx-auto'>

      <Header />

      <main className='w-full max-w-[864px] mx-auto flex flex-col justify-center'>

        {/* PROFILE */}
        <section className='bg-zinc-700 py-8 px-10 mx-2 flex gap-8 rounded-lg relative top-[-65px] shadow-box'>
          {/* PHOTO */}
          <img
            className='w-[148px] h-[148px] rounded-lg'
            src={user.avatarURL}
            alt="Foto de Perfil"
            title={user.name} />

          {/* USER INFO */}
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex flex-col gap-1 sm:flex-row justify-between hover:underline'>
              <h2 className='text-zinc-50 text-2xl font-bold'>
                {user.name}
              </h2>

              <Link
                className='text-blue-500 flex items-center gap-2 text-xs font-bold'
                to="/">
                GITHUB
                <FaLink size={12} />
              </Link>
            </div>

            <p className='text-zinc-200 hidden md:block'>
              {user.bio}
            </p>

            <footer className='mt-auto flex flex-col gap-2 md:flex-row md:gap-6'>
              <div className='flex items-center gap-2'>
                <FaGithub size={18} className='text-zinc-400' />
                <span className='text-zinc-100'>{user.username}</span>
              </div>

              <div className='flex items-center gap-2'>
                <FaBuilding size={18} className='text-zinc-400' />
                <span className='text-zinc-100'>{user.company}</span>
              </div>

              <div className='flex items-center gap-2'>
                <FaUsers size={18} className='text-zinc-400' />
                <span className='text-zinc-100'>{user.followers} Seguidor(es)</span>
              </div>
            </footer>
          </div>
        </section>

        {/* POSTS */}
        <section className='mx-2 flex flex-col justify-between gap-12'>
          {/* SEARCH - FORM */}
          <header className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
              <h2 className='text-zinc-100 font-bold text-lg'>
                Publicações
              </h2>

              <span className='text-zinc-400 text-sm'>
                {issues.totalCount}
              </span>
            </div>

            <input
              className='bg-zinc-900 py-3 px-4 rounded-lg placeholder:text-zinc-400 focus:outline-blue-500 outline-none caret-blue-500 w-full h-full'
              type="text"
              name="post-name"
              placeholder='Buscar conteúdo' />
          </header>

          {/* LISTA DE POSTS */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'>
            {
              issues.totalCount >= 0 ? issues.items.map(item => (
                <Link className='bg-zinc-700 h-[260px] p-8 flex flex-col gap-5 rounded-[10px]' to={`/post/${item.number}`} key={item.title}>
                  <header className='flex items-center justify-between gap-6'>
                    <h3 className='text-zinc-50 text-xl font-bold'>
                      {
                        item.title
                      }
                    </h3>

                    <span className='text-zinc-300 text-xs w-[100px] text-center'>
                      Há 3 dias
                    </span>
                  </header>

                  <p className='text-zinc-100 leading-relaxed line-clamp select-none'>
                    {item.body}
                  </p>
                </Link>
              )) : (
                <>
                </>
              )
            }

          </div>

        </section>
      </main>
    </div>
  )
}