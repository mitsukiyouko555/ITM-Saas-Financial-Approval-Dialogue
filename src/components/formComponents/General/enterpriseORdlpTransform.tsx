import TheFields from "../fields"

export default function EnterpriseDLPorDLPTransformForm(props:any){
    
    //if enterpriseDLP is checked, show Enterprise DLP Users
    //if DLP transform is checked, show DLP Transform Users and DLP Transform Lite Users
    
    return(
        <>
            <TheFields handleBlur={props.handleBlur} theId="totalEnterpriseDLPUsers" theClass="EntDLPForm" fieldName="Total Enterprise DLP Users" type="text"/>

            <TheFields handleBlur={props.handleBlur} theId="dlpTransformRegularUsers" theClass="DLPTransformForm" fieldName="Regular DLP Transform Users" type="text"/>

            <TheFields handleBlur={props.handleBlur} theId="dlpTransformLightUsers" theClass="DLPTransformForm" fieldName="DLP Transform Users Light Users" type="text"/>

        </>
    )
}