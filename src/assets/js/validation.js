// Wait for the DOM to be ready
$(function() {
	// Initialize form validation on the registration form.
	// It has the name attribute "registration"
	$("form[name='registration']").validate({
	  // Specify validation rules
	  rules: {
		// The key name on the left side is the name attribute
		// of an input field. Validation rules are defined
		// on the right side
		login: "required",
		email: {
		  required: true,
		  // Specify that email should be validated
		  // by the built-in "email" rule
		  email: true
		},
		password: {
		  required: true,
		  minlength: 6
		},
		confirm_password: {
			required: true,
			equalTo: '[name="password"]'
		},
		agree: "required"
	  },
	  // Specify validation error messages
	  messages: {
		login: "Введите имя",
		password: {
		  required: "Введите пароль",
		  minlength: "Ваш пароль должен содержать не менее 6 символов"
		},
		confirm_password: {
			required: "Подтвердите пароль",
			equalTo: "Пароли не совпадают"
		},
		agree: {
			required: "Согласитесь"
		},
		email: "Введите e-mail"
	  	},
	  // Make sure the form is submitted to the destination defined
	  // in the "action" attribute of the form when valid
	  submitHandler: function(form) {
		form.submit();
	  }
	});

	// PHONE MASK
    $('input[type="tel"]').inputmask({"mask": "+7 (999) 99-99-99", showMaskOnHover: false});
  });