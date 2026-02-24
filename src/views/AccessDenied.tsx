import { useNavigate } from 'react-router-dom'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const AccessDenied = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center h-full">
            <Card className="max-w-md w-full" bodyClass="space-y-4 text-center">
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                        Access denied
                    </p>
                    <p className="text-xs text-gray-500">
                        You do not have permission to view this area of the platform.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Button
                        size="sm"
                        variant="solid"
                        color="blue-600"
                        onClick={() => navigate('/home')}
                    >
                        Go to homepage
                    </Button>
                    <Button
                        size="sm"
                        variant="plain"
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default AccessDenied

