var topStories= document.querySelectorAll('h2.rtp-slide-title>a');
for (let count= 0; count<topStories.length;count++){
    document.write(topStories[count].textContent);
	document.write("<br />");
    }

let response = {};
for (let count = 0; count < topStories.length; count++) {
    response[count] = topStories[count].textContent;
    }
document.write(JSON.stringify(response));