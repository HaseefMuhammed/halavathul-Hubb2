const studentCodeInput = document.getElementById('studentCode');
        const studentNameInput = document.getElementById('studentName');

        // Function to show name based on input code
        studentCodeInput.addEventListener('input', function () {
            const code = studentCodeInput.value;
            let name = '';

            switch (code) {
                case '101':
                    name = 'Haseef';
                    break;
                case '102':
                    name = 'Hadikh';
                    break;
                case '103':
                    name = 'HF';
                    break;
                case '104':
                    name = 'ANMF';
                    break;
                case '105':
                        name = 'namehere';
                        break;
                default:
                    name = 'Student not found';
            }

            studentNameInput.value = name;
        });