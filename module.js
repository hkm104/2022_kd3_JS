function save( data ) {
  localStorage.setItem('data', data);
  sessionStorage.setItem('data', data);
}

export { save };