function updateTimes() {
            const now = new Date();
            const commentTimes = document.querySelectorAll('.time-info span');
            const timeDifferences = [2, 5, 10, 15, 22, 50]; // Different random minutes for each comment

            commentTimes.forEach((commentTime, index) => {
                const minutesAgo = timeDifferences[index] + Math.floor((now - startTime) / 60000);
                commentTime.innerHTML = `${minutesAgo} minutes ago`;
            });
        }

        const startTime = new Date();
        setInterval(updateTimes, 60000);
        window.onload = updateTimes;
