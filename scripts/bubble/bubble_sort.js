function Bubble()
{
    //div_sizes=div.innerHTML;    
    c_delay=0;
    //var inp_ef=document.getElementById("Info_Cont2");
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j],"red");//color update
                div_update(divs[j+1],div_sizes[j+1],"red");

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;


                /*var temp=divs[j].innerHTML;
                divs[j].innerHTML=divs[j].innerHTML;
                divs[j].innerHTML=temp;*/


                div_update(divs[j],div_sizes[j],"red");//height update
                div_update(divs[j+1],div_sizes[j+1],"red");//height update
            }
            div_update(divs[j],div_sizes[j],"blue");//color update

        }
        div_update(divs[j],div_sizes[j],"green");//color update
    }
    div_update(divs[0],div_sizes[0],"green");//color update

    inp_ef.innerHTML = "time complexity O(N^2) and space complexity is O(1)";
    enable_buttons();
 }
    
