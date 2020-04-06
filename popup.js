function click(e) {
  //   alert(images[e.target.id]);
//   chrome.tabs.executeScript(null, {
//     code: "document.body.style.backgroundColor='red'",
//   });

    chrome.tabs.executeScript(null, {
      //5.execute the script
      code:
        `document.body.style.backgroundImage='url("${images[e.target.id]}")'`
    }); //change the color to the color clicked
  window.close(); //close the popup window
}

document.addEventListener("DOMContentLoaded", function () {
  //1. when dom is completely loaded
  var divs = document.querySelectorAll("div"); //2 find all divs
  for (let i = 0; i < divs.length; i++) {
    //3. loop through all divs
    divs[i].addEventListener("click", click); //4.wait for a click
  }
});

var images = {
  jeo: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  kate: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  david: "https://cloud.fullstackacademy.com/david_yang.jpg",
  nimit: "https://cloud.fullstackacademy.com/nimit_maru.jpg",
  chris: "https://cloud.fullstackacademy.com/joe_alves.jpg",
};
