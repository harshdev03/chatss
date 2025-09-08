import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Btn() {
  return (
    <Button className="group cursor-pointer">
      Join Chat
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
  )
}
