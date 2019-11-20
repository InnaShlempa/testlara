$(document).ready(function() {
	
	

    
	
	$('.slick-slider').slick({
		infinite: true,//зацикленная прокрутка false
		dots: false, //отображением навигационных точек
		
		slidesToShow: 1,//сколько слайдов показывать
		slidesToScroll: 1,//через сколько слайдов показывать
		
		prevArrow:"<button type='button' class='slick-prev '></button>",
		nextArrow:"<button type='button' class='slick-next '></button>",
		//arrows: true, 
		arrowsHide: true,
	});
	
	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',//Селектор для фильтрации элементов, запускающих событие.
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		mainClass: 'mfp-img',//  добавлен в корневой элемент оболочки всплывающих окон 
		gallery: {
			enabled: true,//включить галерею
			navigateByImgClick: true,
			
		},
	});
	
	
	 
	
	$.validator.addMethod("myname", function(value, element) {
        return this.optional(element) || /^[a-zA-Z-а-яА-Я-\s]+$/.test(value);
    }, "Поле Имя должно содержать только буквы пробелы и дефис");
	
	$.validator.addMethod("email", function(value, element) {
	return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
	}, );
	
	let Form = $('.js-form');
	
	Form.validate({
		rules: {
			name: {
				required: true,
				myname:true,
				rangelength: [2, 70],				
				}, 		
			email: {
				required: true,
				email: true
			},
		},
		messages:{
			name:{
				required: "Поле Имя обязательно к заполнению",
				rangelength: $.validator.format("Длина имени должна быть от {0} до {1} символов"),								
			},
			email: {
				required: "Поле E-mail обязательно к заполнению ",
				email: "Пожалуйста, введите корректный E-mail"
			},
		},	
		submitHandler: function(form, event) {
            event.preventDefault();
            alert(Form.serialize());
        }
				
	});
	

	
	
	/*
   Form.submit(function(event){
        
        event.preventDefault(); // Запрещаем стандартное поведение для кнопки submit
         // После того, как мы нажали кнопку "Отправить", делаем проверку,
         // если кол-во полей с классом .valid равно 2, то есть все поля заполнены верно,
         // выполняем наш Ajax сценарий и отправляем письмо адресату

        if($('.valid').length == 2) {
            $.ajax({
                    type: $('#subscription').attr('method'), //  POST или GET
					url:  $('#subscription').attr('action'), // путь до обработчика		  
					data: $('#subscription').serialize(), // данные для отправки(возвращает строку пригодную для передачи через URL строку)
                    success: function(data){ // событие после удачного обращения к серверу и получения ответа
		       		if (data['error']) { // если обработчик вернул ошибку
		       			alert(data['error']); // покажем её текст
		       		} else { // если все ок
		       			alert("Name: " + $("#inputName").val() + "   " + "Email: " + $("#inputEmail").val()); // пишем что ок
		       		}
					}
            }); // end ajax({...})
        }
        // Иначе, если количество полей с данным классом не равно значению 2, мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме
       else
       {
          return false;
       }
   }); // end submit()
	
	
  
  	$("#inputName").blur(function() {
		if($(this).val() == ''){
			alert('Введите имя'); 
		}
	});
	$("#inputEmail").blur(function() {//Событие blur происходит, когда элемент теряет фокус
		if($(this).val() == ''){
			alert('Введите email'); 
		}
	});
		
	$('#subscription').submit(function(event) {
			
        $.ajax({
			type: $('#subscription').attr('method'),
			url: $('#subscription').attr('action'),
			dataType: "html", 
			data: $('#subscription').serialize(),
			
			
			success: function(response){
				alert("Name: " + $("#inputName").val() + "   " +
				 "Email: " + $("#inputEmail").val());
				},
			error: function (response) {
				alert("Введите данные");
				},
        })
			//отмена действия по умолчанию для кнопки submit      
		event.preventDefault();		   
		
    });
*/
	

})
