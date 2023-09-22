// const emailSpan = 

document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    // const emailSpan = document.getElementById("email");

    copyButton.addEventListener("click", function () {
        const emailText = "mdbiginfrastructures@gmail.com";

        // Create a temporary input element
        const tempInput = document.createElement("input");
        tempInput.setAttribute("value", emailText);

        // Append the input element to the document
        document.body.appendChild(tempInput);

        // Select the input field's content
        tempInput.select();
        console.log("Selected text: ", tempInput.value);
        try {
            // Execute the copy command
            
            document.execCommand("copy");
            alert("Email copied to clipboard: " + emailText);

        } catch (err) {
            console.log("error text: ", tempInput.value);
            console.error("Failed to copy email: ", err);
            // Handle errors, e.g., by displaying a message to the user
        } finally {
            console.log("last text: ", tempInput.value);
            // Remove the temporary input element
            document.body.removeChild(tempInput);
        }
    });
});
