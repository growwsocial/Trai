 function submitPhoneNumber() {
            // Display loading animation
            document.querySelector('.box').innerHTML = `
                <div class="loading-animation">
                    <div class="loader"></div>
                </div>
            `;

            // Wait for 3 seconds before showing the next section
            setTimeout(() => {
                document.querySelector('.box').innerHTML = `
                    <div class="provid">
                        <h1>Recharge Now</h1>
                        <label for="state">Select your State/Circle</label>
                        <select id="state">
                            <option value="andhra-pradesh">Andhra Pradesh</option>
                            <option value="arunachal-pradesh">Arunachal Pradesh</option>
                            <option value="jammu-kashmir">Jammu and Kashmir</option>
                        </select>
                        <button type="button" onclick="showOperatorSelection()">Next</button>
                    </div>
                `;
            }, 3000); // 3000ms = 3 seconds
        }

        function showOperatorSelection() {
            // Display loading animation
            document.querySelector('.box').innerHTML = `
                <div class="loading-animation">
                    <div class="loader"></div>
                </div>
            `;

            // Wait for 3 seconds before showing the next section
            setTimeout(() => {
                document.querySelector('.box').innerHTML = `
                    <div class="provid">
                        <h1>Recharge Now</h1>
                        <p>Select your Operator/SIM Provider</p>
                        <div class="logo-container">
                            <select id="operator">
                                <option value="airtel">Airtel</option>
                                <option value="jio">Jio</option>
                                <option value="vi">Vi (Vodafone Idea)</option>
                                <option value="bsnl">BSNL</option>
                                <option value="mtnl">MTNL</option>
                            </select>
                        </div>
                        <button class="proceed-button" onclick="proceedToRecharge()">Proceed to Recharge</button>
                    </div>
                `;
            }, 3000); // 3000ms = 3 seconds
        }

        function proceedToRecharge() {
            alert('Proceeding to recharge...');
            // Implement the final recharge logic here
        }
