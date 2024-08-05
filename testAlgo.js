function checkMediaType(url) {
    // Extract the file extension from the URL
    const extension = url.split('.').pop().toLowerCase();
  
    // Lists of common image and video file extensions
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];
    const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm'];
  
    // Check if the extension matches any known image or video extensions
    if (imageExtensions.includes(extension)) {
      return 'image';
    } else if (videoExtensions.includes(extension)) {
      return 'video';
    } else {
      return 'unknown';
    }
  }
  
  // Example Usage
  const url1 = "https://ph-files.imgix.net/5a3463e6-e7ef-49bb-b2cd-67daacc1c60f.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001";
  const url2 = "https://ph-files.imgix.net/5912e6cd-7062-4645-9f69-28e682bc687d.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001";
  
  console.log(checkMediaType(url1)); // Output: "image"
  console.log(checkMediaType(url2)); // Output: "video"
  