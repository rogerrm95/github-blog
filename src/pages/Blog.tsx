import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGithub } from '../hooks/useGithub'

// Icons //
import { FaGithub, FaUsers, FaBuilding, FaLink } from 'react-icons/fa'
// Componente //
import { Header } from '../components/Header'
import { Issue } from '../components/IssueItem'

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

              <a
                className='text-blue-500 flex items-center gap-2 text-xs font-bold'
                href="https://github.com/rogerrm95">
                GITHUB
                <FaLink size={12} />
              </a>
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
                {
                  `${issues.totalCount} ${issues.totalCount === 1 ? 'Publicação' : 'Publicações'}`
                }
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
                <Issue key={item.number} data={item} />
              )) : (
                <>
                </>
              )
            }

          </div>

        </section>
      </main>
    </div >
  )
}