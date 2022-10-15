let text = document.getElementById("textarea");
let btn = document.querySelector(".count");

// add eventListener into button.
btn.addEventListener("click",()=>{
    let string = document.getElementById("textarea").value.length;
    document.querySelector(".char").innerHTML = string;
    let getvalue = document.querySelector("#textarea").value;
    // trim() will removes whitespace from both ends of a string and returns a new string, without modifying the original string.
    getvalue = getvalue.trim();
    // console.log(getvalue);
    // split(" ") will generate the new array from the text which also contains the spaces as its element.
    let arr = getvalue.split(" ");
    // console.log(arr);
    // The filter() method creates a new array filled with elements that pass a test provided by a function.
    let list = arr.filter(function(element){
        return element != "";
    });
    
    document.querySelector(".words").innerHTML = list.length;
});


