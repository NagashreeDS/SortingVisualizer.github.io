function Quick_rev()
{
    c_delay=0;

    quick_sort_rev(0,array_size-1);
    inp_ef.innerHTML = "time complexity O(N^2) and space complexity is O(N)";

    enable_buttons();
}

function quick_partition_rev (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;
    div_update(divs[start],div_sizes[start],"yellow");

        for(var j =start + 1; j <= end ; j++ )
        {
           
            if (div_sizes[ j ] > piv)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[j],div_sizes[j],"red");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[j],div_sizes[j],"red");//Height update

                div_update(divs[i],div_sizes[i],"blue");//Height update
                div_update(divs[j],div_sizes[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;
}

function quick_sort_rev (start, end )
{
    if( start < end )
    {
   
        var piv_pos = quick_partition_rev (start, end ) ;     
        quick_sort_rev (start, piv_pos -1);
        quick_sort_rev (piv_pos +1, end) ;
    }
 }
