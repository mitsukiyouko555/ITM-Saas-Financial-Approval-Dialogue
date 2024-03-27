import TheFields from "../fields"

export default function AdditionalITMSaasUsers(props:any){
    //show if enterprise dlp or dlp transform is checked
    return(
        <>
            <TheFields handleBlur={props.handleBlur} theId="additionalITMSaasUsers" theClass="ITMForm" fieldName="Additional ITM Saas Users" type="text"/>

            <TheFields handleBlur={props.handleBlur} theId="totalITMSaasUsers" theClass="ITMForm" fieldName="Total ITM Saas Users" type="text"/>
        </>
    )
}