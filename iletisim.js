
function validateForm2() {
    const ad = document.getElementById('inputAd').value;
    const soyad = document.getElementById('inputSoyad').value;
    const email = document.getElementById('inputEmail4').value;
    const password = document.getElementById('inputPassword4').value;
    const address = document.getElementById('inputAddress').value;
    const city = document.getElementById('inputCity').value;
    const birthdate = document.getElementById('inputBirthdate').value;
    const gender = document.getElementById('inputGender').value;
    const message = document.getElementById('exampleFormControlTextarea1').value;
    const isConsentGiven = document.getElementById('gridCheck').checked;

    if (!ad) {
        alert('Ad alanı boş olamaz.');
        return false;
    }
    if (!soyad) {
        alert('Soyad alanı boş olamaz.');
        return false;
    }
    if (!email) {
        alert('E-mail alanı boş olamaz.');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Geçerli bir e-mail adresi giriniz.');
        return false;
    }
    if (!password) {
        alert('Şifre alanı boş olamaz.');
        return false;
    }
    if (!address) {
        alert('Adres alanı boş olamaz.');
        return false;
    }
    if (!city) {
        alert('Şehir alanı boş olamaz.');
        return false;
    }
    if (!birthdate) {
        alert('Doğum tarihi alanı boş olamaz.');
        return false;
    }
    if (gender === 'Seçiniz') {
        alert('Cinsiyet alanı boş olamaz.');
        return false;
    }
    if (!message) {
        alert('Mesaj alanı boş olamaz.');
        return false;
    }
    if (!isConsentGiven) {
        alert('Bilgilerinizin kaydedilmesine izin vermelisiniz.');
        return false;
    }
    alert('Formunuz gönderilmeye hazırdır.');
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function clearForm() {
    document.getElementById('inputAd').value = '';
    document.getElementById('inputSoyad').value = '';
    document.getElementById('inputEmail4').value = '';
    document.getElementById('inputPassword4').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputCity').value = '';
    document.getElementById('inputBirthdate').value = '';
    document.getElementById('inputGender').value = 'Seçiniz';
    document.getElementById('exampleFormControlTextarea1').value = '';
    document.getElementById('gridCheck').checked = false;

    alert('Form başarıyla temizlendi');
}

function submitForm() {
    if (validateForm2()) {
        const formData = {
            ad: document.getElementById('inputAd').value,
            soyad: document.getElementById('inputSoyad').value,
            email: document.getElementById('inputEmail4').value,
            password: document.getElementById('inputPassword4').value,
            address: document.getElementById('inputAddress').value,
            city: document.getElementById('inputCity').value,
            birthdate: document.getElementById('inputBirthdate').value,
            gender: document.getElementById('inputGender').value,
            message: document.getElementById('exampleFormControlTextarea1').value,
            isConsentGiven: document.getElementById('gridCheck').checked
        };
        alert('Formunuz başarıyla gönderildi.');

        localStorage.setItem('formData', JSON.stringify(formData));
        window.open('form.html', '_blank');
        return true;
    }
}