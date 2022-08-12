var name_of_the_student_array=[];
function submit(){
    var display_student_array=[];
    for (var j=1;j<=4;j++){
    var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
    name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var l1=name_of_the_student_array.length;
    for(var k=0;k<=l1;k++){
    display_student_array.push(name_of_the_student_array[k]);    
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    remove_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    var display_student_array_sorting=[];
    var l2=name_of_the_student_array.length;
    for(var t=0;t<=l2;t++){
    display_student_array_sorting.push(name_of_the_student_array[t]);
    }
    var remove_commas=display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
  
