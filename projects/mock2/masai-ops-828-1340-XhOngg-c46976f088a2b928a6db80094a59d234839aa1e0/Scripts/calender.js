// Write code related to Calender page here
let meet_data = JSON.parse(localStorage.getItem("meets")) || [];


let filter_by_month = document.querySelector("#month");
filter_by_month.addEventListener("change",(event)=>{
    let filtered_data = meet_data.filter((element,index)=>{
        return event.target.value === element.form_month
    });
    console.log(filtered_data);
    display(filtered_data)
});

let curr_month = meet_data.filter((element,index)=>{
    return "January" === element.form_month
});
    let week1 = document.querySelector("#Week-1")
    let week2 = document.querySelector("#Week-2")
    let week3 = document.querySelector("#Week-3")
    let week4 = document.querySelector("#Week-4");

function display(arr){

    week1.innerHTML=null
    week2.innerHTML=null
    week3.innerHTML=null
    week4.innerHTML=null


        arr.forEach((meet,index) => {
            let meet_div=document.createElement("div");
            let meet_heading = document.createElement("h2");
            let meet_desc = document.createElement("p");
            let meet_type = document.createElement("p");
            let meet_week = document.createElement("p");
            let delete_meet = document.createElement("button"); 
        if('Week-1'===meet.form_week){
            meet_heading.innerText = meet.form_name;
            meet_desc.innerText = meet.form_desc;
            meet_type.innerText = meet.form_type;
            console.log('working');
            meet_week.innerText = meet.form_week;
            delete_meet.innerText = 'delete';
            week1.append(meet_heading,meet_desc,meet_type,meet_week,delete_meet)
        }
        else if( 'Week-2'===meet.form_week){
            meet_heading.innerText = meet.form_name;
            meet_desc.innerText = meet.form_desc;
            meet_type.innerText = meet.form_type;
            meet_week.innerText = meet.form_week;
            delete_meet.innerText = 'delete';
            week2.append(meet_heading,meet_desc,meet_type,meet_week,delete_meet)
        }
        else if( 'Week-3'===meet.form_week){
            meet_heading.innerText = meet.form_name;
            meet_desc.innerText = meet.form_desc;
            meet_type.innerText = meet.form_type;
            meet_week.innerText = meet.form_week;
            delete_meet.innerText = 'delete';
            week3.append(meet_heading,meet_desc,meet_type,meet_week,delete_meet)
        }
        else if( 'Week-4'===meet.form_week){
            meet_heading.innerText = meet.form_name;
            meet_desc.innerText = meet.form_desc;
            meet_type.innerText = meet.form_type;
            meet_week.innerText = meet.form_week;
            delete_meet.innerText = 'delete';
            week4.append(meet_heading,meet_desc,meet_type,meet_week,delete_meet)
        }
      

    });
}

display(curr_month)