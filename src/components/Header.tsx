import Logo from '../assets/logo.png'

export function Header(){
    return (
        <header className='bg-header bg-no-repeat bg-cover h-[296px] mx-auto flex flex-col justify-center items-center gap-5'>

        <img src={Logo} alt='' />

        <h1 className='text-2xl font-header text-blue-500'>
          GITHUB BLOG
        </h1>
      </header>
    )
}