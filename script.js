document.getElementById('navigation').innerHTML = `
<center><table>
<tr>
    <td><a href="index.html">Ticketing & Mailing</a></td>
    <td><a href="Temp_pass.html">Temp password tools</a></td>
    <td><a href="weekend.html">Weekends</a></td>
    <td><a href="esc.html">Escalations</a></td>
    <td><a href="convo.html">Teams Templates</a></td>
</tr>
</table></center>`;
document.getElementById('locations_const').innerHTML = `<select name="location" id="userLocation">
</select> <br>`
function naming(n){
    let r = ''
    if (n.includes('.')){
        r = n.split('.')[0]
        r = r.charAt(0).toUpperCase() + r.slice(1); 
        r2 = n.split('.')[1];
        r2 = r2.charAt(0).toUpperCase() + r2.slice(1); 
        return r + ' ' + r2;
    }else{
        return r;
    }
};
 // defining locations
function findLocation(location){
    if (location == 'NA'){
        return ' N/A - Non-Applicable'
    }else if (location == 'WFH'){
        return ' WFH - Working From Home.'
    }else if(location == 'MI'){
        return ''
    }else if (location == 'NY'){
        return ''
    }else if (location == 'WI'){
        return ''
    }else if (location == 'BO'){
        return ''
    }else if (location == 'NC'){
        return ''
    }else if(location == 'CA'){
        return ''
    }else if(location == 'JP'){
        return ''
    }else if(location == 'TX'){
        return ''
    }else {
        return ''
    }
};
//Location Time zone
function findTimeZone(location){
    if(location == 'MI'){
        return ' Central Daylight Saving Time, Central Time, CT - CDST'
    }else if (location == 'NY'){
        return ' Eastern Daylight Saving Time, Eastern Time, EST - EDST'
    }else if (location == 'WI'){
        return ' Central Daylight Saving Time, Central Time, CT - CDST'
    }else if (location == 'BO'){
        return ' Eastern Daylight Saving Time, Eastern Time, EST - EDST'
    }else if (location == 'NC'){
        return ' Eastern Daylight Saving Time, Eastern Time, EST - EDST'
    }else if(location == 'CA'){
        return ' Pacific Daylight Saving Time, Pacific Time, PST - PDST'
    }else if(location == 'JP'){
        return ' Japan Standard Time, JST, (UTC+09:00)'
    }else if (location == 'UK'){
        return ' British Summer Time, Greenwich Mean Time, GMT - GMT+1'
    }else if (location == 'TX'){
        return ' Central Daylight Saving Time, Central Time, CT - CDST'
    }else {
        return ' Not specified.'
    }
}
function execute(){
    let user_email = document.getElementById('userName').value;
    let user_phone = document.getElementById('number').value;
    let User_location = document.getElementById('userLocation').value;
    let User_mainIssue = document.getElementById('issues').value;
    let User_Recurrent_issues = document.getElementById('recurrent').value;
    //Splitting email address
    const nameAndLast_on_mail = user_email.split('@')[0];
    //Separating if is a . name address based
    let name_on_mail = naming(nameAndLast_on_mail);
   
//Defining Ticket description
function findDesc(decription, issue){
    let open_argument = '';
    let open_argument_remote = ``;




    if (decription == 'PSR'){
        return open_argument + '' + closing_arg;
    }else if (decription == 'DriverMal'){
        return ``+
         open_argument_remote + `

         ` + closing_arg_remote
    }else if (decription == 'SSPRS'){
        return open_argument + '' + closing_arg;
    }else if (decription == 'MPG'){
        return open_argument_remote + `` + closing_arg_remote;
    }else if (decription == 'BLK'){
        return open_argument + '' + closing_arg;
    }else if (decription == 'ghost'){
        return ''
    }else if (decription == 'ADTEAM'){
        return open_argument + ``
    }else if (decription == 'WF'){
        return open_argument + `
        ${issue}
        ` + closing_arg
    }else if (decription == 'CM'){
        return open_argument_remote + `
        `
    }else if(decription == 'Outlook'){
        return `
        ${open_argument_remote}
        ` + closing_arg_remote
    }else if (decription == 'W_net_rst'){
        return ''+`
        ` + closing_arg_remote
    }else if (decription == 'HR'){
        return open_argument + ``
        + closing_arg
    }else if(decription == '2MFA'){
        return issue + '<br>' + open_argument_remote + `
        `
        + closing_arg
    }else if (decription == 'blr'){
        return open_argument + `${issue}
        <br><br>
        `
        + closing_arg
    }
    else{
        return `
        ${issue} 
        <br>
        ` + open_argument_remote + '<br>' + closing_arg_remote
    }
};
//adding to user object
const obj_user = {
    fullname : name_on_mail,
    email: user_email,
    phone : user_phone,
    uslocation : findLocation(User_location),
    issue : User_mainIssue,

    //ticketing object with description
    fullfillmentA: function(){
        return `
        Name: ${this.fullname}<br>
        User ID: N/A: Non-Applicable <br>
        Call back number: ${this.phone}<br>
        Email: ${this.email}<br>
        Location: ${this.uslocation}<br>
        <br><br>
        Issue: ${this.issue}`
    },

};
//calling displaying information for copy
document.getElementById('aresponse').innerHTML = obj_user.fullfillmentA();
document.getElementById('bresponse').innerHTML = findDesc(User_Recurrent_issues, obj_user.issue);
const display_ids = ['copyaccess','copyaccessb','tiful','sectionA','sectionB','copyaccessc', 'copyescal']     //Copy ID's 
for (let i =0; i<=display_ids.length;i++){
    document.getElementById(display_ids[i]).style.display = 'block';
}
};

//Copy the element 
function copyEvent(id){
    let str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand('copy')
};


//Emailing app function
function email_user(){
    let user_email = document.getElementById('userName').value;
    let inc_number = document.getElementById('INC').value;
    let emailType = document.getElementById('emialType').value;
    let fill = document.getElementById('emailres');
    let user_phone = document.getElementById('number').value;
    //Splitting email address
    const nameAndLast_on_mail = user_email.split('@')[0];
    //Separating if is a . name address based
    let name_on_mail = naming(nameAndLast_on_mail);
    //Emailing function
    function final_emailreturn(name, type, incnum, numberph){
        const date = new Date();
        let open_script = `Hello ${name},<br><br>`;// NAME CHANGE 
        let closing_script = ``;
        if (type == 'CB'){
            return open_script + `
            
            ` + closing_script;
        }else if (type == 'Re1'){
            return open_script + `
            ` +closing_script;
        }else if (type == 'Re3'){
            return open_script + `
            ` +closing_script;
        }else if (type == 'BD'){
            return open_script + `
            ` +closing_script;
        }

        else{
            return open_script + `{Content}<br><br>` + closing_script;
        }
    }
    fill.innerHTML = final_emailreturn(name_on_mail,emailType,inc_number,user_phone)
    //calling displaying information for copy
const display_ids = ['copyaccessc']
for (let i =0; i<=display_ids.length;i++){
    document.getElementById(display_ids[i]).style.display = 'block';
}
}







function pass(){

     let password = document.getElementById("password");

    function genPassword(len) {
       var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var passwordLength = len;
       var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        return password;
    }
    password.innerHTML = genPassword(12);
}







function weekends(){
    let conf_item = document.getElementById('confg_item').value;
    let value_display = document.getElementById('re_confg_item');
    if (conf_item == '' || conf_item == '' ) {
        value_display.innerHTML = '';
    } else if (conf_item == '' || conf_item == '' || conf_item == ''){
        value_display.innerHTML = '';
    } else {
        value_display.innerHTML = '';
    }   
    document.getElementById('cop').innerHTML = `<button type="button" onclick="copyEvent('re_confg_item')">copy</button>`
}






function per_escalation(){
    let response = document.getElementById('esc_response');
    let Issue = document.getElementById('Issue').value;
    let steps = document.getElementById('steps').value;
    let Error = document.getElementById('Error').value;
    let Device = document.getElementById('Device').value;
    let Device_name = document.getElementById('Device_name').value;
    let number = document.getElementById('number').value;
    let Location = document.getElementById('userLocation').value;
    let reach_time = document.getElementById('reach_time').value;
    let KB = document.getElementById('KB').value;
    let Add_info = document.getElementById('Add_info').value;
    let Zone = findTimeZone(document.getElementById('userLocation').value);

    const escalation = {
        Issue_obj : Issue,
        steps_obj : steps,
        Error_obj : Error,
        Device_obj : Device,
        Device_name_obj : Device_name,
        number_obj : number,
        Location_obj : findLocation(Location),
        Zone_obj : Zone,
        reach_time_obj : reach_time,
        KB_obj : KB,
        Add_info_obj : Add_info,
        //ticketing object with description
        fullfillment_escal: function(){
            let buttonCopy = ''
            let description = ``
            if (this.Add_info_obj != '') {
                return description + additional_info
            } else {         
                return description} 
        }
    }
    response.style.display = 'block';
    response.innerHTML = escalation.fullfillment_escal();
    document.getElementById('style_esc').style.display = 'block';
};



//Uvvip USER ESCALATIONS 
let techVVIPPhtml = ``
const locationTechVIP = ['']
const techsForV = ['']

for (let i = 0; i < locationTechVIP.length; i++){
    techVVIPPhtml += `<tr><td>${techsForV[i]}</td><td>${locationTechVIP[i]}</td></tr>`
}

document.getElementById('').innerHTML = techVVIPPhtml + '</table>'



function mailHandover(){
    let current_s = document.getElementById('current_shift').value ;
    let next_s = document.getElementById('next_shift').value;
    let current_time = new Date().toJSON().slice(0, 10);
    const shifts = [current_s,next_s]
    for (let i = 0 ; i < shifts.length; i++){
        if ( shifts[i] == ''){
            shifts[i] = `${current_time}, `;
        }else if(shifts[i]  == '6_15'){
            shifts[i] = `${current_time}, `;
        } else {
            shifts[i] = `${current_time}, `;
        }
    }
    const responseweekends = {
        responsable_name: document.getElementById('next_shift_user').value,
        current_shift_data: shifts[0],
        Next_shift: shifts[1],
        issues_handed: document.getElementById('issues_handover').value,
        critical_INC_reported: document.getElementById('priority_inciden').value,
        INC_c: document.getElementById('INC_hand').value,
        REQ_c: document.getElementById('REQ_hand').value,
        task_c: document.getElementById('TA_hand').value,
        total_inc: document.getElementById('INC_count_weekwnds').value,
        total_req: document.getElementById('REQ_count_weekwnds').value,
        total_task: document.getElementById('TA_count_weekwnds').value,
        active_count_inc_sat: document.getElementById('sat_inc').value, 
        active_count_inc_sun: document.getElementById('sun_inc').value,
        active_count_taks_sat: document.getElementById('sat_task').value,
        active_count_taks_sun: document.getElementById('sun_task').value,
        Request_reported: document.getElementById('request_details').value,
        sLA_vio: document.getElementById('remark_week_a').value,
        th_is_a_c: document.getElementById('remark_week_b').value,
        communication_happening: document.getElementById('remark_week_c').value,
        reply : function(){
            return ``
        }
       };
       document.getElementById('response_weekends_shift_handover_table').innerHTML = responseweekends.reply();
       document.getElementById('makeitcopy').innerHTML = `
       <center><button type="button" onclick="copyEvent('response_weekends_shift_handover_table')">Copy</button></center>
       `
}


//Convo creattion TEAMS 

function convoTeams(){
    
    let name_teams =  document.getElementById("name_teams").value
    let userName = document.getElementById("user_name").value
    
    
    
    //Openings
    let openings_text = '';
    const openingForTeams = []
    let openingid = 'openings'  
    for (i = 0; i < openingForTeams.length; i++){
        openings_text += `<div><p id="${openingid+i.toString()}">`+ openingForTeams[i] +`</p>
        <button type="button" onclick="copyEvent('${openingid+i.toString()}')">Copy</button> </div>`
    }


    //Requests
    let requests_text = '';
    const requestForTeams = []
    let requestid = 'requests'
    for (i = 0; i < requestForTeams.length; i++){
        requests_text += `<div><p id="${requestid+i.toString()}">`+ requestForTeams[i] +`</p>
        <button type="button" onclick="copyEvent('${requestid+i.toString()}')">Copy</button> </div>`
    }

    let closing_text = '';
    const closingForTeams = [
        `Thank you so much ${name_teams}`,
        `${name_teams}, thank you so much`,
        `Appreciate it, ${name_teams}`,
        `Thanks, have a great day ${name_teams}`,
    ]
    let closingid = 'closing '
    for (i = 0; i < closingForTeams.length; i++){
        closing_text += `<div><p id="${closingid+i.toString()}">`+ closingForTeams[i] +`</p>
        <button type="button" onclick="copyEvent('${closingid+i.toString()}')">Copy</button> </div>`
    }

    document.getElementById('openings_teams').innerHTML = openings_text
    document.getElementById('requests_teams').innerHTML = requests_text
    document.getElementById('closings_teams').innerHTML = closing_text
}