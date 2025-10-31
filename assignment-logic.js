// First Question
// 1. Select the elements you need
    const inputData = document.getElementById('inputOne');
    const enterButton = document.getElementById('ansOne');
    const outputData = document.getElementById('outputOne');

    // 2. Add an event listener to the button
    enterButton.addEventListener('click', () => {
        // 3. Get the text from the input
        const originalText = inputData.value;
        let reversedText= "";

        // 4. Reverse the string (using a loop as per your assignment's instructions)
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display the reversed text in the paragraph tag
        outputData.textContent = reversedText;
    });