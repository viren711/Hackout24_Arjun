
# Environment Conservation and Monitoring Project

This project aims to monitor and conserve the environment using satellite imagery and advanced image segmentation techniques. We use Google Earth Engine to acquire satellite images across different bands and wavelengths, which are then processed using machine learning models like U-Net and Attention U-Net for image segmentation. The segmented images help in identifying and monitoring various environmental factors, such as deforestation, water bodies, and urban expansion.

- Project URL: https://hackout24-arjun-cdlm.vercel.app/
- Presentation: https://drive.google.com/drive/folders/15IYzBB7XNb55EBx345yVl6hZCwkoOD1w?usp=drive_link
- Project UI:   https://youtu.be/oGLB3wIb90E

## Tech Stack

- Frontend: ReactJS
    - Leaflet
    - Tailwind
    - Axios
- Backend: FastAPI (Python)
    - GeeMap
    - Folium
    - Scikit-Learn
    - Tensorflow
    - Google-Earth-Engine
- Machine Learning Models: U-Net, Attention U-Net
- Data Source: Google Earth Engine
## Features
1. Satellite Image Acquisition:
- Integration with Google Earth Engine to fetch satellite images   across multiple bands and wavelengths.
2. Image Segmentation:
- U-Net and Attention U-Net models for accurate segmentation of satellite images.
- Segmentation tasks include identifying greener areas, water bodies, deforestation zones, and urban areas.
3. Data Visualization:
- Real-time visualization of segmented images on the frontend using ReactJS.
4. Backend Processing:
- FastAPI handles the backend, serving requests, processing images, and interacting with the machine learning models.

## Setup and Installation
# Prerequisites
- Node.js and npm installed
- Python 3.8 or above installed
- Google Earth Engine API access

1. Navigate to the frontend directory:
```bash 
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```
## Backend 
1. Navigate to the backend directory:
```bash
cd backend
```
2. Create a virtual conda environment: 
``` bash
conda create -n googleearth python==3.10
```
```bash
conda activate googleearth
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Start the FastAPI server:
```bash 
uvicorn main:app --reload
```

## Usage Details
1. Access the Application:
The ReactJS frontend will be available at http://localhost:3000.
The FastAPI backend will be accessible at http://localhost:8000.

2. Upload Satellite Images:
Use the frontend to upload satellite images fetched from Google Earth Engine.

3. Run Segmentation:
Select the desired segmentation model (U-Net or Attention U-Net) and process the uploaded images.

4. View Results:
The segmented images will be displayed on the frontend, with options to download or further analyze them.
