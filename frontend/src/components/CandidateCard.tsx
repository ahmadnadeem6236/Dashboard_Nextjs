import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'

interface CandidateCardProps {
    image: StaticImageData
    title: string
    description: string
}

const CandidateCard: React.FC<CandidateCardProps> = ({
    image,
    title,
    description,
}) => {
    return (
        <Card className="px-8  lg:w-[202px] h-[122px] flex flex-col justify-center">
            <CardHeader>
                <CardTitle>
                    <Image width={30} height={30} src={image} alt="img" />
                </CardTitle>
                <CardDescription className="pt-2">{title}</CardDescription>
            </CardHeader>
            <CardFooter className="pl-1">
                <p>{description}</p>
            </CardFooter>
        </Card>
    )
}

export default CandidateCard
