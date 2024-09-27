type Props = {
    children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[120rem] mx-auto">{children}</div>
  )
}
