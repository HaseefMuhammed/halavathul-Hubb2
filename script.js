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
  "104": "ANMF",
  "105": "namehere"
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
  "jb1": "Mappilapatt",
  "jb2": "Madh Hunnabi song",
  "jb3": "Sanghadana ganam",
  "jb4": "Malayalam speech",
  "jb5": "Malayalathanima",
  "jb6": "Qirath",
  "jb7": "Hifl",
  "jb8": "Azan",
  "jb9": "Quiz",
  "jb10": "English word fight",
  "jb11": "Pencil Drawing",
  "sb1": "Malayalam speech",
  "sb2": "Arabic speech",
  "sb3": "Anusmarana ghanam",
  "sb4": "Mappilappatt",
  "sb5": "Peom malayalam",
  "sb6": "Padi Parayal",
  "sb7": "Qirath",
  "sb8": "Allafal alif parayanam",
  "sb9": "Quiz",
  "sb10": "Poster designing",
  "sb11": "News reading",
  "sb12": "Malayalam Prabhandham",
  "sb13": "Azaan",
  "sb14": "Word fight english",
  "sb15": "Word fight arabic",
  "sb16": "Caligraphy",
  "sb17": "Story making",
  "sb18": "Hifl",
  "sb19": "English prabhandham",
  "sb20": "Photo shoot",
  "sb21": "Adikkurippu",
  "gb1": "Debate",
  "gb2": "group Song sub junior",
  "gb3": "group song junior",
  "gb4": "mash up senior",
  "gb5": "reels making",
  "gb6": "news paper making",
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
  "sjg9": "Memmory test",
  "jg1": "Mapilappatt",
  "jg2": "Madh hunnabi song",
  "jg3": "Malayalam speech",
  "jg4": "Malayalathanima",
  "jg5": "Qirath",
  "jg6": "Hifl",
  "jg7": "Quiz",
  "jg8": "English word fight",
  "jg9": "Pencil drawing",
  "jg10": "Peom making malayalam",
  "jg11": "Poem making english",
  "jg12": "Caligraphy arabic",
  "jg13": "Chithra thunnal",
  "jg14": "Story making",
  "sg1": "malayalam speech",
  "sg2": "Arabic Speech",
  "sg3": "Madh Hunnabi",
  "sg4": "Mappilapattu",
  "sg5": "Poem reading malayalam",
  "sg6": "padi Parayal",
  "sg7": "Qirath",
  "sg8": "Allafal alif parayanam",
  "sg9": "Quiz",
  "sg10": "Poster designing",
  "sg11": "News reading",
  "sg12": "Malayalam prabhandham",
  "sg13": "Caption making",
  "sg14": "Caligraphy",
  "sg15": "Pencil drawing",
  "sg16": "English prabhandham",
  "sg17": "Adikkuripp",
  "sg18": "Poem making malayalam",
  "sg19": "Poem making enlish",
  "sg20": "Chithrathunnal",
  "gg7": "Debate",
  "gg8": "Group song sub junior",
  "gg9": "group song junior",
  "gg10": "Mash up senior",
  "gg11": "Reels making",
  "gg12": "News paper making",
  "gg13": "Manqoos moulid",
  "gg14": "Nafeesath mala",
  "gg15": "Muhtudeen mala",
  "gg16": "Teaching",
  "gg17": "Collage",
  "gg18": "Magazine",
  "gg19": "Islamic Expo"
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
