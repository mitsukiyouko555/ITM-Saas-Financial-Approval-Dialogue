function checkboxes(idValue:any, fieldName:any, groupName:any, ){
    //needs the following itms:
    //name (treat this similar to class as it needs to have the same name to be in a group.)
    //  ITM With NO Base Visual Capture, ITM with Base Visual Capture, Endpoint checkboxes should have the same name; ent dlp and dlp transform should have the same name
    //id / value
    //fieldName
    //new
            //NOTE: If this is a late or super late Renewal, select Deal Type: "Renewal" rather than New    
    //add on/change
        //NOTE: If customer's never had ITM Saas, please select Deal Type: "New" rather than Add On.
            //Region Change Only
            //Add/Change QTY/GB of Additional Visual Capture
            //Add/Change Metadata Feed Only (Not avail for DLP Transform)

    return(
        <div>
            <input type="checkbox" id={idValue} name={idValue}/>{fieldName}
        </div>
    )

}
export default checkboxes