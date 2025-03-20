// Mock data for the application
const mockData = {
    // Mock assets data
    assets: [
        {
            id: 'HE-1001',
            name: 'CAT 797F Haul Truck',
            category: 'heavy-equipment',
            location: 'morenci-north',
            status: 'active',
            acquisitionDate: '2020-03-15',
            hasQRCode: true
        },
        {
            id: 'HE-1002',
            name: 'Komatsu PC5500 Excavator',
            category: 'heavy-equipment',
            location: 'morenci-south',
            status: 'active',
            acquisitionDate: '2018-07-22',
            hasQRCode: true
        },
        {
            id: 'HE-1003',
            name: 'Caterpillar D11T Dozer',
            category: 'heavy-equipment',
            location: 'morenci-north',
            status: 'maintenance',
            acquisitionDate: '2019-11-05',
            hasQRCode: true
        },
        {
            id: 'VH-2001',
            name: 'Ford F-250 Pickup',
            category: 'vehicles',
            location: 'morenci-south',
            status: 'active',
            acquisitionDate: '2021-01-18',
            hasQRCode: true
        },
        {
            id: 'VH-2002',
            name: 'Toyota Land Cruiser',
            category: 'vehicles',
            location: 'central-warehouse',
            status: 'maintenance',
            acquisitionDate: '2020-09-30',
            hasQRCode: false
        },
        {
            id: 'TL-3001',
            name: 'Hydraulic Torque Wrench',
            category: 'tools',
            location: 'central-warehouse',
            status: 'active',
            acquisitionDate: '2022-02-10',
            hasQRCode: true
        },
        {
            id: 'TL-3002',
            name: 'Industrial Air Compressor',
            category: 'tools',
            location: 'morenci-north',
            status: 'active',
            acquisitionDate: '2021-06-15',
            hasQRCode: false
        },
        {
            id: 'PT-4001',
            name: 'Crusher Wear Plates',
            category: 'parts',
            location: 'central-warehouse',
            status: 'active',
            acquisitionDate: '2023-01-05',
            hasQRCode: false
        },
        {
            id: 'PT-4002',
            name: 'CAT 797F Engine Assembly',
            category: 'parts',
            location: 'central-warehouse',
            status: 'decommissioned',
            acquisitionDate: '2018-04-12',
            hasQRCode: true
        }
    ],
    
    // Mock recent scans data
    recentScans: [
        {
            assetId: 'HE-1001',
            location: 'Morenci North',
            time: '2025-03-20 09:15 AM',
            user: 'John Smith',
            action: 'Maintenance Check'
        },
        {
            assetId: 'TL-3001',
            location: 'Central Warehouse',
            time: '2025-03-20 08:42 AM',
            user: 'Maria Rodriguez',
            action: 'Inventory Check'
        },
        {
            assetId: 'VH-2001',
            location: 'Morenci South',
            time: '2025-03-19 04:30 PM',
            user: 'Robert Johnson',
            action: 'Location Update'
        },
        {
            assetId: 'HE-1003',
            location: 'Maintenance Shop',
            time: '2025-03-19 02:15 PM',
            user: 'Sarah Williams',
            action: 'Repair Started'
        },
        {
            assetId: 'PT-4002',
            location: 'Central Warehouse',
            time: '2025-03-19 11:20 AM',
            user: 'David Chen',
            action: 'Status Update'
        },
        {
            assetId: 'HE-1002',
            location: 'Morenci South',
            time: '2025-03-19 09:05 AM',
            user: 'Emily Davis',
            action: 'Fuel Check'
        },
        {
            assetId: 'TL-3002',
            location: 'Morenci North',
            time: '2025-03-18 03:45 PM',
            user: 'James Wilson',
            action: 'Calibration Check'
        }
    ],
    
    // Mock engraving queue jobs
    queueJobs: [
        {
            id: 'ENG-2025-0042',
            asset: 'TL-3002',
            material: 'Steel',
            size: '30mm',
            created: '2025-03-20 08:15 AM',
            status: 'Queued'
        },
        {
            id: 'ENG-2025-0041',
            asset: 'PT-4001',
            material: 'Aluminum',
            size: '25mm',
            created: '2025-03-19 03:30 PM',
            status: 'Processing'
        },
        {
            id: 'ENG-2025-0040',
            asset: 'VH-2002',
            material: 'Plastic',
            size: '40mm',
            created: '2025-03-19 01:45 PM',
            status: 'Queued'
        },
        {
            id: 'ENG-2025-0039',
            asset: 'HE-1004',
            material: 'Steel',
            size: '50mm',
            created: '2025-03-19 11:20 AM',
            status: 'Paused'
        },
        {
            id: 'ENG-2025-0038',
            asset: 'TL-3003',
            material: 'Steel',
            size: '20mm',
            created: '2025-03-19 09:10 AM',
            status: 'Queued'
        }
    ],
    
    // Mock completed engraving jobs
    completedJobs: [
        {
            id: 'ENG-2025-0037',
            asset: 'PT-4003',
            material: 'Aluminum',
            completed: '2025-03-18 04:30 PM',
            operator: 'Robert Johnson',
            result: 'Success'
        },
        {
            id: 'ENG-2025-0036',
            asset: 'HE-1005',
            material: 'Steel',
            completed: '2025-03-18 02:15 PM',
            operator: 'Sarah Williams',
            result: 'Success'
        },
        {
            id: 'ENG-2025-0035',
            asset: 'VH-2003',
            material: 'Plastic',
            completed: '2025-03-18 11:40 AM',
            operator: 'David Chen',
            result: 'Failed'
        },
        {
            id: 'ENG-2025-0034',
            asset: 'TL-3004',
            material: 'Steel',
            completed: '2025-03-17 03:55 PM',
            operator: 'Emily Davis',
            result: 'Success'
        },
        {
            id: 'ENG-2025-0033',
            asset: 'PT-4004',
            material: 'Aluminum',
            completed: '2025-03-17 01:20 PM',
            operator: 'James Wilson',
            result: 'Partial'
        }
    ],
    
    // Asset status distribution data for charts
    assetStatusData: {
        labels: ['Active', 'Maintenance', 'Decommissioned'],
        datasets: [183, 42, 22]
    },
    
    // Scan activity data for reports
    scanActivityData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [23, 25, 28, 32, 38, 15, 12]
    }
};