import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { HiArrowRight } from 'react-icons/hi'

interface CategoryCardProps {
    icon: React.ReactNode
    title: string
    description: string
    color: string
    categoryPath: string
    count?: number
}

const CategoryCard = ({ icon, title, description, color, categoryPath, count }: CategoryCardProps) => {
    const navigate = useNavigate()

    return (
        <div
            className={classNames(
                'rounded-lg p-6 cursor-pointer group transition-all duration-300',
                'hover:shadow-lg hover:-translate-y-2',
                color
            )}
            onClick={() => navigate(categoryPath)}
        >
            {/* Icon Container */}
            <div className={classNames('inline-block p-3 rounded-lg mb-4 bg-white/20 group-hover:bg-white/30 transition-colors')}>
                <div className="text-3xl text-white">{icon}</div>
            </div>

            {/* Title & Count */}
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {count && <p className="text-sm text-white/80 mb-3">{count} publications</p>}

            {/* Description */}
            <p className="text-sm text-white/90 mb-4">{description}</p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                <span>Explore</span>
                <HiArrowRight className="w-5 h-5" />
            </div>
        </div>
    )
}

export default CategoryCard
