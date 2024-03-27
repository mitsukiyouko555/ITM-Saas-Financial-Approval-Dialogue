import TheFields from "../fields";

export default function MetadataFeedForm(props:any){
    
    return(
        <>
            <TheFields handleBlur={props.handleBlur} theId="metadataFeedQuantity" theClass="MetadataFeed" fieldName="Metadata Feed Quantity" type="text"/>

            <TheFields handleBlur={props.handleBlur} theId="metadataFeedCapacity" theClass="MetadataFeed" fieldName="Metadata Feed Per 30 Days in GBs" type="text"/>
        </>
    )
}