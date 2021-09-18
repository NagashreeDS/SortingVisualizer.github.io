function Insertion()
{
    c_delay=0;
    for(var j=0;j<array_size;j++)
    {
     div_update(divs[j],div_sizes[j],"yellow");//Color update
     var key= div_sizes[j];
     var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update
            div_sizes[i+1]=div_sizes[i];//over writing the value
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;//decrementing until cond becomes false
        }
        div_sizes[i+1]=key;//insertion of element step.
        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update
    inp_ef.innerHTML = "time complexity O(N^2) and space complexity is O(1)";
   enable_buttons();
}