
        function show() {
            var x = document.getElementById("formula-generator");
            var y = document.getElementById("formula-explainer");
            if (y.style.display === "none") {
                y.style.display = "flex";
                x.style.display = "none"
            } else if (x.style.display === "none") {
                x.style.display = "flex";
                y.style.display = "none"
            }
        }
        show();