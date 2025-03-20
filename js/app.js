// Main application JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    initApp();
});

function initApp() {
    // Load dashboard as the default page
    loadPage('dashboard');
    
    // Attach event listeners to navigation items
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Load the selected page
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });
}

function loadPage(pageName) {
    const contentContainer = document.getElementById('content');
    const templateId = `${pageName}-template`;
    const template = document.getElementById(templateId);
    
    if (!template) {
        console.error(`Template not found: ${templateId}`);
        return;
    }
    
    // Clone the template content
    const content = template.content.cloneNode(true);
    
    // Clear and append the new content
    contentContainer.innerHTML = '';
    contentContainer.appendChild(content);
    
    // Initialize page-specific functionality
    switch (pageName) {
        case 'dashboard':
            initDashboard();
            break;
        case 'assets':
            initAssets();
            break;
        case 'qr-generator':
            initQRGenerator();
            break;
        case 'engraving':
            initEngraving();
            break;
        case 'reports':
            initReports();
            break;
    }
}

function initDashboard() {
    // Load recent scans data
    loadRecentScans();
    
    // Initialize charts
    initAssetStatusChart();
}

function loadRecentScans() {
    const recentScansContainer = document.getElementById('recent-scans');
    if (!recentScansContainer) return;
    
    // Clear container
    recentScansContainer.innerHTML = '';
    
    // Get mock scan data from data.js
    const scans = mockData.recentScans;
    
    // Populate the table
    scans.forEach(scan => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${scan.assetId}</td>
            <td>${scan.location}</td>
            <td>${scan.time}</td>
            <td>${scan.user}</td>
            <td>${scan.action}</td>
        `;
        recentScansContainer.appendChild(row);
    });
}

function initAssets() {
    loadAssets();
    
    // Add event listeners for filters
    const filters = document.querySelectorAll('.filter select');
    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            loadAssets();
        });
    });
    
    // Add event listener for search
    const searchInput = document.getElementById('asset-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            loadAssets();
        });
    }
}

function loadAssets() {
    const assetsContainer = document.getElementById('assets-container');
    if (!assetsContainer) return;
    
    // Clear container
    assetsContainer.innerHTML = '';
    
    // Get filter values
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    const locationFilter = document.getElementById('location-filter')?.value || '';
    const statusFilter = document.getElementById('status-filter')?.value || '';
    const searchQuery = document.getElementById('asset-search')?.value.toLowerCase() || '';
    
    // Filter assets based on selected filters and search query
    const filteredAssets = mockData.assets.filter(asset => {
        return (
            (categoryFilter === '' || asset.category === categoryFilter) &&
            (locationFilter === '' || asset.location === locationFilter) &&
            (statusFilter === '' || asset.status === statusFilter) &&
            (searchQuery === '' || 
             asset.id.toLowerCase().includes(searchQuery) || 
             asset.name.toLowerCase().includes(searchQuery))
        );
    });
    
    // Populate the assets grid
    filteredAssets.forEach(asset => {
        const assetCard = document.createElement('div');
        assetCard.className = 'asset-card';
        
        // Determine status class
        let statusClass = '';
        switch (asset.status) {
            case 'active': statusClass = 'success'; break;
            case 'maintenance': statusClass = 'warning'; break;
            case 'decommissioned': statusClass = 'danger'; break;
        }
        
        assetCard.innerHTML = `
            <div class="asset-card-header">
                <h3>${asset.name}</h3>
                <span class="badge ${statusClass}">${asset.status}</span>
            </div>
            <div class="asset-card-body">
                <ul class="asset-properties">
                    <li><span>Asset ID:</span> <strong>${asset.id}</strong></li>
                    <li><span>Category:</span> ${asset.category}</li>
                    <li><span>Location:</span> ${asset.location}</li>
                    <li><span>Acquisition:</span> ${asset.acquisitionDate}</li>
                </ul>
            </div>
            <div class="asset-footer">
                <button class="btn small primary">View Details</button>
                <button class="btn small secondary">Generate QR</button>
            </div>
        `;
        
        assetsContainer.appendChild(assetCard);
    });
}

function initQRGenerator() {
    // Get DOM elements
    const generateButton = document.getElementById('generate-qr');
    const assetIdInput = document.getElementById('asset-id');
    const assetCategorySelect = document.getElementById('asset-category');
    const assetLocationSelect = document.getElementById('asset-location');
    const errorCorrectionSelect = document.getElementById('error-correction');
    const qrSizeInput = document.getElementById('qr-size');
    const qrDisplay = document.getElementById('qr-code-display');
    const qrDataString = document.getElementById('qr-data-string');
    const qrHash = document.getElementById('qr-hash');
    const sendToEngraverButton = document.getElementById('send-to-engraver');
    const downloadSvgButton = document.getElementById('download-svg');
    
    if (!generateButton) return;
    
    // Add event listener to generate button
    generateButton.addEventListener('click', () => {
        // Validate inputs
        if (!assetIdInput.value) {
            alert('Please enter an Asset ID');
            return;
        }
        
        if (!assetCategorySelect.value) {
            alert('Please select a Category');
            return;
        }
        
        if (!assetLocationSelect.value) {
            alert('Please select a Location');
            return;
        }
        
        // Generate a mock QR code
        const assetId = assetIdInput.value;
        const category = assetCategorySelect.value;
        const location = assetLocationSelect.value;
        const errorLevel = errorCorrectionSelect.value;
        
        // Create data string format like: FCX-LOCATION-CATEGORY-ASSETID
        const dataString = `FCX-${location}-${category}-${assetId}`;
        
        // Generate a fake hash (would be a SHA256 in real implementation)
        const hash = generateMockHash(dataString);
        
        // Update display
        qrDisplay.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(dataString + '-' + hash)}&size=200x200" alt="QR Code">`;
        qrDataString.innerHTML = `Data: <span>${dataString}</span>`;
        qrHash.innerHTML = `Verification Hash: <span>${hash}</span>`;
        
        // Enable buttons
        sendToEngraverButton.disabled = false;
        downloadSvgButton.disabled = false;
    });
    
    // Add event listeners to buttons
    sendToEngraverButton.addEventListener('click', () => {
        alert('QR code sent to engraving queue!');
    });
    
    downloadSvgButton.addEventListener('click', () => {
        alert('SVG would be downloaded in a real implementation');
    });
}

function generateMockHash(str) {
    // This is a simplified mock hash function
    // In a real implementation, this would use a proper crypto function
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16).substring(0, 8);
}

function initEngraving() {
    // Set up tab switching
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = `${tab.getAttribute('data-tab')}-tab`;
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Load queue jobs
    loadQueueJobs();
    loadCompletedJobs();
}

function loadQueueJobs() {
    const queueJobsContainer = document.getElementById('queue-jobs');
    if (!queueJobsContainer) return;
    
    // Clear container
    queueJobsContainer.innerHTML = '';
    
    // Get mock job data
    const jobs = mockData.queueJobs;
    
    // Populate the table
    jobs.forEach(job => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${job.id}</td>
            <td>${job.asset}</td>
            <td>${job.material}</td>
            <td>${job.size}</td>
            <td>${job.created}</td>
            <td><span class="status-badge ${job.status.toLowerCase()}">${job.status}</span></td>
            <td>
                <button class="btn small primary">Start</button>
                <button class="btn small secondary">Edit</button>
                <button class="btn small danger">Cancel</button>
            </td>
        `;
        queueJobsContainer.appendChild(row);
    });
}

function loadCompletedJobs() {
    const completedJobsContainer = document.getElementById('completed-jobs');
    if (!completedJobsContainer) return;
    
    // Clear container
    completedJobsContainer.innerHTML = '';
    
    // Get mock job data
    const jobs = mockData.completedJobs;
    
    // Populate the table
    jobs.forEach(job => {
        const row = document.createElement('tr');
        let resultClass = '';
        
        switch (job.result) {
            case 'Success': resultClass = 'success'; break;
            case 'Failed': resultClass = 'danger'; break;
            case 'Partial': resultClass = 'warning'; break;
        }
        
        row.innerHTML = `
            <td>${job.id}</td>
            <td>${job.asset}</td>
            <td>${job.material}</td>
            <td>${job.completed}</td>
            <td>${job.operator}</td>
            <td><span class="status-badge ${resultClass}">${job.result}</span></td>
            <td>
                <button class="btn small primary">View</button>
                <button class="btn small secondary">Redo</button>
            </td>
        `;
        completedJobsContainer.appendChild(row);
    });
}

function initReports() {
    // Initialize the report chart
    initReportChart();
}