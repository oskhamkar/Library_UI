import { ReactNode } from 'react'
import classNames from 'classnames'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    clickable?: boolean
    onClick?: () => void
}

const Card = ({ children, className, hover = true, clickable = false, onClick }: CardProps) => {
    return (
        <div
            className={classNames(
                'bg-white rounded-lg border border-gray-200 overflow-hidden',
                hover && 'hover:shadow-lg transition-shadow duration-300',
                clickable && 'cursor-pointer',
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card
