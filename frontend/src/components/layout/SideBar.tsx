import { Divider } from "../common/Divider"
import SideBarMenuButton from "./SidebarMenuButton"



const SideBar = () => {
    

    return <div className="w-52 text-white h-screen  bg-[#6359E9] rounded-r-2xl">
        <div className="flex flex-col items-center justify-center gap-y-6">
<SideBarMenuButton text={"Dashboard"} />
<SideBarMenuButton text={"Transactions"} />
<SideBarMenuButton text={"My Goals"} />
        </div>
        <div>Dashbaord</div>
        <div>Transactions</div>
        <div>My Goals</div>
        <Divider />
        <div>account</div>
    </div>
}


export default SideBar