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

    alert('Form başarıyla gönderildi!');
    return true;
}

function validateEmail2(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

new Vue({
    el: '#app',
    data: {
        ad: '',
        soyad: '',
        email: '',
        password: '',
        address: '',
        city: '',
        birthdate: '',
        gender: '',
        message: '',
        isConsentGiven: false
    },
    methods: {
        validateForm() {
            if (!this.ad) {
                alert('Ad alanı boş olamaz.');
                return false;
            }
            if (!this.soyad) {
                alert('Soyad alanı boş olamaz.');
                return false;
            }
            if (!this.email) {
                alert('E-mail alanı boş olamaz.');
                return false;
            }
            if (!this.validateEmail(this.email)) {
                alert('Geçerli bir e-mail adresi giriniz.');
                return false;
            }
            if (!this.password) {
                alert('Şifre alanı boş olamaz.');
                return false;
            }
            if (!this.address) {
                alert('Adres alanı boş olamaz.');
                return false;
            }
            if (!this.city) {
                alert('Şehir alanı boş olamaz.');
                return false;
            }
            if (!this.birthdate) {
                alert('Doğum tarihi alanı boş olamaz.');
                return false;
            }
            if (!this.gender) {
                alert('Cinsiyet alanı boş olamaz.');
                return false;
            }
            if (!this.message) {
                alert('Mesaj alanı boş olamaz.');
                return false;
            }
            if (!this.isConsentGiven) {
                alert('Bilgilerinizin kaydedilmesine izin vermelisiniz.');
                return false;
            }

            alert('Form başarıyla gönderildi!');
            return true;
        },
        validateEmail(email) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return re.test(String(email).toLowerCase());
        }
    }
});
