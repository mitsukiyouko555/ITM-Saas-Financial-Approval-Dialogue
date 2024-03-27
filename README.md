How to use form components:

1. IF making an entirely new field that needs to be tracked with useState, add it to the formDeets useState in App.tsx.
2. See if you want to make a new file or add a field to one of the existing something_form.tsx pages
3. If creating a new .tsx file, Import the "TheFields" Component
4. In MainForms.tsx, import the newly created .tsx file, add it to the return statement, between the form brackets, then pass in the handleBlur function, and if needed, pass in the formDeets, and setFormDeets UseState parameters as props.
5. Then Create React component(s) with it
6. Pass the props to the component. NOTE: always pass a handleBlur component. The handleBlur component is currently being passed down from, and resides in, forms.tsx
7. You can create custom inputs and other types of data but if you want to track them via UseState, you must add their "name" parameter to the useState constant located in App.tsx AND you must pass the handleBlur function to either its onClick, onChange, or onBlur (or other on-handler) for it to update the state.

--------------
Text, Number, Date Fields
--------------
- Sample: <TheFields theId="itmSaasUsers" theClass="ITMForm" fieldName="ITM Saas User" handleBlur={props.handleBlur} type="text" />
- Parameters to pass (doesn't have to be in this order but you should pass all of them):
    1. theId - this is the id of the field. It is CRITICAL that this matches the id found in the useState function (located in forms.tsx) - otherwise it won't update the state! (Note that this the id is used for the name which is what correlates to the useState function.)
    2. theClass - this is/are the class(es) of the field
    3. fieldName - this is the name of the field. Basically what you'd consider the main label.
    4. type - this is the type of field. (text, number, checkbox, dropdown, date, and radio are the only supported options with the TheFields Component. All others outside of these are currently not supported. Support can be added OR if its just a one off, you can just manually create an input function.)
    5. value - the value of the field.
    6. handleBlur - the handleBlur function that is passed as a prop. (props.handleBlur). The function triggers onBlur (or OnChange for Date) with a useEffect that triggers it anytime any useState item is updated.

--------------
Checkboxes
--------------

1. You'd pass all the parameters found in "Fields". Only difference is your onBlur Function will be triggered via an onChange rather than an onBlur but is still passed the same way for the sake of consistency.
2. Note that for the VALUE, how this is set up is, by default the checkbox is off and its state is 0. the value is {props.fieldname == 0 ? 1:0}. Basically, IF the value of the checkbox in useState is 0 (unchecked - default state), set it to 1 (checked), otherwise (if its set as 1 - checked) set it to 0 (unchecked) upon click as we are passing the VALUE during the onclick function (called onBlur but as stated earlier basically takes the value and set it using the use state.)

The fieldname's usestate is passed from App.tsx to forms.tsx to itmforms, endpointforms, and checkboxforms.tsx. If using the terniary operator to set the state and you don't have access to the usestate parameters, you'll have to prop drill it down.
--------------
Dropdowns and Radio Buttons
--------------
- Sample: <Dropdowns fieldName="Deal Type" handleBlur={props.handleBlur} theClass="Form" theId="dealType" options=
{
[[["default"],["dealtype"],["Select a Deal Type"],["null"]],
[["new"],["dealtype"],["New"],["new"]], 
[["renewal"],["dealtype"],["Renewal"],["renewal"]], 
[["add-on"],["dealtype"],["Add-On"],["add-on"]]]
}/>

- Radio Button Sample: <TheFields fieldName="Select Term or End Date" handleBlur={props.handleBlur} theClass="term_date" theId="term_date_radio" type="radio" 
    options={
    [[["term"],["term_date"],["Term"],["term"]],
    [["endDate"],["term_date"],["End Date"],["endDate"]]]} 
    />

- Parameters to Pass:
1. You'd pass all the parameters found in "Fields" Except for Value. Only difference is your handleBlur Function will be triggered via an onChange rather than an onBlur but is still passed the same way for the sake of consistency.
2. You'll also pass "options". These are passed in an array with an array inside an array. So there are 3 levels of Arrays. The first level array is the one that surronds everything. with in that, There's what I call the second level of arrays. Each 2nd level array represents an option in the dropdown menu. There are as many 2nd level arrays as you need there to be options available. Within a 2nd level array are 4 arrays. These 4 arrays represent the id, the class, the option text / field name, and the value.