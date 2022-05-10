function save( data ) {
  localStorage.setItem('data2', data);
  // localStorage.getItem('data2');
  sessionStorage.setItem('data2', data);
}

save( 'bye' );