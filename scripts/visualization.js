//to change background color and height of sorting element

var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);
//var onclick="speakText()"; type="button"; value="Bubble";
function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    
    {
        case 1:speed=1;
                break;
        case 2:speed=5;
                break;
        case 3:speed=8;
                break;
        case 4:speed=40;
                break;
        case 5:speed=100;
                break;
        case 6:speed=250;
                break;
        case 7:speed=450;
                break;
        case 8:speed=750;
                break;
        case 9:speed=1250;
                break;
        case 10:speed=1800;
                break;
    }
    console.log("speed"+speed);
    delay_time=10000/(Math.floor(array_size/10)*speed);//decrease numerator to increase speed
}
var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;


function div_update(cont,height,color,)
{
    /*
    if(array_size<=25)
    {        
        cont.innerHTML=height;
        /*window.setTimeout(function()
        {
            cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";"; 
        },c_delay+=delay_time);
            
    }    
    */ 
    
        window.setTimeout(function()
            {
                cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";"; 
                if(array_size<=25)
                 {        
                    cont.innerHTML=height;      
                }    
            },c_delay+=delay_time);            
}


function enable_buttons()
{
    window.setTimeout(function()
    {
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}