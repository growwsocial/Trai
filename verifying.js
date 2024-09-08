const messages = ['message2', 'message3', 'message4'];
        let currentMessageIndex = 0;

        function showMessage() {
            if (currentMessageIndex < messages.length) {
                const currentMessage = document.getElementById(messages[currentMessageIndex]);
                currentMessage.classList.add('visible');
                currentMessageIndex++;
                setTimeout(showMessage, 2000);
            } else {
                document.getElementById('loading').style.display = 'none';
                document.querySelector('.mess').classList.add('final');
                setTimeout(() => {
                    document.getElementById('continueButton').disabled = false;
                    document.getElementById('verificationMessage').textContent = "We have verified your details...";
                }, 1000);
            }
        }

        setTimeout(() => {
            showMessage();
        }, 5000);
