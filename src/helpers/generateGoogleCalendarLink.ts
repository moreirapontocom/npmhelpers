interface GenerateGoogleCalendarLinkProps {
  title: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
}

const generateGoogleCalendarLink = (event: GenerateGoogleCalendarLinkProps) => {
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

export default generateGoogleCalendarLink;
