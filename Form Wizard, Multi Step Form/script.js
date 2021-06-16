
var currentTab = 0;
var x = document.getElementsByClassName("tab");

window.onload = () => {
    showTab(currentTab);
}


showTab = (n) => {
    x[n].style.display = 'block';


    if ( n == 0 ) {
        document.getElementById("prevBtn").style.display = 'none';
    } else {
        document.getElementById("prevBtn").style.display = 'inline';
    }
    
    if ( n == (x.length-1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    stepIndicator(n);
}

changeTab = (n) => {
    // Do not run the function if any of the field is invalid
    if( n == 1 && !validateForm()) return false;
    
    x[currentTab].style.display = "none";

    currentTab += n;

    if( currentTab > x.length-1) {
        document.getElementsByTagName("form")[0].submit();
        return false;
    }
    showTab(currentTab);
}

validateForm = () => {
    var y, i, valid = true;
    y = x[currentTab].getElementsByTagName('input');

    for (i = 0; i < y.length; i++) {
        if(y[i].value == '') {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if(valid) {
        document.getElementsByClassName("step")
        [currentTab].className += " finish";
    }

    return valid;
}

stepIndicator = (n) => {
    var i, z;
    z = document.getElementsByClassName("step");

    for(i = 0; i < z.length; i++) {
        z[i].className = z[i].className.replace(" active", "");
    }

    z[n].className += " active"
}
