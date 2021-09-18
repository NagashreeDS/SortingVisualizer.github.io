var inp_as=document.getElementById("a_size"),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var inp_ef=document.getElementById("Info_Cont2");
/*
var audio=new Audio("test_audio/audio_file.mp4");
audio.play();
*/
var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
//var div_lab=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);
//inp_gen.addEventListener("click",speakText1);

function generate_array()
{
    cont.innerHTML="";
     
        for(var i=0;i<array_size;i++)
            {
                               
                div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
                divs[i]=document.createElement("div");
                cont.appendChild(divs[i]);
                margin_size=0.1;
                divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
                if(array_size<=25)
                {
                    divs[i].innerHTML=div_sizes[i];
                }
            }             
    
}
function update_array_size()
{
    array_size=inp_as.value; //changes the value of array size by using value propery.
    /*if(array_size<=25)
    {

    }*/
    generate_array();
}
window.onload=update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}
function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled=true;//can't select any algo to run
        inp_as.disabled=true;//can't give input size
        inp_gen.disabled=true;//can't generate a new array
        inp_aspeed.disabled=true;//can't change speed of visualization
    }
}
//<!--script>
function speakText1()
{
    var text = document.getElementById('txt1').value;
    responsiveVoice.speak(text);    
}
function speakText2()
{
    var text = document.getElementById('txt2').value;
    responsiveVoice.speak(text);    
}
function speakText3()
{
    var text = document.getElementById('txt3').value;
    responsiveVoice.speak(text);    
}
function speakText4()
{
    var text = document.getElementById('txt4').value;
    responsiveVoice.speak(text);    
}
function speakText5()
{
    var text = document.getElementById('txt5').value;
    responsiveVoice.speak(text);    
}
function speakText6()
{
    var text = document.getElementById('txt6').value;
    responsiveVoice.speak(text);    
}
//<input onclick="speakText()" type="button" value="Play">

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Merge":Merge();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Rev_B":Bubble_rev();
                            break;
        
        case "Rev_M":Merge_rev();
                            break;
        case "Rev_S":Selection_sort_rev();
                        break;
        case "Insertion":Insertion();
                            break;
        case "Rev_I":Insertion_rev();
                        break;
        case "Quick":Quick();
                    break;
        case "Rev_Q":Quick_rev();
                    break;
        case "Heap":Heap();
                    break;
        case "Rev_H":rev_h();
                    break;
    }
}
