export const setItem = (item, value) => {
	localStorage.setItem(item,JSON.stringify(value));
}

export const getItem = (item) => {
	let data = null;
  try { 
  	data = JSON.parse(localStorage.getItem(item));
  } catch(e) {};
  return data;
}

export const removeItem = (item) => {
	localStorage.removeItem(item);
}