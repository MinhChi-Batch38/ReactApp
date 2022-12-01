import "./Alert.css"
export default function Alert({...props}) {
    return (
        <div>
        {props.success && 
        <div class="alert fit-screen alert-success alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={() => props.onAlert("success")}></button>
            <strong>Success!</strong> {props.content}
        </div>}
        {props.failed && 
        <div class="alert fit-screen alert-warning alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={() => props.onAlert("failed")}></button>
            <strong></strong> {props.content}
        </div>}
        </div>
    )
}