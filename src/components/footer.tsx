import { LuGithub, LuGlobe, LuLinkedin } from 'react-icons/lu'

export default function Footer() {
  return (
    <div className="flex w-full justify-between items-center align-middle  bg-menu-bg p-4 xl:p-4 rounded-2xl text-primary shadow-xl shadow-shadow">
      <div></div>
      <div className="flex w-full justify-between align-middle items-center">
        <p>© 2025 Count My Words. Todos os direitos reservados.</p>
        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/giacomosalsano" target="_blank">
            <LuGithub />
          </a>
          <a href="https://www.linkedin.com/in/giacomosalsano" target="_blank">
            <LuLinkedin />
          </a>
          <a href="https://www.giacomosalsano.com/" target="_blank">
            <LuGlobe />
          </a>
        </div>
      </div>
    </div>
  )
}
