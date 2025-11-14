// 🧠 STEP 1: SELECT THE ELEMENTS FROM THE PAGE
// Use document.getElementById() to select:
// - the button with id="generate-summary-btn" (this is what the user clicks)
// - the <pre> with id="summary-output" (this is where the summary will appear)
// Store both of these in variables so you can use them later.

// 🎯 STEP 2: ADD A CLICK EVENT TO THE BUTTON
// Add an event listener to the button so that when the user clicks it,
// your function (example name: handleGenerateSummary) will run.
// This function will contain ALL the logic for building the summary.

// ✍️ STEP 3: WRITE THE FUNCTION THAT BUILDS THE SUMMARY
// Inside your handleGenerateSummary() function, do the following in order:

// 3A — Create basic info using const:
// - studentName (string)
// - currentCourse (string)
// - studyGoal (string)

// 3B — Create progress values using let (because they will change):
// - completedLessons (number)
// - hoursStudied (number)

// 3C — Create two boolean values:
// - hasCompletedPractice (true/false)
// - isTired (true/false)

// 3D — Update (reassign) the progress values to simulate new progress:
// Example:
//   completedLessons = completedLessons + 1
//   hoursStudied = hoursStudied + 0.5

// 3E — Create one short message using string concatenation (+)
// and console.log() it so you can see how concatenation works.

// 3F — Create the full multi-line summary using a TEMPLATE LITERAL (` `)
// Include all your variables inside ${ } so the summary shows real data.

// 3G — Display the summary on the page:
// Use textContent to place the final summary inside the <pre> element.

// 3H — Log typeof for each of your variables in the console
// so you can clearly see which ones are strings, numbers, or booleans.

// 🧩 FINAL STEP: Write your full function below this line:
// function handleGenerateSummary() {
//   // Follow all steps 3A through 3H inside here
// }



const button = document.getElementById("generate-summary-btn");
const preOutput = document.getElementById("summary-output");

button.addEventListener("click", handleGenerateSummary);

function handleGenerateSummary(){
     // --- 3A: Create basic info with const ---
    const studentName = "Asher";
    const currentCourse = "JavaScript Foundation";
    const studyGoal = "Master variables and data types";

     // --- 3B: Progress values with let ---
    let completedLessons = 3;
    let hoursStudied = 1.5;

    // --- 3C: Booleans ---
    const hasCompletedPractice = true;
    const isTired = false;

    // --- 3D: Update progress values ---
    completedLessons = completedLessons + 1;
    hoursStudied = hoursStudied + 0.5;

    const shortMessage = "Student " + studentName + " studied for " + hoursStudied + " hours."
    console.log(shortMessage);


    // --- 3F: Template literal full summary ---
    const fullSummary = 
   `Daily study summary 
   ---------------------
   Student: ${studentName}
   Current Course: ${currentCourse}
   Study Goal : ${studyGoal}

   Progress:
   - Completed Lessons: ${completedLessons}
   - Hours studied: ${hoursStudied}

   Status:
   - Completed pracice? : ${hasCompletedPractice}
   - Feeling tired? : ${isTired}`

    // --- 3G: Display summary on the page ---
    preOutput.textContent = fullSummary;

    // --- 3H: Type of logs ---
    console.log("Data types:");
    console.log("Student name:", typeof(studentName));
    console.log("Current Couse:", typeof(currentCourse));
    console.log("Study goal:", typeof(studyGoal));
    console.log("Completed lessons:", typeof(completedLessons));
    console.log("Hours studied:", typeof(hoursStudied));
    console.log("Has completed practice:", typeof(hasCompletedPractice));
    console.log("Is tired:", typeof(isTired));

};