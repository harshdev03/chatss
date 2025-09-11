import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Btn({children , onClick}:{
  onClick : ()=> void,
  children? : React.ReactNode
}) {

  
  return (
    <Button onClick={onClick} className="group cursor-pointer font-medium">
      Join Chat
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
      {children}
    </Button>
  )
}
