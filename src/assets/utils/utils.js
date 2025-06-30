export const convertUnixToTime = (unixTime, timezoneOffset) => {
	const utcDate = new Date(unixTime * 1000);
	const localMillis = utcDate.getTime() + timezoneOffset * 1000;
	const localDate = new Date(localMillis);

	return localDate.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
		timeZone: "UTC",
	});
};

////////// Converter of °F to °C
export const convertTemp = (temp, unit) => {
	return unit === "C" ? Math.round(((temp - 32) * 5) / 9) : Math.round(temp);
};
