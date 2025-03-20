# QR Code Asset Tracking System Prototype

This repository contains a prototype implementation of a QR code asset tracking system for mining operations, as described in the project handoff document for Freeport-McMoRan's mining operations.

## Overview

This prototype demonstrates the core functionality and user interface for a system that will:

1. Generate industrial-grade QR codes for assets
2. Integrate with laser engraving systems
3. Track assets in a database
4. Provide web and mobile interfaces for management

## Features Demonstrated

- **Dashboard View**: Overview of system status, recent scans, and statistics
- **Asset Management**: Viewing, filtering, and managing tracked assets
- **QR Code Generation**: Interface for generating QR codes with proper formatting
- **Engraving Job Management**: Queue management for laser engraving tasks
- **Reporting**: Data visualization and analytics

## Technical Implementation

This prototype uses:

- HTML5, CSS3, and JavaScript for the frontend
- Chart.js for data visualization
- Mock data to simulate backend functionality

In a production implementation, this would connect to:

- Node.js backend with QR code generation libraries
- PostgreSQL database for asset tracking
- API integration with laser engraving systems
- SAP integration for enterprise data

## Technical Architecture

The implementation is organized following a clean component-based structure:

```
/
├── index.html           # Main application entry point
├── css/
│   └── style.css        # Core styling definitions
├── js/
│   ├── app.js           # Application logic and initialization
│   ├── data.js          # Mock data structures and schemas
│   ├── charts.js        # Data visualization components
│   └── qr-generator.js  # QR code generation module
└── assets/              # Static assets (images, etc.)
```

### Key Technical Components

1. **QR Code Generation**:
   The system implements a specialized QR code generation approach with:
   - High error correction (Level H - 30%)
   - Custom data formatting: `FCX-LOCATION-CATEGORY-ASSETID-HASH`
   - Verification hash generation for security
   - Module size optimization for engraving

2. **Responsive UI**:
   Fully responsive interface designed to work across desktop and mobile devices with adaptive layouts.

3. **Data Visualization**:
   Integration with Chart.js for dynamic visualization of:
   - Asset status distribution
   - Scan activity analytics
   - Time-based performance metrics

## Development Status

This is a prototype implementation for demonstration purposes. It includes:

- ✅ Full UI mockup with interactive elements
- ✅ Simulated QR code generation
- ✅ Mock data to demonstrate functionality
- ❌ Actual backend implementation
- ❌ Real database integration
- ❌ Production-ready security features

## Next Steps

To move from prototype to production:

1. Implement backend services for data persistence
2. Develop the QR code generation system with proper libraries
3. Integrate with actual laser engraving hardware
4. Implement user authentication and security features
5. Develop mobile scanning application

## Local Development

To run this prototype locally:

1. Clone this repository
   ```bash
   git clone https://github.com/Mnehmos/fcx-asset-tracking-prototype.git
   ```

2. Open `index.html` in a modern web browser
   ```bash
   cd fcx-asset-tracking-prototype
   open index.html  # or use your preferred browser
   ```

No build process or special dependencies are required for the prototype.