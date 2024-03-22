"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDOB = exports.generateGoogleCalendarLink = exports.removeDuplicatesFromArray = exports.formatBytes = exports.isCPFValid = exports.hideEmail = exports.onlyNumbers = exports.copyToClipboard = exports.randomString = exports.isValidUrl = exports.isValidEmail = exports.convertUrlToLink = exports.formatNumberToCurrency = exports.slugifyString = exports.generateRandomNumber = exports.sleep = exports.convertFirebaseTimestampToString = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
// import {
//   getRemoteConfig,
//   fetchAndActivate,
//   getAll,
// } from "firebase/remote-config";
const convertFirebaseTimestampToString = (firebaseTimestamp, format = "YYYY-MM-DD HH:mm:ss") => {
    if (!firebaseTimestamp || !firebaseTimestamp._seconds) {
        return "";
    }
    const fireBaseTime = new Date(firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1000000);
    return (0, dayjs_1.default)(fireBaseTime).format(format);
};
exports.convertFirebaseTimestampToString = convertFirebaseTimestampToString;
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.sleep = sleep;
const generateRandomNumber = (min = 1, max = 99999) => {
    return Math.floor(Math.random() * (max - min) + min);
};
exports.generateRandomNumber = generateRandomNumber;
const slugifyString = (str) => {
    let newString = str.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');
    // Remove accents
    newString = newString.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Remove special characters
    newString = newString.replace(/[^a-zA-Z0-9]/g, '');
    // Remove double underscores
    newString = newString.replace(/__+/g, '_');
    // Remove double hyphens
    newString = newString.replace(/--+/g, '-');
    // Remove underscores at the beginning and end
    newString = newString.replace(/^_+|_+$/g, '');
    // Remove numbers at the beginning
    newString = newString.replace(/^\d+/, '');
    return newString;
};
exports.slugifyString = slugifyString;
const formatNumberToCurrency = (locale = 'pt-BR', currency = 'BRL', amount) => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency.toUpperCase() }).format(amount);
};
exports.formatNumberToCurrency = formatNumberToCurrency;
const convertUrlToLink = (text, target = "_blank") => {
    return text.replace(/(https?:\/\/[^\s]+)/g, `<a href="$1" target="${target}">$1</a>`);
};
exports.convertUrlToLink = convertUrlToLink;
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
exports.isValidEmail = isValidEmail;
const isValidUrl = (url) => {
    const re = /^(http|https):\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(String(url).toLowerCase());
};
exports.isValidUrl = isValidUrl;
const randomString = (length = 10) => {
    const dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let random = "";
    for (let i = 0; i < length; i++) {
        random += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
    }
    return random;
};
exports.randomString = randomString;
const copyToClipboard = (item) => {
    try {
        const create_copy = (e) => {
            e.clipboardData.setData('text/plain', item);
            e.preventDefault();
        };
        document.addEventListener('copy', create_copy);
        document.execCommand('copy');
        document.removeEventListener('copy', create_copy);
        return true;
    }
    catch (_) {
        return false;
    }
};
exports.copyToClipboard = copyToClipboard;
const onlyNumbers = (text) => {
    if (!text || text === "") {
        return "";
    }
    return text.replace(/\D/g, "");
};
exports.onlyNumbers = onlyNumbers;
const hideEmail = (email) => {
    const [name, domain] = email.split("@");
    return `${name.substring(0, 2)}...@${domain}`;
};
exports.hideEmail = hideEmail;
const isCPFValid = (cpf) => {
    cpf = (0, exports.onlyNumbers)(cpf);
    const invalids = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];
    // Remove invalid known CPF's
    if (cpf === '' || cpf.length !== 11 || invalids.includes(cpf)) {
        return false;
    }
    // Validate 1st digit
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
        return false;
    }
    // Validate 2nd digit
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
};
exports.isCPFValid = isCPFValid;
const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
exports.formatBytes = formatBytes;
/*
interface GetFirebaseRemoteConfigProps {
  minimumFetchIntervalMillis: number;
  fetchTimeoutMillis: number;
}

export const getFirebaseRemoteConfig = async (firebaseApp: any, options?: GetFirebaseRemoteConfigProps) => {
  const firebaseRemoteConfig = getRemoteConfig(firebaseApp);
  firebaseRemoteConfig.settings = {
    minimumFetchIntervalMillis: !options || !options.minimumFetchIntervalMillis ? 3600 : options.minimumFetchIntervalMillis,
    fetchTimeoutMillis: !options || !options.fetchTimeoutMillis ? 6000 : options.fetchTimeoutMillis,
  };

  return fetchAndActivate(firebaseRemoteConfig).then(() => {
    return getAll(firebaseRemoteConfig);

    // Or a single value
    // getValue(remoteConfig, "Firebase parameter key");

  }).catch((err: any) => {
    console.log("FIREBASE remoteConfig.fetchConfig() error", err)
  });
}
*/
const removeDuplicatesFromArray = (values) => {
    return [...new Set(values)];
};
exports.removeDuplicatesFromArray = removeDuplicatesFromArray;
const generateGoogleCalendarLink = (event) => {
    const start = event.startTime.toISOString().replace(/[.:-]/g, '');
    const end = event.endTime.toISOString().replace(/[.:-]/g, '');
    // Final URL
    // https://calendar.google.com/calendar/r/eventedit?text=TITLE&details=DESCRIPTION&location=LOCATION&dates=START/END
    const url = new URL('https://calendar.google.com/calendar/r/eventedit');
    url.searchParams.append('text', event.title || 'New Event');
    url.searchParams.append('details', event.description || 'No Description');
    url.searchParams.append('location', event.location || 'At some place');
    url.searchParams.append('dates', `${start}/${end}`);
    return url.href;
};
exports.generateGoogleCalendarLink = generateGoogleCalendarLink;
const isDOB = (value) => {
    if (!value || value.length !== 10) {
        return false;
    }
    const date = (0, dayjs_1.default)(value);
    if (!date.isValid()) {
        return false;
    }
    return date.isBefore((0, dayjs_1.default)()) && date.isAfter((0, dayjs_1.default)().subtract(150, 'year'));
};
exports.isDOB = isDOB;
