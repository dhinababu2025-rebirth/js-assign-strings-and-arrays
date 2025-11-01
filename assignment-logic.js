const inputData = new Array(15);
const enterButton = new Array(15);
const outputData = new Array(15);
// Code for Q/A-1
// 1. Select the elements
    inputData[0] = document.getElementById('inputOne');
    enterButton[0] = document.getElementById('ansOne');
    outputData[0] = document.getElementById('outputOne');

    // 2. Event Listener for the Enter Button
    enterButton[0].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[0].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[0].textContent = reversedText;
    });

// Code for Q/A-2
// 1. Select the elements
    inputData[1] = document.getElementById('inputTwo');
    enterButton[1] = document.getElementById('ansTwo');
    outputData[1] = document.getElementById('outputTwo');
// 2. Event Listener for the Enter Button
    enterButton[1].addEventListener('click', () => {
        const originalText = inputData[1].value; // 3. Get text from the input tag
        let isPalindrome = true; 
            const loweredText = originalText.toLowerCase(); //remove capitalisation
            let modifiedText ="";
            for(i=0; i<loweredText.length; i++) { //logic to filter alphabets
                if (loweredText[i]>='a' && loweredText[i<='z'])
                    {modifiedText=modifiedText+loweredText[i];}
            }
        const textLength = modifiedText.length;
// 4. core logic - implementation
        for(let i=0; i<textLength/2; i++) {
            if(modifiedText[i]!=modifiedText[textLength-i-1])
            {isPalindrome=false;
                break;}
        }
        function result() {
            if (isPalindrome)
            {return originalText+" is a Palindrome";}
            else
            {return originalText+" is not a Palindrome"}
        }
 // 5. Display output
        outputData[1].textContent = result();
    });


// Code for Q/A-3
// 1. Select the elements
    inputData[2] = document.getElementById('inputThree-first');
    const secondInputData = document.getElementById('inputThree-second')
    enterButton[2] = document.getElementById('ansThree');
    outputData[2] = document.getElementById('outputThree');
    // 2. Event Listener for the Enter Button
    enterButton[2].addEventListener('click', () => {
        // 3. Get text from the input tags
        const firstWord = inputData[2].value;
        const secondWord = secondInputData.value;
        let secondWordArray = secondWord.split("");
        let isAnagram = true;
        // 4. core logic - implementation
        for(let i=0; i<firstWord.length; i++){
            let count = secondWordArray.length;
            for(let j=0; j<secondWordArray.length; j++)
            {
                if(firstWord[i]==secondWordArray[j]) {
                    //remove that char from secondWord
                    secondWordArray.splice(j,1)
                }
            }
            if(count == secondWordArray.length){
                isAnagram = false;
                break;
            }
        }
        function result() {
            if (isAnagram)
            {return firstWord+" & "+secondWord+" are Anagrams";}
            else
            {return firstWord+" & "+secondWord+" are not Anagrams"}
        }
        // 5. Display output
        outputData[2].textContent = result();
    });


// Code for Q/A-4
// 1. Select the elements
    inputData[3] = document.getElementById('inputFour');
    enterButton[3] = document.getElementById('ansFour');
    outputData[3] = document.getElementById('outputFour');

    // 2. Event Listener for the Enter Button
    enterButton[3].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[3].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[3].textContent = reversedText;
    });


// Code for Q/A-5
// 1. Select the elements
    inputData[4] = document.getElementById('inputFive');
    enterButton[4] = document.getElementById('ansFive');
    outputData[4] = document.getElementById('outputFive');

    // 2. Event Listener for the Enter Button
    enterButton[4].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[4].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[4].textContent = reversedText;
    });


// Code for Q/A-6
// 1. Select the elements
    inputData[5] = document.getElementById('inputSix');
    enterButton[5] = document.getElementById('ansSix');
    outputData[5] = document.getElementById('outputSix');

    // 2. Event Listener for the Enter Button
    enterButton[5].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[5].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[5].textContent = reversedText;
    });

// Code for Q/A-7
// 1. Select the elements
    inputData[6] = document.getElementById('inputSeven');
    enterButton[6] = document.getElementById('ansSeven');
    outputData[6] = document.getElementById('outputSeven');

    // 2. Event Listener for the Enter Button
    enterButton[6].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[6].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[6].textContent = reversedText;
    });

// Code for Q/A-8
// 1. Select the elements
    inputData[7] = document.getElementById('inputEight');
    enterButton[7] = document.getElementById('ansEight');
    outputData[7] = document.getElementById('outputEight');

    // 2. Event Listener for the Enter Button
    enterButton[7].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[7].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[7].textContent = reversedText;
    });

// Code for Q/A-9
// 1. Select the elements
    inputData[8] = document.getElementById('inputNine');
    enterButton[8] = document.getElementById('ansNine');
    outputData[8] = document.getElementById('outputNine');

    // 2. Event Listener for the Enter Button
    enterButton[8].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[8].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[8].textContent = reversedText;
    });

// Code for Q/A-10
// 1. Select the elements
    inputData[9] = document.getElementById('inputTen');
    enterButton[9] = document.getElementById('ansTen');
    outputData[9] = document.getElementById('outputTen');

    // 2. Event Listener for the Enter Button
    enterButton[9].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[9].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[9].textContent = reversedText;
    });


// Code for Q/A-11
// 1. Select the elements
    inputData[10] = document.getElementById('inputEleven');
    enterButton[10] = document.getElementById('ansEleven');
    outputData[10] = document.getElementById('outputEleven');

    // 2. Event Listener for the Enter Button
    enterButton[10].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[10].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[10].textContent = reversedText;
    });


// Code for Q/A-12.........................
// 1. Select the elements
    inputData[11] = document.getElementById('inputTwelve');
    enterButton[11] = document.getElementById('ansTwelve');
    outputData[11] = document.getElementById('outputTwelve');

    // 2. Event Listener for the Enter Button
    enterButton[11].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[11].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[11].textContent = reversedText;
    });

// Code for Q/A-13
// 1. Select the elements
    inputData[12] = document.getElementById('inputThirteen');
    enterButton[12] = document.getElementById('ansThirteen');
    outputData[12] = document.getElementById('outputThirteen');

    // 2. Event Listener for the Enter Button
    enterButton[12].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[12].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[12].textContent = reversedText;
    });

// Code for Q/A-14
// 1. Select the elements
    inputData[13] = document.getElementById('inputFourteen');
    enterButton[13] = document.getElementById('ansFourteen');
    outputData[13] = document.getElementById('outputFourteen');

    // 2. Event Listener for the Enter Button
    enterButton[13].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[13].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[13].textContent = reversedText;
    });


// Code for Q/A-15
// 1. Select the elements
    inputData[14] = document.getElementById('inputFifteen');
    enterButton[14] = document.getElementById('ansFifteen');
    outputData[14] = document.getElementById('outputFifteen');

    // 2. Event Listener for the Enter Button
    enterButton[14].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[14].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[14].textContent = reversedText;
    });