import { Spinner } from "@/components/ui/spinner"
export default function Loading(){
    return(
        <div className="flex items-center justify-center gap-4 w-full">
            <Spinner className={"size-8"} />
        </div>
    )
}
