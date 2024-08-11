import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import MapComponent from "./MapComponent";
import ResponseComponent from "./ResponseComponent";
import ActionBar from "./ActionBar";
import ReportPopup from "./ReportPopup";
import ChatComponent from "./ChatComponent";

const initialMapContainerStyle = {
	width: "60vw",
	height: "85vh",
};

const selectedMapContainerStyle = {
	width: "45vw",
	height: "70vh",
};

function MainComponent() {
	const [clickedLocation, setClickedLocation] = useState(null);
	const [locationName, setLocationName] = useState("");
	const [box, setBox] = useState([]);
	const [mapContainerStyle, setMapContainerStyle] = useState(
		initialMapContainerStyle
	);
	const [isLoading, setIsLoading] = useState("ideal");
	const [historyData, setHistoryData] = useState(null);
	const [boundingBox, setBoundingBox] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [report, setReport] = useState("");
	const [entireData, setEntireData] = useState(null);
	const [fullData,setFullata]=useState(null)
	const [hostname,setHostName]=useState('');
	useEffect(() => {
		setHostName( window.location.host)
		if (clickedLocation) {
			setMapContainerStyle(selectedMapContainerStyle);
		} else {
			setMapContainerStyle(initialMapContainerStyle);
		}
	}, [clickedLocation]);

	const updateLocationName = async (lat, lng) => {
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
			);
			const data = await response.json();
			setFullata(data)
			setLocationName(
				[
					data.address.country,
					data.address.state,
					data.address.state_district && data.address.state_district.length > 12
						? data.address.town
						: data.address.state_district,
				]
					.filter(Boolean)
					.join(" ") || "Unknown location"
			);
		} catch (error) {
			console.error("Error fetching location name:", error);
			setLocationName("Unable to fetch location name");
		}
	};

	const handleMapClick = async (event) => {
		let { lat, lng } = event.latlng;
		setClickedLocation({
			lat: Number(lat.toFixed(4)),
			lng: Number(lng.toFixed(4)),
		});
		console.log(`Latitude: ${lat}, Longitude: ${lng}`);
		lat = lat.toFixed(4) - 0;
		lng = lng.toFixed(4) - 0;
		const newBox = [
			(lng - 0.2).toFixed(4),
			(lat - 0.2).toFixed(4),
			(lng + 0.2).toFixed(4),
			(lat + 0.2).toFixed(4),
		].map(Number);
		setBox(newBox);
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
			);
			const data = await response.json();
			console.log("data: ", data);
			setBoundingBox(data.boundingbox);
			setLocationName(
				[
					data.address.country,
					data.address.state,
					data.address.state_district && data.address.state_district.length > 12
						? data.address.town
						: data.address.state_district,
				]
					.filter(Boolean)
					.join(" ") || "Unknown location"
			);
		} catch (error) {
			console.error("Error fetching location name:", error);
			setLocationName("Unable to fetch location name");
		}
		await updateLocationName(lat, lng);
	};

	const handleSearch = async () => {
		setIsLoading("loading");
		try {
			console.log(box, boundingBox);
			setHistoryData(null);
			if(window.location.hostname==='localhost')
			{axios
				.post("http://localhost:5000/api/get/history", {
					bbox: box,
					platform: "Production",
				})
				.then((data) => {
					console.log(data);
					setEntireData(data.data);
					setHistoryData(data.data.received_data);
					setIsLoading(false);
				})
				.catch((err) => {
					setIsLoading(false);
					console.log(err);
				});}
			else{

					setTimeout(()=>{
						setIsLoading(false);
						setEntireData({
							"received_data": [
								{
									"year": 1998,
									"forest Area(%)": "46.31%",
									"land_Area(%)": "53.69%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346240/kars0dyb5z51eq7yzzmd.png"
								},
								{
									"year": 2000,
									"forest Area(%)": "46.31%",
									"land_Area(%)": "53.69%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346242/chbftogvl4qbgur2fcau.png"
								},
								{
									"year": 2002,
									"forest Area(%)": "47.61%",
									"land_Area(%)": "52.39%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346245/grk8aqx9lttddbyk2wry.png"
								},
								{
									"year": 2004,
									"forest Area(%)": "57.51%",
									"land_Area(%)": "42.49%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346248/abltd7el6yy1xmkde3ft.png"
								},
								{
									"year": 2006,
									"forest Area(%)": "49.18%",
									"land_Area(%)": "50.82%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346250/eyutvuhfc5fyqxqtumlk.png"
								},
								{
									"year": 2008,
									"forest Area(%)": "65.66%",
									"land_Area(%)": "34.34%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346253/vkexq7uxvhuyrdgsfsyw.png"
								},
								{
									"year": 2010,
									"forest Area(%)": "56.14%",
									"land_Area(%)": "43.86%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346256/m6ofkgqk3bnbbsf0cgbi.png"
								},
								{
									"year": 2012,
									"forest Area(%)": "45.53%",
									"land_Area(%)": "54.47%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346258/xihjvfbbhxndromz0b0t.png"
								},
								{
									"year": 2014,
									"forest Area(%)": "79.30%",
									"land_Area(%)": "20.70%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346260/bdylebekuzqncihiqrpd.png"
								},
								{
									"year": 2016,
									"forest Area(%)": "63.41%",
									"land_Area(%)": "36.59%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346263/kague3ubfgxcgbombfrc.png"
								},
								{
									"year": 2018,
									"forest Area(%)": "43.68%",
									"land_Area(%)": "56.32%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346265/aupzazrwxuhzjprw1cjd.png"
								},
								{
									"year": 2020,
									"forest Area(%)": "51.73%",
									"land_Area(%)": "48.27%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346269/b9bff8xnr7yqs9jsweqb.png"
								}
							]
						});
						setHistoryData([
								{
									"year": 1998,
									"forest Area(%)": "46.31%",
									"land_Area(%)": "53.69%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346240/kars0dyb5z51eq7yzzmd.png"
								},
								{
									"year": 2000,
									"forest Area(%)": "46.31%",
									"land_Area(%)": "53.69%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346242/chbftogvl4qbgur2fcau.png"
								},
								{
									"year": 2002,
									"forest Area(%)": "47.61%",
									"land_Area(%)": "52.39%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346245/grk8aqx9lttddbyk2wry.png"
								},
								{
									"year": 2004,
									"forest Area(%)": "57.51%",
									"land_Area(%)": "42.49%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346248/abltd7el6yy1xmkde3ft.png"
								},
								{
									"year": 2006,
									"forest Area(%)": "49.18%",
									"land_Area(%)": "50.82%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346250/eyutvuhfc5fyqxqtumlk.png"
								},
								{
									"year": 2008,
									"forest Area(%)": "65.66%",
									"land_Area(%)": "34.34%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346253/vkexq7uxvhuyrdgsfsyw.png"
								},
								{
									"year": 2010,
									"forest Area(%)": "56.14%",
									"land_Area(%)": "43.86%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346256/m6ofkgqk3bnbbsf0cgbi.png"
								},
								{
									"year": 2012,
									"forest Area(%)": "45.53%",
									"land_Area(%)": "54.47%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346258/xihjvfbbhxndromz0b0t.png"
								},
								{
									"year": 2014,
									"forest Area(%)": "79.30%",
									"land_Area(%)": "20.70%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346260/bdylebekuzqncihiqrpd.png"
								},
								{
									"year": 2016,
									"forest Area(%)": "63.41%",
									"land_Area(%)": "36.59%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346263/kague3ubfgxcgbombfrc.png"
								},
								{
									"year": 2018,
									"forest Area(%)": "43.68%",
									"land_Area(%)": "56.32%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346265/aupzazrwxuhzjprw1cjd.png"
								},
								{
									"year": 2020,
									"forest Area(%)": "51.73%",
									"land_Area(%)": "48.27%",
									"img_url": "http://res.cloudinary.com/dzqf5owza/image/upload/v1723346269/b9bff8xnr7yqs9jsweqb.png"
								}
							]);
					},5000);
			}
		} catch (error) {
			console.log("Error fetching history data:", error);
			setHistoryData(null);
		}

	};

	const handleViewReport = () => {
		setShowModal(true);
	};

	const handleCloseModal = (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			setShowModal(false);
		}
	};

	return (
		<div
			className={`App bg-blue-50 p-9 gap-5 flex flex-col items-center w-full h-screen`}
		>
			{console.log(locationName)}
			<AnimatePresence>
				{!clickedLocation && (
					<motion.h1
						className="text-4xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						Select a location on the map
					</motion.h1>
				)}
			</AnimatePresence>
			<div
				className={`flex items-center ${
					clickedLocation ? "justify-between" : "justify-center"
				} w-full h-full`}
			>
				<motion.div
					layout
					initial={initialMapContainerStyle}
					animate={mapContainerStyle}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className="w-full h-full flex flex-col items-center justify-center gap-10"
				>
					<MapComponent
						clickedLocation={clickedLocation}
						handleMapClick={handleMapClick}
						mapContainerStyle={mapContainerStyle}
					/>
				</motion.div>
				<AnimatePresence>
					{clickedLocation && (
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
						>
							<ResponseComponent
								isLoading={isLoading}
								historyData={historyData}
								handleViewReport={handleViewReport}
								setReport={setReport}
								setShowModal={setShowModal}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<AnimatePresence>
				{clickedLocation && (
					<motion.div
						initial={{ y: "100%" }}
						animate={{ y: 0 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="w-full"
					>
						<ActionBar
							locationName={locationName}
							clickedLocation={clickedLocation}
							setClickedLocation={setClickedLocation}
							onSearch={handleSearch}
							isLoading={isLoading}
							updateLocationName={updateLocationName}
						/>
					</motion.div>
				)}
				{showModal && (
					<ReportPopup
						entireData={entireData}
						locationData={fullData}
						// updateLocationName={updateLocationName}
						handleCloseModal={handleCloseModal}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}

export default MainComponent;
