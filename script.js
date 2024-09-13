function updateTime() {
  const timeInput = document.getElementById('timeInput');
  
  if (timeInput) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeInput.value = `${hours}:${minutes}:${seconds}`;
  }
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time when the page loads
updateTime();


// Time on panel

// Input fetch with answer

 // Create a dictionary to map student codes to their names
 var studentNames = {
  "101": "Haseef",
  "102": "Hadikh",
  "103": "HF",
  "104": "ANMF"
};

// Create a dictionary to map programs to their descriptions
var programDescriptions = {
  "kb1": "Islamic song",
  "kb2": "Story telling",
  "kb3": "Colouring",
  "kb4": "Book reading",
  "kb5": "Fathiha recitation",
  "kb6": "Writing Arabic",
  "kb7": "Writing English",
  "kb8": "Candy picking",
  "kb9": "Baain pulliyidal",
  "sjb1": "malayalam speech",
  "sjb2": "Madh hunnabi song",
  "sjb3": "Islamic polpular song",
  "sjb4": "Arabic song",
  "sjb5": "Qirath",
  "sjb6": "Hifl",
  "sjb7": "Quiz",
  "sjb8": "Drawing water colour",
  "sjb9": "Memmory test",
  "kg1": "Islamic song",
  "kg2": "Story Telling",
  "kg3": "Action song",
  "kg4": "Colouring",
  "kg5": "book reading",
  "kg6": "Fathiha recitation",
  "kg7": "Writing Arabic",
  "kg8": "Writing English",
  "kg9": "Candy picking",
  "kg10": "Baain pulliyidal",
  "sjg1": "Malayalam speech",
  "sjg2": "Madh Hunnabi song",
  "sjg3": "Islamic popular song",
  "sjg4": "Arabic song",
  "sjg5": "Qirath",
  "sjg6": "Hifl",
  "sjg7": "Quiz",
  "sjg8": "Drawing (Water colour)",
  "sjg9": "Memmory test"
};

// Event listeners for input fields and selects
document.getElementById('program').addEventListener('change', updateStudentAndProgram);
document.getElementById('studentCode').addEventListener('input', updateStudentAndProgram);
document.getElementById('place').addEventListener('change', updateStudentAndProgram);
document.getElementById('team').addEventListener('change', updateStudentAndProgram);

// Function to update the student code, program selection, place, and team
function updateStudentAndProgram() {
  var studentCode = document.getElementById('studentCode').value;
  var selectedProgram = document.getElementById('program').value;
  var selectedPlace = document.getElementById('place').value;
  var selectedTeam = document.getElementById('team').value;

  var studentName = studentNames[studentCode] || "Student not found";
  var programText = programDescriptions[selectedProgram] || "No Program Selected";
  var placeText = selectedPlace || "No Place Selected";
  var teamText = selectedTeam || "No Team Selected";

  var outputText = "Student Code: " + (studentCode || "No Student Code") + 
                   " | Student Name: " + studentName +
                   " | Team: " + teamText +
                   " | Program: " + programText + 
                   " | Place: " + placeText ;

  document.getElementById('studentAndProgram').value = outputText;
}
// work
console.log(`ready`)
