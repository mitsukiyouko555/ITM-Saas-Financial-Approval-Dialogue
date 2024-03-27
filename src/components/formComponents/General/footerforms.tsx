import TheFields from "../fields"
import DateOrTerm from "./dateORterm"
export default function FooterForms(props:any){

    return(
        <>
            <TheFields
            fieldName="Select Term or End Date"
            handleBlur={props.handleBlur} 
            theClass="term_date" 
            theId="term_date_radio"
            type="radio" 
            options={
            [[["term"],["term_date"],["Term"],["term"]],
            [["endDate"],["term_date"],["End Date"],["endDate"]]]} 
            />

            <DateOrTerm handleBlur={props.handleBlur} term_date_radio={props.term_date_radio} />
                
            <label htmlFor="misc">Miscellaneous Comments: </label>
            <div>
            <textarea id="misc" name="misc" className="footerForms" wrap="soft" onBlur={props.handleBlur}></textarea>
            </div>
        </>
    )
}