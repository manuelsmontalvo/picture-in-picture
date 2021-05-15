const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt User To Select Media Screen, Pass To Video Element, Then Play

const selectMediaStream = async () => {
  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
    selectMediaStream();
  }
};

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // get stream choice
  await videoElement.requestPictureInPicture();
  // reactivate button
  button.disabled = false;
});

// On Load
selectMediaStream();
