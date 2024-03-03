//parameter 1/[0] is the id
//parameter 2/[1] is the class(es)
//parameter3/[2] is the optionName

//how will the fieldname be defined? should the same fieldname be defined for each

function Dropdowns(...params:any[]){
    console.log(params[0][0])
    console.log(params[1])
    console.log(params[2])

    return(
        <>
            <div className={params[1]}>
            {/* dropdown select and options go here*/}
 

                <label>{params[0][3]}: </label>

                <select name={params[0][3]} id={params[0][0]} className={params[0][1]}>
                    <option>{params[0][2]}</option>
                    <option>{params[1][2]}</option>
                    <option>{params[2][2]}</option>    
                    <option>{params[3][2]}</option>  
                    <option>{params[4][2]}</option>  

                </select>

            </div>

        </>
    )

}
export default Dropdowns