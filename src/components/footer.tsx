import { LuGithub, LuGlobe, LuLinkedin } from 'react-icons/lu'

export default function Footer() {
  return (
    <div className="flex max-w-6xl m-auto justify-center min-w-6xl items-center align-middle p-4 xl:p-4 bg-primary-accent/20 rounded-2xl text-primary-color">
      <div className="flex w-full justify-between align-middle items-center">
        <div className="flex flex-col gap-2">
          <p className="text-text-primary">
            © 2025 Count My Words. Todos os direitos reservados.{' '}
            <a
              href="/terms"
              className="text-primary-color hover:text-primary-hover transition-colors duration-200"
            >
              Termos e Condições.
            </a>
          </p>
        </div>
        <div className="flex gap-4 text-2xl items-center">
          <a
            href="https://github.com/giacomosalsano"
            target="_blank"
            className="text-primary-color hover:text-primary-hover transition-colors duration-200 hover:scale-110"
          >
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/giacomosalsano"
            target="_blank"
            className="text-primary-color hover:text-primary-hover transition-colors duration-200 hover:scale-110"
          >
            <LuLinkedin />
          </a>
          <a
            href="https://www.giacomosalsano.com/"
            target="_blank"
            className="text-primary-color hover:text-primary-hover transition-colors duration-200 hover:scale-110"
          >
            <LuGlobe />
          </a>
          <img
            src="https://komarev.com/ghpvc/?username=giacomosalsano&color=00613D&style=flat&abbreviated=true&base=600&label=visits"
            alt="Visits"
            className="h-6"
          />
        </div>
      </div>
    </div>
  )
}
