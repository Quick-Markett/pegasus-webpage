import { STATS } from './data'

export const Stats: React.FC = () => {
  return (
    <section className="bg-[#fff4ec] px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <article className="flex w-full max-w-lg flex-col gap-2 lg:border-r lg:border-neutral-400 lg:pr-8">
          <div className="flex w-full flex-col gap-1">
            <h2 className="text-xl font-medium lg:text-2xl">
              Impacto da Nossa Plataforma
            </h2>
            <div className="h-0.5 w-12 bg-amber-700" />
          </div>
          <p className="text-sm lg:text-base">
            Veja como nossa solução tem transformado os negócios e{' '}
            <br className="hidden xl:block" /> melhorado a eficiência para
            nossos clientes.
          </p>
        </article>
        <ul className="flex w-full flex-col items-center lg:flex-row lg:justify-between">
          {STATS.map((stat, index: number) => (
            <li
              className="flex w-full flex-col items-center gap-2"
              key={`${stat.label}-${index}`}
            >
              <h3 className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-2xl font-semibold text-transparent lg:text-3xl">
                {stat.prefix}
              </h3>
              <p
                className="text-center text-sm text-neutral-600 lg:text-base"
                dangerouslySetInnerHTML={{ __html: stat.label }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
