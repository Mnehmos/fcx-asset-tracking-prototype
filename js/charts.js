// Chart initialization functions

function initAssetStatusChart() {
    const ctx = document.getElementById('assetStatusChart');
    if (!ctx) return;
    
    const data = mockData.assetStatusData;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.datasets,
                backgroundColor: [
                    '#28a745',  // green for active
                    '#ffc107',  // yellow for maintenance
                    '#dc3545'   // red for decommissioned
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function initReportChart() {
    const ctx = document.getElementById('reportChart');
    if (!ctx) return;
    
    const data = mockData.scanActivityData;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Scan Activity',
                data: data.datasets,
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}