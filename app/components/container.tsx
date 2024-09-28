import classNames from "classnames"
type Props = {
    children: React.ReactNode
    className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto", className)}>{children}</div>
  )
}
