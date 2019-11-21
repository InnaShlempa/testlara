$(document).ready(function() {
	

   $('.card__carousel').each(function() {
    let gallery = $(this);
	
    gallery
    .slick({
		arrows: true,
		infinite: true,//зацикленная прокрутка false
		
		slidesToShow: 1,//сколько слайдов показывать
		
		
	})
    .magnificPopup({
        type: 'image',
		delegate: 'a:not(.slick-cloned)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			
		  },
  
    });
  });

	$.validator.addMethod("myName", function(value, element) {
        return this.optional(element) || /^[a-zA-Z-а-яА-Я-\s]+$/.test(value);
    }, "Поле Имя должно содержать только буквы пробелы и дефис");
	
	$.validator.addMethod("Email", function(value, element) {
	return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
	}, );
	
	let Form = $('.js-form');
	
	Form.validate({
		rules: {
			name: {
				required: true,
				myName:true,
				rangelength: [2, 70],				
				}, 		
			email: {
				required: true,
				Email: true,
			},
		},
		messages:{
			name:{
				required: "Поле Имя обязательно к заполнению",
				rangelength: $.validator.format("Длина имени должна быть от {0} до {1} символов"),								
			},
			email: {
				required: "Поле E-mail обязательно к заполнению ",
				email: "Пожалуйста, введите корректный E-mail",
			},
		},	
		submitHandler: function(event, form) {
            event.preventDefault();
            alert(Form.serialize());
        }
				
	});

})
