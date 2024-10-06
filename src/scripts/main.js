'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.image-slider__slide');
  const sliderDots = document.querySelectorAll('.image-slider__dot');

  let slideIndex = 1;

  showSLides(slideIndex);

  function changeSlides(n) {
    showSLides(slideIndex += n);
  };

  function currSlide(n) {
    showSLides(slideIndex = n);
  }

  function showSLides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => slide.classList.remove('image-slider__slide--active'));
    sliderDots.forEach(dot => dot.classList.remove('image-slider__dot--active'));

    slides[slideIndex - 1].classList.add('image-slider__slide--active');
    sliderDots[slideIndex - 1].classList.add('image-slider__dot--active');
  }

  const prevSlideButton = document.getElementById('prev-slide');
  const nextSlideButton = document.getElementById('next-slide');

  prevSlideButton.addEventListener('click', (event) => {
    event.preventDefault();
    changeSlides(-1);
  });

  nextSlideButton.addEventListener('click', (event) => {
    event.preventDefault();
    changeSlides(1);
  })

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currSlide(index + 1);
    })
  })

  const techButton1 = document.querySelector('.tech__button--1');
  const techButton2 = document.querySelector('.tech__button--2');
  const techButton3 = document.querySelector('.tech__button--3');

  const techSpecs1 = document.querySelector('.tech__specs--1');
  const techSpecs2 = document.querySelector('.tech__specs--2');
  const techSpecs3 = document.querySelector('.tech__specs--3');

  function toggleClasses(element, className) {
    element.classList.toggle(className);
  }

  techButton1.addEventListener('click', (event) => {
    event.preventDefault();
    toggleClasses(techButton1, 'tech__button--opened');
    toggleClasses(techSpecs1, 'tech__specs--visible');
  });

  techButton2.addEventListener('click', (event) => {
    event.preventDefault();
    toggleClasses(techButton2, 'tech__button--opened');
    toggleClasses(techSpecs2, 'tech__specs--visible');
  });

  techButton3.addEventListener('click', (event) => {
    event.preventDefault();
    toggleClasses(techButton3, 'tech__button--opened');
    toggleClasses(techSpecs3, 'tech__specs--visible');
  });

<<<<<<< HEAD
  function toggleScroll() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const currentHash = window.location.hash;
    const isDesktop = window.innerWidth >= 1280;

    if (['#menu', '#language', '#help', '#faq', '#cart'].includes(currentHash)) {
      body.classList.add('no-scroll');

      if (isDesktop) {
        header.style.filter = 'blur(5px)';
      }
    } else {
      body.classList.remove('no-scroll');

      if (isDesktop) {
        header.style.filter = 'blur(0)';
      }
    }
  };

  window.addEventListener('hashchange', toggleScroll);
  window.addEventListener('load', toggleScroll);
=======
  const dropdown = document.querySelectorAll('.dropdown');
  const dropdownButton = document.querySelectorAll('.dropdown__arrow-button');

  for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', (event) => {
      event.preventDefault();
      dropdown[i].classList.toggle('dropdown--active');
    });
  }
>>>>>>> origin/master

  const questions = document.querySelectorAll('.faq__question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      toggleAnswer(question);
    });
  });

  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const answerDate = answer.nextElementSibling;

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      answerDate.style.display = 'block';
    } else {
      answer.style.display = 'none';
      answerDate.style.display = 'none';
    }
  };

<<<<<<< HEAD
=======
  const expDateInput = document.getElementById('expiration-date');

  expDateInput.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }

    event.target.value = value;
  });

  expDateInput.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && event.target.value.length === 3) {
      event.target.value = event.target.value.slice(0, 2);
    }
  });

  const cardNumber = document.querySelectorAll('.pay__card-input');

  cardNumber.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 4 && index < cardNumber.length - 1) {
        cardNumber[index + 1].focus();
      }
    });
  });

>>>>>>> origin/master
  const buyNowButtons = document.querySelectorAll('.buy-button');
  const cartCloseButtons = document.querySelectorAll('.cart__close');

  const orderInfo = document.querySelector('.cart__order-info');
  const orderPrice = document.querySelector('.cart__order-price');

  const tabsPlaceOrder = document.querySelectorAll('.tab__place-order');
  const tabsPay = document.querySelectorAll('.tab__pay');
  const tabsComplete = document.querySelectorAll('.tab__complete');

  const placeOrderContent = document.querySelector('.cart__place-order');
  const payContent = document.querySelector('.cart__pay');
  const completeContent = document.querySelector('.cart__complete');

  buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabsPlaceOrder.forEach(tab => {
        tab.classList.add('cart__tab--active');
      });
      orderInfo.classList.add('cart__order-info--active');
      placeOrderContent.classList.add('cart__place-order--active');
    });
  });

  const purchaseButton1 = document.getElementById('place-order-button');
  const purchaseButton2 = document.getElementById('pay-button');

  purchaseButton1.addEventListener('click', (event) => {
    event.preventDefault();
<<<<<<< HEAD

    if (purchaseButton1.disabled) {
      return;
    }

=======
>>>>>>> origin/master
    tabsPlaceOrder.forEach(tab => {
      tab.classList.remove('cart__tab--active');
    });

    tabsPay.forEach(tab => {
      tab.classList.add('cart__tab--active');
    });

    placeOrderContent.classList.remove('cart__place-order--active');
    payContent.classList.add('cart__pay--active');

    if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
      orderPrice.style.marginLeft = '120px';
    } else {
      orderPrice.style.marginLeft = '0';
    }
  });

  purchaseButton2.addEventListener('click', (event) => {
    event.preventDefault();
    tabsPay.forEach(tab => {
      tab.classList.remove('cart__tab--active');
    });

    tabsComplete.forEach(tab => {
      tab.classList.add('cart__tab--active');
    });

    payContent.classList.remove('cart__pay--active');
    orderInfo.classList.remove('cart__order-info--active');
    orderPrice.style.marginLeft = '0';
    completeContent.classList.add('cart__complete--active');
  });

  cartCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabsComplete.forEach(tab => {
        tab.classList.remove('cart__tab--active');
      });

      completeContent.classList.remove('cart__complete--active');
    });
  });

<<<<<<< HEAD
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropdownButtons = document.querySelectorAll('.dropdown__arrow-button');

  dropdownButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      dropdowns.forEach((dropdown, i) => {
        if (i !== index) {
          dropdown.classList.remove('dropdown--active');
        }
      });

      dropdowns[index].classList.toggle('dropdown--active');
    });
  });

  const dropdownItems = document.querySelectorAll('.dropdown__item');

  dropdownItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const selectedValue = event.target.textContent;
      const dropdown = item.closest('.dropdown');
      const button = dropdown.querySelector('.dropdown__arrow-button');

      button.firstChild.textContent = selectedValue;

      dropdown.classList.remove('dropdown--active');
    });
  });

  const quantityDropdown = document.getElementById('dropdown-quantity');

  if (quantityDropdown) {
    const quantityItems = quantityDropdown.querySelectorAll('.dropdown__item');
    const quantityButton = quantityDropdown.querySelector('.dropdown__arrow-button');
    const pricePerItem = 1200;
    const totalPrice = document.querySelector('.place-order__price');

    quantityButton.firstChild.textContent = '1';

    quantityButton.addEventListener('click', (event) => {
      event.preventDefault();
      quantityDropdown.classList.toggle('dropdown--active');
    });

    quantityItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        const selectedQuantity = parseInt(event.target.textContent);

        quantityButton.firstChild.textContent = selectedQuantity;

        const newTotal = pricePerItem * selectedQuantity;
        totalPrice.textContent = `${newTotal}$`;

        quantityDropdown.classList.remove('dropdown--active');
      });
    });
  }

  const firstNameInput = document.getElementById('buyers-first-name');
  const lastNameInput = document.getElementById('buyers-last-name');
  const emailInput = document.getElementById('buyers-email');
  const phoneInput = document.getElementById('buyers-phone');
  const addressInput = document.getElementById('buyers-address-1');

  const firstNameError = document.getElementById('first-name-error');
  const lastNameError = document.getElementById('last-name-error');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');
  const addressError = document.getElementById('address-error');

  function validateInput1(input, error, validationFunction, errorMessage) {
    input.addEventListener('blur', () => {
      const inputValue = input.value.trim();
      const isValid = validationFunction(inputValue);

      if (!isValid) {
        error.textContent = errorMessage;
        error.style.display = 'block';
      } else {
        error.textContent = '';
        error.style.display = 'none';
      }

      togglePurchaseButton1();
    });
  };

  function isValidName(name) {
    return name.length > 0;
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  };

  function isValidPhone(phone) {
    return /^\+?[1-9]\d{1,14}$/.test(phone);
  };

  function isValidAddress(address) {
    return address.length > 0;
  };

  validateInput1(firstNameInput, firstNameError, isValidName, 'Please enter a valid first name');
  validateInput1(lastNameInput,lastNameError, isValidName, 'Please enter a valid last name');
  validateInput1(emailInput, emailError, isValidEmail, 'Please ente a valid email address');
  validateInput1(phoneInput, phoneError, isValidPhone, 'Please enter a valid phone number');
  validateInput1(addressInput, addressError, isValidAddress, 'Please enter a velid address');

  function togglePurchaseButton1() {
    const hasFirstName = isValidName(firstNameInput.value.trim());
    const hasLastName = isValidName(lastNameInput.value.trim());
    const hasEmail = isValidEmail(emailInput.value.trim());
    const hasPhone = isValidPhone(phoneInput.value.trim());
    const hasAddress = isValidAddress(addressInput.value.trim());

    if (hasFirstName
      && hasLastName
      && hasEmail
      && hasPhone
      && hasAddress) {
        purchaseButton1.disabled = false;
    } else {
      purchaseButton1.disabled = true;
    }
  };

  togglePurchaseButton1();

  const cardNumberInputs = [
    document.getElementById('card-number-1'),
    document.getElementById('card-number-2'),
    document.getElementById('card-number-3'),
    document.getElementById('card-number-4'),
  ];
  const cardHolderInput = document.getElementById('card-holder-name');
  const expirationDateInput = document.getElementById('expiration-date');
  const cvvInput = document.getElementById('cvv');

  const cardNumberError = document.getElementById('card-number-error');
  const cardHolderError = document.getElementById('card-holder-error');
  const expirationDateError = document.getElementById('expiration-date-error');
  const cvvError = document.getElementById('cvv-error');

  function validateInput2(input, error, validationFunction, errorMessage) {
    input.addEventListener('blur', () => {
      const inputValue = input.value.trim();
      const isValid = validationFunction(inputValue);

      if (!isValid) {
        error.textContent = errorMessage;
        error.style.display = 'block';
      } else {
        error.textContent = '';
        error.style.display = 'none';
      }

      togglePurchaseButton2();
    });
  };

  function isValidCardNumber(number) {
    if (!/^\d{16}$/.test(number)) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  }

  function isValidCardHolder(name) {
    return name.length > 0;
  }

  function isValidCvv(number) {
    return /^[0-9]{3}$/.test(number);
  }

  function isValidExpirationDate(date) {
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(date)) {
      return false;
    }

    const [month, year] = date.split('/').map(Number);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }

    return true;
  };

  function handleExpirationDateValidation(inputValue) {
    if (inputValue.length === 5) {
      const isValid = isValidExpirationDate(inputValue);

      if (!isValid) {
        expirationDateError.textContent = 'Please enter a valid date';
        expirationDateError.style.display = 'block';
      } else {
        expirationDateError.textContent = '';
        expirationDateError.style.display = 'none';
      }
    } else if (inputValue.length < 5) {
      expirationDateError.textContent = 'Please enter a valid date';
      expirationDateError.style.display = 'block';
    }
  };

  function validateExpirationDateInput() {
    expirationDateInput.addEventListener('input', () => {
      let inputValue = expirationDateInput.value.trim();

      if (/[^0-9\/]/.test(inputValue)) {
        expirationDateInput.value = inputValue.replace(/[^0-9\/]/g, '');
        return;
      }

      if (inputValue.length === 2 && !inputValue.includes('/')) {
        expirationDateInput.value = inputValue + '/';
      }

      if (inputValue.length > 5) {
        expirationDateInput.value = inputValue.slice(0, 5);
      }

      handleExpirationDateValidation(inputValue);
      togglePurchaseButton2();
    });

    expirationDateInput.addEventListener('blur', () => {
      handleExpirationDateValidation(expirationDateInput.value.trim());
    });
  }

  validateExpirationDateInput();

  function validateCardNumberInputs() {
    cardNumberInputs.forEach(input => {
      input.addEventListener('input', () => {
        const fullCardNumber = cardNumberInputs.map(input => input.value.trim()).join('');

        if (fullCardNumber.length === 16) {
          const isValid = isValidCardNumber(fullCardNumber);

          if (!isValid) {
            cardNumberError.textContent = 'Please insert a valid card number';
            cardNumberError.style.display = 'block';
          } else {
            cardNumberError.textContent = '';
            cardNumberError.style.display = 'none';
          }
        }

        togglePurchaseButton2();
      });

      input.addEventListener('blur', () => {
        const fullCardNumber = cardNumberInputs.map(input => input.value.trim()).join('');

        if (fullCardNumber.length === 16) {
          const isValid = isValidCardNumber(fullCardNumber);

          if (!isValid) {
            cardNumberError.textContent = 'Please insert a valid card number';
            cardNumberError.style.display = 'block';
          } else {
            cardNumberError.textContent = '';
            cardNumberError.style.display = 'none';
          }
        } else if (fullCardNumber.length < 16) {
          cardNumberError.textContent = 'Card must be 16 digits';
          cardNumberError.style.display = 'block';
        } else {
          cardNumberError.textContent = '';
          cardNumberError.style.display = 'none';
        }
      });
    });
  };

  validateCardNumberInputs();

  validateInput2(cardHolderInput, cardHolderError, isValidCardHolder, 'Please enter a valid name');
  validateInput2(cvvInput, cvvError, isValidCvv, 'Please enter a valid number');

  function togglePurchaseButton2() {
    const fullCardNumber = cardNumberInputs.map(input => input.value.trim()).join('');
    const hasCardNumber = isValidCardNumber(fullCardNumber);
    const hasCardHolder = isValidCardHolder(cardHolderInput.value.trim());
    const hasExpirationDate = isValidExpirationDate(expirationDateInput.value.trim());
    const hasCvv = isValidCvv(cvvInput.value.trim());

    if (hasCardNumber
      && hasCardHolder
      && hasExpirationDate
      && hasCvv) {
        purchaseButton2.disabled = false;
    } else {
      purchaseButton2.disabled = true;
    }
  };

  togglePurchaseButton2();

  const cardNumber = document.querySelectorAll('.pay__card-input');

  cardNumber.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 4 && index < cardNumber.length - 1) {
        cardNumber[index + 1].focus();
      }
    });
  });
=======
  function toggleScroll() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const currentHash = window.location.hash;
    const isDesktop = window.innerWidth >= 1280;

    if (['#menu', '#language', '#help', '#faq', '#cart'].includes(currentHash)) {
      body.classList.add('no-scroll');

      if (isDesktop) {
        header.style.filter = 'blur(5px)';
      }
    } else {
      body.classList.remove('no-scroll');

      if (isDesktop) {
        header.style.filter = 'blur(0)';
      }
    }
  };

  window.addEventListener('hashchange', toggleScroll);
  window.addEventListener('load', toggleScroll);
>>>>>>> origin/master
});
