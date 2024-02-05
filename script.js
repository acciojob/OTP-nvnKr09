//your JS code here. If required.
let codes = document.querySelectorAll(".code");

        // Loop through each input element
        for (let i = 0; i < codes.length; i++) {
            // Add an event listener for the input event
            codes[i].addEventListener("input", function() {
                // If the input value is a digit
                if (this.value.match(/\d/)) {
                    // If it is not the last input
                    if (i < codes.length - 1) {
                        // Move the focus to the next input
                        codes[i + 1].focus();
                    }
                }
            });

            // Add an event listener for the keydown event
            codes[i].addEventListener("keydown", function(e) {
                // If the key pressed is backspace
                if (e.key === "Backspace") {
                    // If the input value is empty
                    if (this.value === "") {
                        // If it is not the first input
                        if (i > 0) {
                            // Move the focus to the previous input
                            codes[i - 1].focus();
                        }
                    }
                }
            });
        }