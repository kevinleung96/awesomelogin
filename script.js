document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        if (type === 'password') {
            this.classList.remove('bx-lock-open-alt');
            this.classList.add('bxs-lock-alt');
        } else {
            this.classList.remove('bxs-lock-alt');
            this.classList.add('bx-lock-open-alt');
        }
    });
});
