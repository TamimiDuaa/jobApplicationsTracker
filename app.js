

try {
            
  const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['March', 'April', 'May', 'June', 'July','August'],
    datasets: [{
      label: '# of applications',
      data: [2, 19, 4, 3, 2, 10],
      backgroundColor: [ // Custom background colors for the bars
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [ // Custom border colors for the bars
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderWidth: 0.2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
} catch (error) {
  console.log(error);
}


try {
  
document.querySelector(".addNewAppBtn").addEventListener("click",function() {
  // Open a new window
  const newWindow = window.open("", "formWindow", "width=700,height=500");
  if (newWindow) {
          // Write the basic HTML structure to the new window
          newWindow.document.write("<html><head><title>Form Window</title><link rel='stylesheet' href='style.css'></head><body></body></html>");

          // Access the body of the new window's document
          const formBody = newWindow.document.body;

    formBody.classList.add("formBody");

    const form = document.createElement('form');

    //form title
    const formTitle = document.createElement('h2');
    formTitle.textContent = "Job Application Form";
    formBody.appendChild(formTitle);

    // Company Name
    const companyLabel = document.createElement('label');
    companyLabel.setAttribute('for', 'company');
    companyLabel.textContent = "Company Name:";
    form.appendChild(companyLabel);

    const companyInput = document.createElement('input');
    companyInput.type = "text";
    companyInput.id = "company";
    companyInput.name = "company";
    companyInput.required = true;
    form.appendChild(companyInput);

    //Company URL
    const companyURLLabel = document.createElement('label');
    companyURLLabel.setAttribute('for', 'companyURL');
    companyURLLabel.textContent = "Company Website:";
    form.appendChild(companyURLLabel);

    const companyURLInput = document.createElement('input');
    companyURLInput.type = "text";
    companyURLInput.id = "companyURL";
    companyURLInput.name = "companyURL";
    companyURLInput.required = true;
    companyURLInput.pattern = "/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,6}(\/[\w\-\.~:?#\[\]@!$&'()*+,;=]*)?$/";
    form.appendChild(companyURLInput);

    // Position
    const positionLabel = document.createElement('label');
    positionLabel.setAttribute('for', 'position');
    positionLabel.textContent = "Position:";
    form.appendChild(positionLabel);

    const positionInput = document.createElement('input');
    positionInput.type = "text";
    positionInput.id = "position";
    positionInput.name = "position";
    positionInput.required = true;
    form.appendChild(positionInput);

    ////Jobs Description
     const descriptionLabel = document.createElement('label');
     descriptionLabel.setAttribute('for', 'jobDescription');
     descriptionLabel.textContent = "Jobs Description";
     form.appendChild(descriptionLabel);
 
     const descriptionTextarea = document.createElement('textarea');
     descriptionTextarea.id = "jobDescription";
     descriptionTextarea.name = "jobDescription";
     descriptionTextarea.rows = 7;
     descriptionTextarea.placeholder = "The Job Description...";
     form.appendChild(descriptionTextarea);
    // Application Date
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = "Application Date:";
    form.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
    dateInput.required = true;
    form.appendChild(dateInput);

    // Status
    const statusLabel = document.createElement('label');
    statusLabel.setAttribute('for', 'status');
    statusLabel.textContent = "Application Status:";
    form.appendChild(statusLabel);

    const statusSelect = document.createElement('select');
    statusSelect.id = "status";
    statusSelect.name = "status";
    statusSelect.required = true;

    const statusOptions = ["Applied", "Interview Scheduled", "Offer Received", "Rejected", "Accepted"];
    statusOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(/\s+/g, '');
        option.textContent = optionText;
        statusSelect.appendChild(option);
    });
    form.appendChild(statusSelect);
    
    // Notes
    const notesLabel = document.createElement('label');
    notesLabel.setAttribute('for', 'notes');
    notesLabel.textContent = "Notes:";
    form.appendChild(notesLabel);

    const notesTextarea = document.createElement('textarea');
    notesTextarea.id = "notes";
    notesTextarea.name = "notes";
    notesTextarea.rows = 4;
    notesTextarea.placeholder = "Additional information...";
    form.appendChild(notesTextarea);

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.addEventListener("click",()=>{
      window.alert("your form was submitted");
      newWindow.close();  
    })
    submitButton.type = "submit";
    submitButton.classList.add("submitBtn")
    submitButton.textContent = "Submit Application";
    form.appendChild(submitButton);

    formBody.appendChild(form);
  } else {
    console.log("Failed to open new window.");
  }
});
newWindow.addEventListener('beforeunload', function () {
  // Remove the form or any other cleanup operations

  form.remove();
 
});

} catch (error) {
  console.log(error);
}





// For Settings Page
try {
  
const animalDiv = document.querySelector(".animalsImages");

// upload images from Images/animals file
  for(let i=1;i<=16;i++){

    let img = document.createElement("img");
    let URL = `images/animals/${i}.jpg`;
    img.src = URL;
    img.setAttribute('onclick','changeProfile('+i+')');
    img.classList.add("image");
  
    animalDiv.appendChild(img);
  }
  
  function changeProfile(url){
    let profilePic =  document.querySelector(".profilePic");
    profilePic.src ="./images/animals/"+url+".jpg";
  
  }

} catch (error) {
  console.log(error);
}