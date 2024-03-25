import TheFields from "../formComponents/fields"
export default function Test5(){

    //try to do a dynamic input based on the type.. like for example, if the type is a checkbox, the function should be a oncheck function and it'd show only the dif that has the checkbox properties like on click, etc.
    return(
        <>
            <div>
            {/* ITM Saas Users:<input name="itmSaasUsers" onBlur={handleBlur}/> */}
            {TheFields("itmSaasUsers", "ITMForm", "ITM Saas Users")}
            </div>
        </>
    )
}