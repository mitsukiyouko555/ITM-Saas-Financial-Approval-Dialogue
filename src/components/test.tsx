import {afun} from "../components/afun.tsx"

// note if you get an error like the one below, put .. before the path depending on how many folders it's in. If its one folder down from src, type .. before the /path
//Error in question: Cannot find module './components/afun.tsx' or its corresponding type declarations.

function Test(test0:string, test1:string, test2:string, test5:number){
    
    let test3:String = String(test1+test2)

    function test4(e: any){
        // console.log(test5)
        test5 = e.target.value
        console.log(test0, test5, afun)

    }
    return(
        <>
            <h1>{test3}</h1>
            {test1} <input onBlur={test4} id={test0}/>

        </>
    )
}
export default Test

// How do I do this... well all my user counts and stuff are all input fields. pretty much all the time the value is a number...
//looks like the above works well.. I can then change test5a
//lets say i make a function for itm and a function for endpoint.. when it comes to endpoint dlp and dlp transform.. how would that work?
//perhaps i'd have the function take the total users and then say... set test5. then I would do the split out first and then
    //CALL the itm function and pass in that test5 input and take that...
    //Ok... I'm finally starting to understand how to make this work properly...

    //Each property (ITM Saas Users, ITM Saas Retention, ITM Saas Visual capture, and so on...)
    //BUT issue is retentions are dropdown based.. not input based.. so i guess i need 2 components thus far: Fields and Dropdowns.

    //Fields:
        //Total DLP Transform Users
        //Total Enterprise DLP Users
        //ITM Saas Users
            //Additional ITM Saas Users
            //Total ITM Saas Users
        //ITM Saas Retention
        //ITM Saas Visual Capture
            // Additional Visual Capture QTY:
                //ITM Saas Additional Visual Capture in GBs:
            // ITM Saas Total Visual Capture
        //ITM Average Daily Rate of Activities per User
        //Endpoint DLP Users
            //Additional Endpoint DLP Users
            // Total Endpoint DLP Users
        //Metadata Feed QTY:
            //Metadata Feed Capacity per 30 Days in GBs:
          
    //Dropdowns:
        //Deal Type
        //Region
        //ITM Retention
        //Endpoint Retention

        //radio button for start/end dates both link to one function that splits out and returns what is selected.
        //textarea can go in app.tsx

        //since this actually is a bit complicated... lets' start by first creating the fields...