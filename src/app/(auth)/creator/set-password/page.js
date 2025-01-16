import SetPassword from "./SetPassword"
import { Suspense } from "react"


const page = () => {
    return (
        <Suspense>
            <SetPassword />
        </Suspense>
    )
}

export default page