document.addEventListener('DOMContentLoaded', function() {
    const tideList = document.getElementById('tideList');

    // Function to fetch tide data
    function fetchTideData() {
        // Replace with actual API call or data source
        const tideData = [
            { date: '2024-01-01', time: '06:00', height: '3.5m' },
            { date: '2024-01-01', time: '18:00', height: '3.2m' },
            // Add more data here...
        ];

        return tideData;
    }

    // Function to display tide data
    function displayTideData(data) {
        data.forEach(tide => {
            const listItem = document.createElement('li');
            listItem.textContent = `${tide.date} - ${tide.time} - ${tide.height}`;
            tideList.appendChild(listItem);
        });
    }

    // Fetch and display tide data
    const tideData = fetchTideData();
    displayTideData(tideData);
});