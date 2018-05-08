 $(document).ready(function(){
      $("#btnAppend").click(function(){
        var ya = document.createElement("li");
        var x = document.getElementById("myText").value;
        var t = document.createTextNode(x);
        ya.appendChild(t);
        document.getElementById("append").appendChild(ya);
      });
    });
    $(document).ready(function(){
      $("#btnRemove").click(function(){
        $("#append").empty();
      });
    });