import TheFields from "../fields"
export default function AdditionalEndpointDLPUsers(props:any){
    //show if enterprise dlp or dlp transform is checked
    return(
        <>
            <TheFields handleBlur={props.handleBlur} theId="additionalEndpointDLPUsers" theClass="endpointForm" fieldName="Additional Endpoint DLP Users" type="text"/>

            <TheFields handleBlur={props.handleBlur} theId="totalEndpointDLPUsers" theClass="endpointForm" fieldName="Total Endpoint DLP Users" type="text"/>
        </>
    )
}