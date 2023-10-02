import { useParams } from "react-router-dom"

export const Character = () => {
    const { id } = useParams()
    console.log("id", id)
    return(
        <div>
            <h4>Character details</h4>
        </div>
    )
}