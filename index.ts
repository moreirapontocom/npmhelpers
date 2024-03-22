import dayjs from "dayjs";
// import {
//   getRemoteConfig,
//   fetchAndActivate,
//   getAll,
// } from "firebase/remote-config";

export const convertFirebaseTimestampToString = (firebaseTimestamp: { _seconds: number, _nanoseconds: number } | any, format: string = "YYYY-MM-DD HH:mm:ss"): string => {
  if (!firebaseTimestamp || !firebaseTimestamp._seconds) {
    return "";
  }

  const fireBaseTime = new Date(firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1000000);
  return dayjs(fireBaseTime).format(format);
}

export const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateRandomNumber = (min = 1, max = 99999): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const slugifyString = (str: string): string => {
  let newString: string = str.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');

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
}

export const formatNumberToCurrency = (locale: string = 'pt-BR', currency: string = 'BRL', amount: number): string => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency.toUpperCase() }).format(amount);
}

export const convertUrlToLink = (text: string, target: string = "_blank") => {
  return text.replace(/(https?:\/\/[^\s]+)/g, `<a href="$1" target="${target}">$1</a>`);
}

export const isValidEmail = (email: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const isValidUrl = (url: string): boolean => {
  const re = /^(http|https):\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return re.test(String(url).toLowerCase());
}

export const randomString = (length: number = 10) => {
  const dictionary: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let random: string = "";
  for (let i = 0; i < length; i++) {
    random += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }
  return random;
}

export const copyToClipboard = (item: string): boolean => {
  try {
    const create_copy = (e: any): any => {
      e.clipboardData.setData('text/plain', item);
      e.preventDefault();
    }
    document.addEventListener('copy', create_copy);
    document.execCommand('copy');
    document.removeEventListener('copy', create_copy);
    return true;
  } catch (_: any) {
    return false;
  }
}

export const onlyNumbers = (text: string | null): string => {
  if (!text || text === "") {
    return "";
  }

  return text.replace(/\D/g, "");
};

export const hideEmail = (email: string): string => {
  const [name, domain] = email.split("@");
  return `${name.substring(0, 2)}...@${domain}`;
};

export const isCPFValid = (cpf: string): boolean => {
  cpf = onlyNumbers(cpf);

  const invalids: string[] = ["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"];

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

export const formatBytes = (bytes: any, decimals: any = 2): string => {
  if (!+bytes) return '0 Bytes';

  const k: number = 1024;
  const dm: number = decimals < 0 ? 0 : decimals;
  const sizes: string[] = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  const i: any = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

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

export const removeDuplicatesFromArray = (values: any[]): any[] => {
  return [...new Set(values)];
}

interface GenerateGoogleCalendarLinkProps {
  title: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
}

export const generateGoogleCalendarLink = (event: GenerateGoogleCalendarLinkProps) => {
  const start: string = event.startTime.toISOString().replace(/[.:-]/g, '')
  const end: string = event.endTime.toISOString().replace(/[.:-]/g, '')

  // Final URL
  // https://calendar.google.com/calendar/r/eventedit?text=TITLE&details=DESCRIPTION&location=LOCATION&dates=START/END

  const url: any = new URL('https://calendar.google.com/calendar/r/eventedit');
  url.searchParams.append('text', event.title || 'New Event');
  url.searchParams.append('details', event.description || 'No Description');
  url.searchParams.append('location', event.location || 'At some place');
  url.searchParams.append('dates', `${start}/${end}`);
  return url.href;
}

export const isDOB = (value: any) => {
  if (!value || value.length !== 10) {
    return false;
  }

  const date = dayjs(value);
  if (!date.isValid()) {
    return false;
  }

  return date.isBefore(dayjs()) && date.isAfter(dayjs().subtract(150, 'year'));
}
