
function openWhatsApp() {
  
    const phoneNumber = "phone_number";
  
    const whatsappURL = `https://api.whatsapp.com/send?phone=${923171608060}&text=Hello! I'd like to chat.`;
   
    window.open(whatsappURL, "_blank");
  }
  
  // Function to send an email when clicking the "Let's Chat" button
  function sendEmail() {
    
    const emailAddress = "tayyabscv.com";
  
    
    const emailSubject = "Chat Request";
  
    
    const emailMessage = "Hello! I'd like to chat.";
  
    
    const emailURL = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`;
  
    
    window.location.href = emailURL;
  }
  

  function downloadCV() {

    const cvFilePath = "https://drive.google.com/file/d/1rjY93TRTqZw7BeRISBqF4Z4FKUVA3c4k/view?usp=drive_link";
  
    
    const anchor = document.createElement("a");
    anchor.href = cvFilePath;
    anchor.download = "tayyab malik cv.pdf"; 
    anchor.click();
  }
  
  function handleHireMe() {
    
    const emailAddress = "tayyabscv@gmail";
    const emailSubject = "Hiring Request";
    const emailMessage = "Hello! I'd like to hire you.";  
    const emailURL = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`;
  
    window.location.href = emailURL;
  }
  document.addEventListener("DOMContentLoaded", function () {
    const letsChatButton = document.querySelector(".contact .button button");
    const downloadCVButton = document.querySelector(".about .button button");
    const hireMeButton = document.querySelector(".home .button button");
  
    if (letsChatButton) {
      letsChatButton.addEventListener("click", function () {
        const chatMethod = prompt("Choose a chat method: 1. WhatsApp 2. Email");
        if (chatMethod === "1") {
          openWhatsApp();
        } else if (chatMethod === "2") {
          sendEmail();
        } else {
          alert("Invalid choice. Please choose either 1 or 2.");
        }
      });
    }
  
    if (downloadCVButton) {
      downloadCVButton.addEventListener("click", downloadCV);
    }
  
    if (hireMeButton) {
      hireMeButton.addEventListener("click", handleHireMe);
    }
  });