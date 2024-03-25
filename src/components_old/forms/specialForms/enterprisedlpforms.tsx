import TheFields from "../../formComponents/fields"

function EnterpriseDLP(){

//can change:
    //total entDLP users
    //additional itm usrs
        //which updates the base VC
    //additional vc
        //which updates the total VC
    //additional endpoint usrs
    //Metadata Feed
    /* <p className="wip">Additional Endpoint DLP Users:</p>
    <p className="wip">Total Endpoint DLP Users:</p>
        These should go in the enterprise dlp and dlp transform forms.*/

    return(
        <>
            {TheFields("entDLPUsers", "entDLPform", "Total Enterprise DLP Users")}
        </>
    )
}

export default EnterpriseDLP