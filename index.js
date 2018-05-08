 $(document).ready(function() {
     $("#btnAppend").click(function() {
         var ya = document.createElement("li");
         var x = document.getElementById("myText").value;
         var t = document.createTextNode(x);
         ya.appendChild(t);
         document.getElementById("append").appendChild(ya);
     });
 });
 $(document).ready(function() {
     $("#btnRemove").click(function() {
         $("#append").empty();
     });
 });

 $(document).ready(function(){
      $("#btnCustomLoop").click(function(){
        var tCL = document.getElementById("txtCustomLoop").value;
        var nCL = document.getElementById("numberCustomLoop").value;
        var textcusLoop = "";
        var i;
            for (i = 1; i <= nCL; i++) {
                textcusLoop += i + ". " + tCL + "<br />";
            }
         document.getElementById("resCustomLoop").innerHTML = textcusLoop;
       });
     });