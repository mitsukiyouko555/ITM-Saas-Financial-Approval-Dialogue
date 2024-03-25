import TheFields from "../fields"
export default function DateOrTerm(props:any){
    if (props.term_date_radio == "date"){
        return(<TheFields theId="date" theClass="date" fieldName="License Through" type="date" handleBlur={props.handleBlur} />)
    }
    else if (props.term_date_radio == "term"){
        return(<TheFields theId="term" theClass="term" fieldName="Term(s)" type="text" handleBlur={props.handleBlur} />)
    }
    else{
        console.log("no term or date selected")
    }
}