// Components
export { AlertProvider } from "./components/Alert/Alert.context";
export { default as Alert } from "./components/Alert/Alert.component";
export { default as buildXlsx } from "./components/DownloadXlsx/BuildXlsx.component";
export { default as DownloadXlsx } from "./components/DownloadXlsx/DownloadXlsx.component";
export { default as Loading } from "./components/Loading/Loading.component";
export { default as Separator } from "./components/Separator/Separator.component";

// Contexts
export { UserProvider } from "./context/User.context";
export { UserContext } from "./context/User.context";

// Helpers
export { default as convertFirebaseTimestampToString } from "./helpers/convertFirebaseTimestampToString";
export { default as sleep } from "./helpers/sleep";
export { default as generateRandomNumber } from "./helpers/generateRandomNumber";
export { default as slugifyString } from "./helpers/slugifyString";
export { default as formatNumberToCurrency } from "./helpers/formatNumberToCurrency"
export { default as convertUrlToLink } from "./helpers/convertUrlToLink";
export { default as isValidEmail } from "./helpers/isValidEmail";
export { default as isValidUrl } from "./helpers/isValidUrl";
export { default as randomString } from "./helpers/randomString";
export { default as copyToClipboard } from "./helpers/copyToClipboard";
export { default as onlyNumbers } from "./helpers/onlyNumbers";
export { default as hideEmail } from "./helpers/hideEmail";
export { default as isCPFValid } from "./helpers/isCPFValid";
export { default as formatBytes } from "./helpers/formatBytes";
export { default as removeDuplicatesFromArray } from "./helpers/removeDuplicatesFromArray";
export { default as generateGoogleCalendarLink } from "./helpers/generateGoogleCalendarLink";
export { default as isDOB } from "./helpers/isDOB";
export { default as detectUrlInString } from "./helpers/detectUrlInString";
export { default as openWhatsappChat } from "./helpers/openWhatsappChat";
export { default as shareToWhatsapp } from "./helpers/shareToWhatsapp";
