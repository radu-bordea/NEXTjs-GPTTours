import { SiOpenaigym } from "react-icons/si"
import ThemeToggle from "./ThemeToggle"

const SidebarHeader = () => {
  return (
    <div className="flex mb-4 gap-4 px-4">
      <SiOpenaigym className="w-6 h-6 text-primary"/>
      <h2 className="text-base font-extrabold text-primary">GPT Tours</h2>
      <ThemeToggle/>
    </div>
  )
}

export default SidebarHeader