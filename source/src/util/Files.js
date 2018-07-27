export const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise(function (resolve, reject) {
      reader.onload = function () {
		  	resolve(reader.result)
		  };
		  reader.onerror = function (error) {
		    console.log('Error: ', error);
		    reject(error);
		  };
  });
  
}