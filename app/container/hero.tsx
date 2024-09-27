interface HeroProps {
    title: string
    subtitle: string
}
export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div>
        <h1 className="">{title}</h1>
        <p className="">{subtitle}</p>
    </div>
  )
}

