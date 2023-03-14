// Write code related to Home page here

let meets_data = JSON.parse(localStorage.getItem("meets")) || [];


function handle_form(event){
    event.preventDefault();
    const form_name = document.querySelector("#name").value;
    const form_desc = document.querySelector("#desc").value;
    const form_month = document.querySelector("#month").value;
    const form_week = document.querySelector("#week").value;
    const form_type = document.querySelector("#meetType").value;

    let meet_object=  {form_name,form_month,form_desc,form_week,form_type}

    meets_data.push(meet_object);
    localStorage.setItem("meets",JSON.stringify(meets_data));
    
}