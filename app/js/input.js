const inputForm = (event) => {
  const current = $(event.currentTarget);

  if(current.val()) {
    current.parent('.input-wrapper').addClass('input-wrapper--input');
  } else {
    current.parent('.input-wrapper').removeClass('input-wrapper--input');
  }
};

export {inputForm}