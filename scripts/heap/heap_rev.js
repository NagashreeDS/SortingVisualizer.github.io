function rev_h()
{
    c_delay=0;

    heap_sort_rev();
    inp_ef.innerHTML = "time complexity O(NlogN) and space complexity is O(1)";
    
    enable_buttons();
}

function swap_rev(i,j)
{
    div_update(divs[i],div_sizes[i],"red");//Color update
    div_update(divs[j],div_sizes[j],"red");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"red");//Height update
    div_update(divs[j],div_sizes[j],"red");//Height update

    div_update(divs[i],div_sizes[i],"blue");//Color update
    div_update(divs[j],div_sizes[j],"blue");//Color update
}

function min_heapify_rev(n,i)
{
    var smallest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]<div_sizes[smallest])
    {
        if(smallest!=i)
        {
            div_update(divs[smallest],div_sizes[smallest],"blue");//Color update
        }

        smallest=l;

        div_update(divs[smallest],div_sizes[smallest],"red");//Color update
    }

    if(r<n && div_sizes[r]<div_sizes[smallest])
    {
        if(smallest!=i)
        {
            div_update(divs[smallest],div_sizes[smallest],"blue");//Color update
        }

        smallest=r;

        div_update(divs[smallest],div_sizes[smallest],"red");//Color update
    }

    if(smallest!=i)
    {
        swap(i,smallest);

        min_heapify_rev(n,smallest);
    }
}

function heap_sort_rev()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        min_heapify_rev(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap_rev(0,i);
        div_update(divs[i],div_sizes[i],"green");//Color update
        div_update(divs[i],div_sizes[i],"yellow");//Color update

        min_heapify_rev(i,0);

        div_update(divs[i],div_sizes[i],"blue");//Color update
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update
}