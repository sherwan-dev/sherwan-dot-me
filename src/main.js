// import './style.css'
function downloadCV() { 
  const link = document.createElement('a');
  link.href = 'CV_Sherwan_Mahmood.pdf';
  link.download = 'CV_Sherwan_Mahmood.pdf'; 
  link.click();
}

window.downloadCV = downloadCV;
