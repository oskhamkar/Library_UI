import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import classNames from 'classnames'

interface FilterOption {
    label: string
    value: string
    count?: number
}

interface FilterSectionProps {
    title: string
    options: FilterOption[]
    selectedValues: string[]
    onChange: (values: string[]) => void
    type?: 'checkbox' | 'range'
}

const FilterSection = ({ title, options, selectedValues, onChange, type = 'checkbox' }: FilterSectionProps) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleChange = (value: string) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter((v) => v !== value))
        } else {
            onChange([...selectedValues, value])
        }
    }

    return (
        <div className="mb-6 pb-6 border-b border-gray-200">
            {/* Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full mb-4 hover:bg-gray-50 p-2 -mx-2 rounded transition-colors"
            >
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <HiChevronDown className={classNames('w-5 h-5 text-gray-500 transition-transform', !isOpen && '-rotate-90')} />
            </button>

            {/* Options */}
            {isOpen && (
                <div className="space-y-3">
                    {options.map((option) => (
                        <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type={type}
                                checked={selectedValues.includes(option.value)}
                                onChange={() => handleChange(option.value)}
                                className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-grow">{option.label}</span>
                            {option.count && <span className="text-xs text-gray-500">({option.count})</span>}
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterSection
