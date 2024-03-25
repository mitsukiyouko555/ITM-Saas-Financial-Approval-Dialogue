import TheFields from "../../formComponents/fields"

function DLPTransformForm(){
    
    return(
        <>
            {TheFields("dlpTransformUsers", "dlpTransformform", "Total DLP Transform Users")}
        {/* <p className="wip">Additional Endpoint DLP Users:</p>
        <p className="wip">Total Endpoint DLP Users:</p>
         These should go in the enterprise dlp and dlp transform forms.*/}
        </>
    )
}

export default DLPTransformForm