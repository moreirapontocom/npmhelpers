# Components

### Alert
### ColumnsMatcher

If `columnsFrom` and `columnsTo` have different length, it will show a warning, but you can still use the component.

```typescript
<ColumnsMatcher
  columnsFrom={["array","of","columns"]}
  columnsTo={["columns","to","match"]}
  fromDescription="Columns from..."
  toDescription="Columns to..."
  onMatchColumns={(columns: any) => console.log(columns)}
/>
```

### Confirm

Need to include `ConfirmProvider` (included in this package).

```typescript
root.render(
  <React.StrictMode>
    <ConfirmProvider>
      <App />
    </ConfirmProvider>
  </React.StrictMode>
);
```

Usage:

```typescript
import { Confirm } from "@moreirapontocom/npmhelpers";

const {setConfirm} = useContext(ConfirmContext);

<Confirm />

<button
  ...
  onClick={() => {
    setConfirm({
      type: "danger", // primary || success || danger || info || warning
      title: "<Confirm title>",
      message: "<Confirm message>",
      buttonLabel: "<Button label>",
      buttonCancelLabel: "<Button Cancel label>",
      onConfirm: () => {
        // Do something
      },
    })
  }}>
    Button label
  </button>
```

### CsvReader
```typescript
const [csvRawData, setCsvRawData] = useState(null as any);

<Upload
  accept="text/csv"
  onUpload={(e: any) => {
    setCsvRawData(e.content)
  }}
/>

<CsvReader
  rawData={csvRawData}
  couterLabel="registros encontrados" />
```

### DownloadXlsx
### buildXlsx
### Expander
### Loading
### CustomModal

### Popover

```typescript
<CustomPopover
  header="Header"
  body="body">
    ...
</CustomPopover>
```

### Separator

### TextWithTooltip

```typescript
<TextWithTooltip
  id="unique-id"
  tooltip="Tooltip text">
    Children (button, link, text, etc)
</TextWithTooltip>
```

### Upload

To read a CSV file and get its content:
```typescript

<Upload
  accept="text/csv"
  folder=""
  showProgress={BOOLEAN}
  loading={BOOLEAN}
  onUpload={(e: any) => console.log(e)} />
```
You can also read any file and upload it to Firebase Storage Bucket. (This feature is working but the doc is not ready yet).

# Contexts

### AlertContext
### AlertProvider
### UserContext
### UserProvider
### ConfirmContext
### ConfirmProvider

# Helpers

### convertFirebaseTimestampToString
### convertUrlToLink
### copyToClipboard
### currencies
### currencyFormatter
### detectUrlInString
### formatBytes
### formatNumberToCurrency
### generateGoogleCalendarLink
### generateRandomNumber
### generateRandomString
### getCurrencyDetails
### hideEmail
### isCPFValid

```typescript
isCPFValid("01234567890"); // true
isCPFValid("12345"); // false
```

### isDOB
### isValidEmail

```typescript
isValidEmail("email@domain.com"); // true
isValidEmail("email@domain"); // false
isValidEmail("email.com"); // false
```

### isValidUrl

```typescript
isValidUrl("https://google.com"); // true
isValidUrl("google.com"); // true
isValidUrl("google@com"); // false
```

### onlyNumbers

```typescript
const phone: any = "+1 (805) 123-456";
onlyNumbers(phone); // 1805123456
```

### openWhatsappChat
### removeDuplicatesFromArray
### searchZipcode

```typescript
await searchZipcode("BR_ZIPCODE_HERE").then((response: any) => {
  console.log(response);
});
```

Response:
```javascript
{
  bairro: "<...>"
  cep: "<...>"
  complemento: "<...>"
  ddd: "<...>"
  gia: "<...>"
  ibge: "<...>"
  localidade: "<...>"
  logradouro: "<...>"
  siafi: "<...>"
  uf: "<...>"
}
```

### shareToWhatsapp
### sleep
### slugifyString

```typescript
const str: string = "This is my super-cool string"
slugifyString(str); // this-is-my-super-cool-string
```
### truncateString