        const btn = document.getElementById('toggle');
        const body = document.body;
        btn.addEventListener('click', () => {
            body.classList.toggle('light-off');
            body.classList.toggle('light-on');
        });
