

function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"yellow");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            // div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"lightblue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"yellow");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"lightblue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"yellow");//Height update
            div_update(divs[i],div_sizes[i],"yellow");//Height update
            div_update(divs[index_min],div_sizes[index_min],"lightblue");//Color update
        }
        div_update(divs[i],div_sizes[i],"lightgreen");//Color update
    }
    div_update(divs[i],div_sizes[i],"lightgreen");//Color update

    enable_buttons();
}

