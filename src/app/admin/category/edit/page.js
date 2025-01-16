import { Suspense } from "react"
import EditCategory from "./EditCategory"



const page = () => {
    return (
        <Suspense>
            <EditCategory />
        </Suspense>
    )
}

export default page