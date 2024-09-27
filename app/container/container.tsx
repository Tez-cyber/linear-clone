type Props = {
    children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <div className="w-[1200px]">{children}</div>
  )
}
