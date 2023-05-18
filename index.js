		// Get the form and file field
		let form = document.querySelector('#upload');
		let file = document.querySelector('#file');
		let app = document.querySelector('#app');

		/**
		 * Log the uploaded file to the console
		 * @param {event} Event The file loaded event
		 */
		function logFile (event) {
			let str = event.target.result;
			let img = document.createElement('img');
			img.src = str;
			app.append(img);
			console.log(str);
		}

		/**
		 * Handle submit events
		 * @param  {Event} event The event object
		 */
		function handleSubmit (event) {

			// Stop the form from reloading the page
			event.preventDefault();

			// If there's no file, do nothing
			if (!file.value.length) return;

			// Create a new FileReader() object
			let reader = new FileReader();

			// Setup the callback event to run when the file is read
			reader.onload = logFile;

			// Read the file
			reader.readAsDataURL(file.files[0]);

		}

		// Listen for submit events
		form.addEventListener('submit', handleSubmit);


function generatePDF() {

    // Choose the element id which you want to export.
    var element = document.getElementById('idTemplate');
    // element.style.width = '700px';
    // element.style.height = '900px';
    var opt = {
        margin:       0.5,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 0.5 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait',precision: '12' }
        };
    
    // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
    html2pdf().set(opt).from(element).save();
    }