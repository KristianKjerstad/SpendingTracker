import { Button } from '../common/Button'
import { FaBeer } from 'react-icons/fa'

type SideBarMenuButtonProps = {
    text: string
}

const SideBarMenuButton = ({ text }: SideBarMenuButtonProps) => {
    return (
        <div>
            <Button variant="ghost" className="w-36 text-white h-12">
                <div className="flex flex-row justify-between text-left gap-x-2">
                    <FaBeer />
                    <p>{text}</p>
                </div>
            </Button>
        </div>
    )
}

export default SideBarMenuButton
